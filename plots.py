import pandas as pd
import matplotlib.pyplot as plt

lacuna_stats_df = pd.read_csv("./statistics/lacuna_statistics.csv")
muzeel_stats_df = pd.read_csv("./statistics/muzeel_statistics.csv")

# Drop subjects from muzeel_stats_df that are not present in lacuna statistics (lacuna_stats_df)
for index, row in muzeel_stats_df.iterrows():
  if not row['Subject'] in list(lacuna_stats_df['Subject']):
    muzeel_stats_df.drop(index, inplace=True)

muzeel_stats_df['Data'] = 'Muzeel'
lacuna_stats_df['Data'] = 'Lacuna'
# print(muzeel_stats_df)

comb = pd.concat([muzeel_stats_df, lacuna_stats_df])

for metric in ["Precision", "Recall", "F-Score"]:
  comb.boxplot(column=[metric], by="Data")
  plt.suptitle(f'{metric}: Lacuna vs Muzeel', fontsize=20)
  plt.title('')
  plt.xlabel('Tool', fontsize=18, labelpad=10)
  plt.ylabel(metric, fontsize=16, labelpad=5)
  plt.savefig(f'./plots/{metric}.jpg')
  plt.show()
