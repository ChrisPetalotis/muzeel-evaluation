import pandas as pd

d1 = pd.read_csv("./_statistics_.csv")
d2 = pd.read_csv("./muzeel_precision_recall_fscore.csv")

missing = []
all_subjs = d2['web App']
applied_subjs = d1['Subject']

for subject in all_subjs:
  if not subject in list(applied_subjs):
    missing.append(subject)

print(missing)
print(len(missing))