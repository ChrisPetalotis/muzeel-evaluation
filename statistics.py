import pymysql.cursors
import os
import sys
import json
import csv
import pandas as pd
from urllib.parse import urlparse
from config import db_details

script_dir = os.path.dirname(__file__)  # Absolute dir path the script is in
TODOMVC_PATH = os.path.join(script_dir, "todomvc/")
SUBJECTS_PATH = os.path.join(script_dir, "todomvc/examples")
GROUNDTRUTH_PATH = os.path.join(script_dir, "todomvc/examples.groundtruth")
RANGES_PATH = os.path.join(script_dir, "ranges")


def db_connection():
    connection = pymysql.connect(
        host=db_details.get("host", "127.0.0.1"),
        user=db_details.get("username", "root"),
        port=db_details.get("port", 3306),
        password=db_details.get("password", "password"),
        db=db_details.get("database", "Muzeel"),
        autocommit=True,
        cursorclass=pymysql.cursors.DictCursor,
    )
    return connection


def get_js_from_db(
    target: str, connection: pymysql.connections.Connection, local: bool = False
):
    """
    Queries the database for all the cached files that have been stored for the <target> webpage.
    Filters only the JavaScript files and returns them.

    Arguments:
        target (str): subject for which to retrieve cache data from database
        connection (pymysql.connections.Connection): pymysql connection to the database
        local (bool): indicates whether the target subject is served on localhost or not
    """

    # Prefix endpoint with localhost:port when files are served localy
    endpoint = "http://localhost:8000/" if local else ""
    # Do not add a / at the end when the subject's endpoint has a .html suffix, otherwise add a /
    endpoint += f"{target}/" if not ".html" in target.split("/")[-1] else f"{target}"
    print(endpoint)
    with connection.cursor() as cursor:
        query = f"SELECT requestUrl, updateFilePath, type FROM cachedPages WHERE initiatingUrl='{endpoint}'"

        cursor.execute(query)
        db_response = cursor.fetchall()

        js_entries = []
        for entry in db_response:
            if "javascript" in entry["type"]:
                js_entries.append(entry)

        return js_entries


def get_unused_ranges_muzeel(target: str, js_files: list[dict], local: bool = False):
    """
    Retrieves the ranges that have been identified as "dead" by Muzeel for each JavaScript file
    of the specified <target> and maps them to that file using a dictionary.

    Arguments:
        target (str): subject for which to create a dictionary that maps JavaScript file names to
        dead function ranges
        js_files (list[dir]): list of entries from database for the specified <target> that correspond
        to JavaScript files
    """
    endpoint = "http://localhost:8000/" if local else ""
    endpoint += f"{target}/" if not ".html" in target.split("/")[-1] else f"{target}"
    endpoint = endpoint.replace("/", "_")

    ranges = {}
    for file in js_files:
        filename = file["updateFilePath"].split(".")[
            0
        ]  # Name of file that contains dead function ranges
        path_to_file = f"{RANGES_PATH}/{endpoint}/{filename}.txt"

        # Maps detected dead funciton ranges to corresponding file name using the path to the JavaScript
        # file as a key
        with open(path_to_file) as start_end_file:
            ranges[file["requestUrl"].split(f"{target}/")[-1]] = [
                line.rstrip() for line in start_end_file
            ]

    return ranges


def get_unused_functions_gt(target):

    all_path = f"{GROUNDTRUTH_PATH}/{target}/_all_functions.json"
    alive_path = f"{GROUNDTRUTH_PATH}/{target}/_alive_functions.json"
    unused_path = f"{GROUNDTRUTH_PATH}/{target}/_unused_functions.json"

    unused_functions = []

    with open(all_path) as all_functions, open(alive_path) as alive_functions:

        # Load all detected functions into a list
        try:
            all_js = json.load(all_functions)
        except json.decoder.JSONDecodeError as e:
            all_js = []
            print(f'File "{all_path}" is empty')

        # Load functions identified as alive into a list
        try:
            alive_js = json.load(alive_functions)
        except json.decoder.JSONDecodeError as e:
            unused_functions = all_js
            alive_js = []
            print(f'File "{alive_path}" is empty')

        # Creates a list containing the unused functions, based on the values that exist in _all_functions.json
        # but not in _alive_functions.json for the target subject
        if alive_js:
            for all_function in all_js:
                all_file = all_function["file"]
                all_body_range = all_function["range"]

                isAlive = False
                for alive_function in alive_js:
                    alive_file = alive_function["file"]
                    alive_body_range = alive_function["range"]

                    if all_file in alive_file and all_body_range == alive_body_range:
                        isAlive = True
                        # print(all_file, all_body_range, alive_body_range)
                        break

                if not isAlive:
                    unused_functions.append(all_function)
                    # Muzeel's end value for each range has an offset of +1, so we subtract 1 from the end value of
                    # bodyRange in ground truth to perform comparisons correctly
                    unused_functions[-1]["bodyRange"][1] -= 1

            number_of_all = len(all_js)
            number_of_alive = len(alive_js)
            number_of_unused = len(unused_functions)

    # Group by filename
    ranges = {}
    for function in unused_functions:
        if function["file"] in ranges:
            ranges[function["file"]].append(function["bodyRange"])
        else:
            ranges[function["file"]] = [function["bodyRange"]]

    with open(unused_path, "w") as unused_functions_file:
        json.dump(unused_functions, unused_functions_file)

    return ranges, number_of_all, number_of_alive, number_of_unused


def get_positives(unused_muzeel: list[dict], unused_gt: list[dict]):
    true_positives = 0
    false_positives = 0
    # The number of ranges that Muzeel detects corresponds to the number of functions that are considered to be unused
    total_muzeel_ranges = 0
    # print(muzeel_ranges.keys())

    # For each file detected by Muzeel
    for filename_muz, ranges_muz in unused_muzeel.items():
        # Increase the number of detected ranges/functions by the length of ranges for the current file
        total_muzeel_ranges += len(ranges_muz)

        if filename_muz in unused_gt:
            ranges_gt = unused_gt[filename_muz]
            for r_muz in ranges_muz:
                found = False
                for r_gt in ranges_gt:
                    # print(r_muz, ",".join([str(r_gt[0]), str(r_gt[1])]))
                    # break
                    if r_muz == ",".join([str(r_gt[0]), str(r_gt[1])]):
                        found = True
                        true_positives += 1
                        break
                if not found:
                    false_positives += 1
                # break
        # If the file identified by Muzeel does not exist in the ground truth at all, then all the detected
        # ranges in the Muzeel file are considered false positives
        else:
            false_positives += len(ranges_muz)

    return total_muzeel_ranges, true_positives, false_positives


def get_false_negatives(unused_muzeel: list[dict], unused_gt: list[dict]):
    false_negatives = 0

    for filename_gt, ranges_gt in unused_gt.items():
        if filename_gt in unused_muzeel:
            ranges_muz = unused_muzeel[filename_gt]

            for r_gt in ranges_gt:
                found = False
                r_gt = ",".join([str(r_gt[0]), str(r_gt[1])])

                for r_muz in ranges_muz:
                    if r_gt == r_muz:
                        found = True
                        break
                if not found:
                    false_negatives += 1
        else:
            false_negatives += len(ranges_gt)

    return false_negatives


def get_prf(true_positives: int, false_positives: int, false_negatives: int):
    """
    precision = TruePositives / (TruePositives + FalsePositives)
    recall = TruePositives / (TruePositives + FalseNegatives)
    fscore = 2 x [(Precision x Recall) / (Precision + Recall)]
    """
    precision = true_positives / (true_positives + false_positives)
    recall = true_positives / (true_positives + false_negatives)

    try:
        fscore = 2 * ((precision * recall) / (precision + recall))
    except ZeroDivisionError:
        fscore = 0

    return round(precision, 3), round(recall, 3), round(fscore, 3)


def get_stats(
    muzeel_files: int,
    unused_muzeel: list[dict],
    unused_gt: list[dict],
):
    """
    For a certain range in a file:
      true positives: say it is unused and it is indeed unused
      false positives: say it is unused but it is used
    """

    total_muzeel_ranges, true_positives, false_positives = get_positives(
        unused_muzeel, unused_gt
    )
    false_negatives = get_false_negatives(unused_muzeel, unused_gt)

    print("True positives:", true_positives)
    print("False positives:", false_positives)
    print("False negatives:", false_negatives)
    print(f"Out of {total_muzeel_ranges} Muzeel detections in {muzeel_files} files.")

    precision, recall, fscore = get_prf(
        true_positives, false_positives, false_negatives
    )

    return (
        total_muzeel_ranges,
        true_positives,
        false_positives,
        false_negatives,
        precision,
        recall,
        fscore,
    )


def generate_descriptive_statistics(metric: str):
    df = pd.read_csv("statistics/muzeel_statistics.csv")

    min_val = df[metric].min()
    max_val = df[metric].max()
    median = df[metric].median()
    mean = df[metric].mean()
    std = df[metric].std()
    cv = (std / mean) * 100

    return min_val, max_val, median, mean, std, cv


if __name__ == "__main__":
    # Get JavaScript files for target webpage
    with open(f"{script_dir}/endpoints.txt") as endpoints, open(
        f"{script_dir}/statistics/muzeel_statistics.csv", "w"
    ) as statistics:

        writer = csv.writer(statistics)
        header = [
            [
                "Subject",
                "#Functions",
                "#Alive Functions",
                "#Dead Function",
                "ClaimedUnusedFunctions",
                "True Positives",
                "False Positives",
                "False Negatives",
                "Precision",
                "Recall",
                "F-Score",
            ]
        ]
        writer.writerows(header)

        for endpoint in endpoints:

            endpoint = endpoint.rstrip().split("/")
            target = (
                endpoint[-2] if not ".html" in endpoint[-1] else "/".join(endpoint[-2:])
            )

            js_entries = get_js_from_db(f"examples/{target}", db_connection(), True)
            print(
                f"Length of JavaScript files stored in database for {target}: {len(js_entries)}"
            )
            # print(js_entries)

            # Get starting and ending posisitions of unused functions in each file
            unused_ranges_muzeel = get_unused_ranges_muzeel(
                f"examples/{target}", js_entries, True
            )
            # print(
            #     f"Functions that are considered unused based on Muzeel:\n{unused_ranges_muzeel}\n"
            # )

            if ".html" in target:
                target = target.split("/")[0]

            (
                unused_functions_gt,
                number_of_all,
                number_of_alive,
                number_of_unused,
            ) = get_unused_functions_gt(target)
            # print(
            #     f"Functions that are considered unused based on the ground truth:\n{unused_functions_gt}\n"
            # )

            (
                claimed_unused,
                true_positives,
                false_positives,
                false_negatives,
                precision,
                recall,
                fscore,
            ) = get_stats(len(js_entries), unused_ranges_muzeel, unused_functions_gt)

            stats = [
                target,
                number_of_all,
                number_of_alive,
                number_of_unused,
                claimed_unused,
                true_positives,
                false_positives,
                false_negatives,
                precision,
                recall,
                fscore,
            ]
            writer.writerows([stats])

    with open(
        f"{script_dir}/statistics/muzeel_descriptive_statistics_prf.csv", "w"
    ) as desc_statistics:
        writer = csv.writer(desc_statistics)
        header = [["Metric", "Min.", "Max.", "Median", "Mean", "SD", "CV"]]
        writer.writerows(header)

        for metric in ["Precision", "Recall", "F-Score"]:
            min_val, max_val, median, mean, std, cv = generate_descriptive_statistics(
                metric
            )

            stats = [metric, min_val, max_val, median, mean, std, cv]
            writer.writerows([stats])
