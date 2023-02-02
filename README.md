# Muzeel: Assessing the impact of JavaScript dead code elimination on mobile web performance

## Intro
This repo is a copy of [Muzeel](https://github.com/comnetsAD/Muzeel) with slight modifications to make it work properly for the evaluation of the performance of web applications hosted on localhost as part of a study that has been conducted by a Computer Science Master's student from the [Vrije Universiteit Amsterdam](https://vu.nl/nl). It contains all the necessary files to evaluate the performance of Muzeel, a dead code elimination tool, on a set of 29 web applications. These applications originate from the [TodoMVC project](https://todomvc.com/). This README file is based on the original, with edits made to describe the process that was followed for the study.

Muzeel is a framework for the identification and elimination of unused JavaScript functions, also known as "deadcode". It is a black-box approach requiring neither knowledge of the code nor execution traces. The core design principle of Muzeel is to address the challenge of dynamically analyzing JavaScript after the page is loaded, by emulating all possible user interactions with the page, such that the used functions (executed when interactivity events fire) are accurately identified, whereas unused functions are filtered out and eliminated.

## Paper
You can find the paper [here].
You can watch the presentation of Muzeel on this [video].

## Requirements

The steps described in this file were executed on a machine with the following hardware and software specifications:

- node version: 18.12.1
- npm version: 8.19.2
- python: 3.10.9
- Hardware: Macbook pro (M1 Pro chip), 32GB ram

## Setup
### Step 1. Create MySQL database and required structure
Install MySQL and an easy GUI that will allow you to access the DB, e.g., phpMyAdmin (Ubuntu), or DBeaver (MacOS).

Import the DB template "templateDB.sql" into your MySQL under the DB name "muzeel". This 
should create a table called "cachedPages" with various columns.

The MySQL database needs to stay running throughout the execution of the steps described in this README.

### Step 2. Create necessary folders
At the top level of the local Muzeel repo, create the following directories:

- errors_internal
- outputs_internal
- results_internal

### Step 3. Create a list of sites

Inside the endpoints.txt file list the sites that you are interested in running Muzeel on. Make sure that each site URL is on a separate line, and each site URL ends with a "/". This list is currently populated with the 29 endpoints that were used during the experiment.

### Step 4. Update Muzeel configurations

Edit the config.py file to reflect the database configurations that you have chosen. There are five main parameters to configure: 1) DB name, 2) MySQL username, 3) MySQL password, 4) full path to the local Muzeel git repo, and 5) the MySQL port number (default 3306).

### Step 5. Install dependencies
The subjects used for this study are located within the *todomvc* folder and are properly configured to run (inlcuding node modules), when the appropriate command is exectuted (as explained later), thus no dependencies need to be installed for them.

However, to host the web pages and run Muzeel, some Node and Python dependencies are necessary. To install them, in a terminal run the following command:

```
bash setup.sh
```

### Step 6. Host websites
Before executing Lacuna, the target web applications need to be hosted locally. To achieve this, run the following command in a terminal within the todomvc folder:

```
gulp test-server
```

## Execution
### Step 1. Run the cache proxy 
This proxy facilitates the caching of the files of the target endpoint.

In a separate terminal run the caching proxy as:
````` sh
cd proxies/
mitmdump -s cache_proxy.py --set block_global=false --ssl-insecure --set upstream-cert=false --listen-port 9701
`````

Make sure that the proxy is not throwing any errors and that it is showing the following message "Proxy server listening at http://*:9701"
#
### Step 2. Run the read proxy
This proxy facilitates the execution of Lacuna on the target endpoint.

Without stopping the other proxy, in a separate terminal run the caching proxy as:
````` sh
cd proxies/
mitmdump -s read_proxy.py --set block_global=false --ssl-insecure --set upstream-cert=false --listen-port 9700
`````

Make sure that the proxy is not throwing any errors and that it is showing the following message "Proxy server listening at http://*:9700".

#

### Step 3. Run Muzeel to eliminate deadcode
In a separate terminal, and without stopping the proxies from running in the background, run the following command:

```
python3 execute_muzeel.py
```

This should go over the list of sites that are listed in endpoints.txt, and then opens each page in chrome while scrolling through the site. When the caching for each page is completed, several entries have been stored in the DB, as well as multiple files have been saved inside the data folder (with .c, .h, and .u extensions). Next, Lacuna proceeds to eliminate the dead code from the files and functions that it deems as unused. By the end of this, you should be able to see the deadcode eliminated JavaScript files stored inside /data/muzeel, each with a .m extension.

The script execution could take a while, depending on the size of the endpoints.txt list and the complexity of the target websites. At the end of this step, it is safe to stop the cache and read proxies from running.

#
### Step 4. Get statistics for Muzeel results

When Muzeel has been applied on every target endpoint, performance metrics and statistics about them can be retrieved by running the following command in the terminal:

```
python3 statistics.py
```

When this command completes, two new files have been created in the statistics folder:
- muzeel_metrics.csv.
  This file contains information about the number of all, alive, and dead functions that Muzeel managed to identify for each target endpoint, as well as true positives, false positives, false negatives, precison, recall, and f-score values for them.

- muzeel_descriptive_statistics_prf.csv.
  In this file, descriptive statistics about the precision, recall, and f-score of Muzeel across all subjects are reported. The statistics generated are the following: min., max., median, mean, standard deviation (SD), and coefficient of variation (CV).

The statistics folder also contains a file named *lacuna_statistics.csv* that was used to compare the performance results of Muzeel with the results of [Lacuna](https://github.com/S2-group/Lacuna).

#
### Step 5. Generate graphs
To visualise the differences between Muzeel and Lacuna on precision, recall, and f-score, the following command creates a box plot for each performance metric:

```
python3 plots.py
```

The generated plots are saved within the *plots* folder.

[here]: <https://dl.acm.org/doi/10.1145/3517745.3561427>
[video]: <https://iframe.videodelivery.net/eyJraWQiOiI3YjgzNTg3NDZlNWJmNDM0MjY5YzEwZTYwMDg0ZjViYiIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlZDI0ZTFlYjQ3NGQwMjA4NmQ3ZWZkYTc5NGNlMGQzMSIsImtpZCI6IjdiODM1ODc0NmU1YmY0MzQyNjljMTBlNjAwODRmNWJiIiwiZXhwIjoxNjcyODQ1NzU0fQ.a39D0zQ4eIy4ObEF6RQIh4tCIgaiv4zjjV3aGNarL0h-HoFXUJVkSgpkSRSzhaAHxFB7k8oCAcuAE-rOYm-1JpvC2AkkqRXS1G0N-a7i9r--a3oAl0q-H-WpPlAkPafq7mUdbiTh3AL-Wgwi3FaKpuLKlzemvHUtITC3D9WiNkhWcobXkzNzRATOonVHFIw1zjUWdTDkODZjLzxozyZonmsjiiCYVB31nlqK1zf9TpcBw7Beitcv1Ri0LTeNjQRFEXGm9pjHu8MZBRglbq1wfzTrFs33gy-Ox94bmylOZx5FgWIha_yFKxHcCIiCfm1q8rWHOwvQMcYEytnM7k6HPg>
