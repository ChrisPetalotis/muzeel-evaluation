import os
import sys
import subprocess


script_dir = os.path.dirname(__file__)  # Absolute dir path the script is in

with open(f"{script_dir}/endpoints.txt") as endpoints:
    for endpoint in endpoints:
        endpoint = endpoint.rstrip()

        with open(f"{script_dir}/sites_lists/site_list_1", "w") as sites_list:
            sites_list.write(endpoint)

        print("Caching page...")
        subprocess.call(
            [
                sys.executable,
                f"{script_dir}/scraper.py",
                "9701",
                "sites_lists/site_list_1",
            ]
        )
        print("Page cached!")

        print("Eliminating dead code...")
        subprocess.call(
            [sys.executable, f"{script_dir}/run_test.py", "site_list_1", "9700"]
        )
        print("Dead code eliminated!")
