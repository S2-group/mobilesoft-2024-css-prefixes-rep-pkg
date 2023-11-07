# library & dataset
import seaborn as sns
import pandas as pd 
import matplotlib.pyplot as plt
import scipy
import matplotlib.ticker as mtick
import statsmodels.api as sm


# dataframe for Pixel 5 data
df_pixel5 = pd.read_csv('data_final_Pixel5.csv')


df_pixel5_chrome = df_pixel5.loc[df_pixel5["browser"] == 'chrome']
df_pixel5_firefox = df_pixel5.loc[df_pixel5["browser"] == 'firefox']
df_pixel5_opera = df_pixel5.loc[df_pixel5["browser"] == 'opera']

df_pixel5_chrome_without_CSS = df_pixel5_chrome.loc[df_pixel5["prefix"] == 0]
df_pixel5_firefox_without_CSS = df_pixel5_firefox.loc[df_pixel5["prefix"] == 0]
df_pixel5_opera_without_CSS = df_pixel5_opera.loc[df_pixel5["prefix"] == 0]

df_pixel5_chrome_with_CSS = df_pixel5_chrome.loc[df_pixel5["prefix"] == 1]
df_pixel5_firefox_with_CSS = df_pixel5_firefox.loc[df_pixel5["prefix"] == 1]
df_pixel5_opera_with_CSS = df_pixel5_opera.loc[df_pixel5["prefix"] == 1]

#########################################
########## ENERGY CONSUMPTION ###########
#########################################

############## HISTOGRAMS ###############
e_fig, ax_e = plt.subplots(nrows=2,ncols=3,figsize=(10,6))

chrome = sns.distplot(df_pixel5_chrome_without_CSS["e"], color='blue', kde=True,  ax=ax_e[0][0])
firefox = sns.distplot(df_pixel5_firefox_without_CSS["e"],  color='blue', kde=True,  ax=ax_e[0][1])
opera = sns.distplot(df_pixel5_opera_without_CSS["e"], color='blue', kde=True, ax=ax_e[0][2])

chrome2 = sns.distplot(df_pixel5_chrome_with_CSS["e"], color='orange', kde=True,  ax=ax_e[1][0])
firefox2 = sns.distplot(df_pixel5_firefox_with_CSS["e"], color='orange', kde=True,  ax=ax_e[1][1])
opera2 = sns.distplot(df_pixel5_opera_with_CSS["e"], color='orange', kde=True, ax=ax_e[1][2])

chrome.set(title='Chrome, With CSS Prefixes')
chrome.set(xlabel='Energy Consumption (Joules)')

firefox.set(title='Firefox, With CSS Prefixes')
firefox.set(xlabel='Energy Consumption (Joules)')

opera.set(title='Opera, With CSS Prefixes')
opera.set(xlabel='Energy Consumption (Joules)')

chrome2.set(title='Chrome, Without CSS Prefixes')
chrome2.set(xlabel='Energy Consumption (Joules)')

firefox2.set(title='Firefox, Without CSS Prefixes')
firefox2.set(xlabel='Energy Consumption (Joules)')

opera2.set(title='Opera, Without CSS Prefixes')
opera2.set(xlabel='Energy Consumption (Joules)')

plt.tight_layout(pad=1.0)
plt.setp(ax_e[0][0], xlim=ax_e[0,0].get_xlim(),  ylim=ax_e[1,1].get_ylim())
plt.setp(ax_e[0][1], xlim=ax_e[0,0].get_xlim(),  ylim=ax_e[1,1].get_ylim())
plt.setp(ax_e[0][2], xlim=ax_e[0,0].get_xlim(),  ylim=ax_e[1,1].get_ylim())
plt.setp(ax_e[1][0], xlim=ax_e[0,0].get_xlim(),  ylim=ax_e[1,1].get_ylim())
plt.setp(ax_e[1][1], xlim=ax_e[0,0].get_xlim(),  ylim=ax_e[1,1].get_ylim())
plt.setp(ax_e[1][2], xlim=ax_e[0,0].get_xlim(),  ylim=ax_e[1,1].get_ylim())
plt.savefig("Pixel5_Energy_Consumption_histogram.png")
plt.clf()


############## VIOLIN PLOTS ###############
e2_fig, ax_e2 = plt.subplots(ncols=3,figsize=(8,4),sharey = True)
chrome2 = sns.violinplot(data=df_pixel5_chrome, x=df_pixel5_chrome["prefix"], y=df_pixel5_chrome["e"], palette='pastel', ax=ax_e2[0])
sns.boxplot(x=df_pixel5_chrome["prefix"], y=df_pixel5_chrome["e"], data=df_pixel5_chrome, palette='deep', width=0.3,boxprops={'zorder': 2}, ax=chrome2)
firefox2 = sns.violinplot(data=df_pixel5_firefox, x=df_pixel5_firefox["prefix"], y=df_pixel5_firefox["e"], palette='pastel', ax=ax_e2[1])
sns.boxplot(x=df_pixel5_firefox["prefix"], y=df_pixel5_firefox["e"], data=df_pixel5_firefox, palette='deep', width=0.3,boxprops={'zorder': 2}, ax=firefox2)
opera2 = sns.violinplot(data=df_pixel5_opera, x=df_pixel5_opera["prefix"], y=df_pixel5_opera["e"], palette='pastel', ax=ax_e2[2])
sns.boxplot(x=df_pixel5_opera["prefix"], y=df_pixel5_opera["e"], data=df_pixel5_opera, palette='deep', width=0.3,boxprops={'zorder': 2}, ax=opera2)

chrome2.set(title='Chrome')
chrome2.set_xticklabels(['Without CSS \n prefixes','With CSS \n prefixes'])
chrome2.set(xlabel='CSS Prefixes', ylabel='Energy Consumption (Joules)')

firefox2.set(title='Firefox')
firefox2.set_xticklabels(['Without CSS \n prefixes','With CSS \n prefixes'])
firefox2.set(xlabel='CSS Prefixes', ylabel='Energy Consumption (Joules)')

opera2.set(title='Opera')
opera2.set_xticklabels(['Without CSS \n prefixes','With CSS \n prefixes'])
opera2.set(xlabel='CSS Prefixes', ylabel='Energy Consumption (Joules)')

ax_e2[0].yaxis.set_tick_params(labelbottom=True)
ax_e2[1].yaxis.set_tick_params(labelbottom=True)
ax_e2[2].yaxis.set_tick_params(labelbottom=True)

plt.setp(ax_e2[0].get_yticklabels(),visible=True)
plt.tight_layout()
plt.savefig("Pixel5_Energy_Consumption.png")
plt.clf()


#########################################
############# LOADING TIME ##############
#########################################

############## HISTOGRAMS ###############
e_fig, ax_e = plt.subplots(nrows=2,ncols=3,figsize=(10,6))

chrome = sns.distplot(df_pixel5_chrome_without_CSS["lt"], color='blue', kde=True,  ax=ax_e[0][0])
firefox = sns.distplot(df_pixel5_firefox_without_CSS["lt"],  color='blue', kde=True,  ax=ax_e[0][1])
opera = sns.distplot(df_pixel5_opera_without_CSS["lt"], color='blue', kde=True, ax=ax_e[0][2])

chrome2 = sns.distplot(df_pixel5_chrome_with_CSS["lt"], color='orange', kde=True,  ax=ax_e[1][0])
firefox2 = sns.distplot(df_pixel5_firefox_with_CSS["lt"], color='orange', kde=True,  ax=ax_e[1][1])
opera2 = sns.distplot(df_pixel5_opera_with_CSS["lt"], color='orange', kde=True, ax=ax_e[1][2])

chrome.set(title='Chrome, With CSS Prefixes')
chrome.set(xlabel='Loading Time (milliseconds)')

firefox.set(title='Firefox, With CSS Prefixes')
firefox.set(xlabel='Loading Time (milliseconds)')

opera.set(title='Opera, With CSS Prefixes')
opera.set(xlabel='Loading Time (milliseconds)')

chrome2.set(title='Chrome, Without CSS Prefixes')
chrome2.set(xlabel='Loading Time (milliseconds)')

firefox2.set(title='Firefox, Without CSS Prefixes')
firefox2.set(xlabel='Loading Time (milliseconds)')

opera2.set(title='Opera, Without CSS Prefixes')
opera2.set(xlabel='Loading Time (milliseconds)')

plt.tight_layout(pad=1.0)
plt.setp(ax_e[0][0], xlim=ax_e[1,2].get_xlim(),  ylim=ax_e[0,2].get_ylim())
plt.setp(ax_e[0][1], xlim=ax_e[1,2].get_xlim(),  ylim=ax_e[0,2].get_ylim())
plt.setp(ax_e[0][2], xlim=ax_e[1,2].get_xlim(),  ylim=ax_e[0,2].get_ylim())
plt.setp(ax_e[1][0], xlim=ax_e[1,2].get_xlim(),  ylim=ax_e[0,2].get_ylim())
plt.setp(ax_e[1][1], xlim=ax_e[1,2].get_xlim(),  ylim=ax_e[0,2].get_ylim())
plt.setp(ax_e[1][2], xlim=ax_e[1,2].get_xlim(),  ylim=ax_e[0,2].get_ylim())
plt.savefig("Pixel5_Loading_Time_histogram.png")
plt.clf()


############## VIOLIN PLOTS ###############
lt2_fig, ax_lt2 = plt.subplots(ncols=3,figsize=(8,4),sharey = True)
chrome_lt2 = sns.violinplot(data=df_pixel5_chrome, x=df_pixel5_chrome["prefix"], y=df_pixel5_chrome["lt"], palette='pastel', ax=ax_lt2[0])
sns.boxplot(x=df_pixel5_chrome["prefix"], y=df_pixel5_chrome["lt"], data=df_pixel5_chrome, palette='deep', width=0.3,boxprops={'zorder': 2}, ax=chrome_lt2)
firefox_lt2 = sns.violinplot(data=df_pixel5_firefox, x=df_pixel5_firefox["prefix"], y=df_pixel5_firefox["lt"], palette='pastel', ax=ax_lt2[1])
sns.boxplot(x=df_pixel5_firefox["prefix"], y=df_pixel5_firefox["lt"], data=df_pixel5_firefox, palette='deep', width=0.3,boxprops={'zorder': 2}, ax=firefox_lt2)
opera_lt2 = sns.violinplot(data=df_pixel5_opera, x=df_pixel5_opera["prefix"], y=df_pixel5_opera["lt"], palette='pastel', ax=ax_lt2[2])
sns.boxplot(x=df_pixel5_opera["prefix"], y=df_pixel5_opera["lt"], data=df_pixel5_opera, palette='deep', width=0.3,boxprops={'zorder': 2}, ax=opera_lt2)

chrome_lt2.set(title='Chrome')
chrome_lt2.set_xticklabels(['Without CSS \n prefixes','With CSS \n prefixes'])
chrome_lt2.set(xlabel='CSS Prefixes', ylabel='Loading Time (milliseconds)')

firefox_lt2.set(title='Firefox')
firefox_lt2.set_xticklabels(['Without CSS \n prefixes','With CSS \n prefixes'])
firefox_lt2.set(xlabel='CSS Prefixes', ylabel='Loading Time (milliseconds)')

opera_lt2.set(title='Opera')
opera_lt2.set_xticklabels(['Without CSS \n prefixes','With CSS \n prefixes'])
opera_lt2.set(xlabel='CSS Prefixes', ylabel='Loading Time (milliseconds)')

ax_lt2[0].yaxis.set_tick_params(labelbottom=True)
ax_lt2[1].yaxis.set_tick_params(labelbottom=True)
ax_lt2[2].yaxis.set_tick_params(labelbottom=True)

plt.setp(ax_lt2[0].get_yticklabels(),visible=True)
plt.tight_layout()
plt.savefig("Pixel5_Loading_Time.png")
plt.clf()

#########################################
############## CPU MEMORY ###############
#########################################

############## HISTOGRAMS ###############
e_fig, ax_e = plt.subplots(nrows=2,ncols=3,figsize=(10,6))

chrome = sns.distplot(df_pixel5_chrome_without_CSS["cu"], color='blue', kde=True,  ax=ax_e[0][0])
firefox = sns.distplot(df_pixel5_firefox_without_CSS["cu"],  color='blue', kde=True,  ax=ax_e[0][1])
opera = sns.distplot(df_pixel5_opera_without_CSS["cu"], color='blue', kde=True, ax=ax_e[0][2])

chrome2 = sns.distplot(df_pixel5_chrome_with_CSS["cu"], color='orange', kde=True,  ax=ax_e[1][0])
firefox2 = sns.distplot(df_pixel5_firefox_with_CSS["cu"], color='orange', kde=True,  ax=ax_e[1][1])
opera2 = sns.distplot(df_pixel5_opera_with_CSS["cu"], color='orange', kde=True, ax=ax_e[1][2])

chrome.set(title='Chrome, With CSS Prefixes')
chrome.set(xlabel='CPU Usage (percentages)')

firefox.set(title='Firefox, With CSS Prefixes')
firefox.set(xlabel='CPU Usage (percentages)')

opera.set(title='Opera, With CSS Prefixes')
opera.set(xlabel='CPU Usage (percentages)')

chrome2.set(title='Chrome, Without CSS Prefixes')
chrome2.set(xlabel='CPU Usage (percentages)')

firefox2.set(title='Firefox, Without CSS Prefixes')
firefox2.set(xlabel='CPU Usage (percentages)')

opera2.set(title='Opera, Without CSS Prefixes')
opera2.set(xlabel='CPU Usage (percentages)')

plt.tight_layout(pad=1.0)
plt.setp(ax_e[0][0], xlim=ax_e[0,0].get_xlim(), ylim=ax_e[1,0].get_ylim())
plt.setp(ax_e[0][1], xlim=ax_e[0,0].get_xlim(), ylim=ax_e[1,0].get_ylim())
plt.setp(ax_e[0][2], xlim=ax_e[0,0].get_xlim(), ylim=ax_e[1,0].get_ylim())
plt.setp(ax_e[1][0], xlim=ax_e[0,0].get_xlim(), ylim=ax_e[1,0].get_ylim())
plt.setp(ax_e[1][1], xlim=ax_e[0,0].get_xlim(), ylim=ax_e[1,0].get_ylim())
plt.setp(ax_e[1][2], xlim=ax_e[0,0].get_xlim(), ylim=ax_e[1,0].get_ylim())
plt.savefig("Pixel5_CPU_Usage_histogram.png")
plt.clf()


############## VIOLIN PLOTS ###############
cpu2_fig, ax_cpu2 = plt.subplots(ncols=3,figsize=(8,4),sharey = True)
chrome_cpu2 = sns.violinplot(data=df_pixel5_chrome, x=df_pixel5_chrome["prefix"], y=df_pixel5_chrome["cu"], palette='pastel', ax=ax_cpu2[0])
sns.boxplot(x=df_pixel5_chrome["prefix"], y=df_pixel5_chrome["cu"], data=df_pixel5_chrome, palette='deep', width=0.3,boxprops={'zorder': 2}, ax=chrome_cpu2)
firefox_cpu2 = sns.violinplot(data=df_pixel5_firefox, x=df_pixel5_firefox["prefix"], y=df_pixel5_firefox["cu"], palette='pastel', ax=ax_cpu2[1])
sns.boxplot(x=df_pixel5_firefox["prefix"], y=df_pixel5_firefox["cu"], data=df_pixel5_firefox, palette='deep', width=0.3,boxprops={'zorder': 2}, ax=firefox_cpu2)
opera_cpu2 = sns.violinplot(data=df_pixel5_opera, x=df_pixel5_opera["prefix"], y=df_pixel5_opera["cu"], palette='pastel', ax=ax_cpu2[2])
sns.boxplot(x=df_pixel5_opera["prefix"], y=df_pixel5_opera["cu"], data=df_pixel5_opera, palette='deep', width=0.3,boxprops={'zorder': 2}, ax=opera_cpu2)

chrome_cpu2.set(title='Chrome')
chrome_cpu2.set_xticklabels(['Without CSS \n prefixes','With CSS \n prefixes'])
chrome_cpu2.set(xlabel='CSS Prefixes', ylabel='CPU Usage (percentages)')

firefox_cpu2.set(title='Firefox')
firefox_cpu2.set_xticklabels(['Without CSS \n prefixes','With CSS \n prefixes'])
firefox_cpu2.set(xlabel='CSS Prefixes', ylabel='CPU Usage (percentages)')

opera_cpu2.set(title='Opera')
opera_cpu2.set_xticklabels(['Without CSS \n prefixes','With CSS \n prefixes'])
opera_cpu2.set(xlabel='CSS Prefixes', ylabel='CPU Usage (percentages)')

#ax_cpu2[0].set_ylim(1, 100)
ax_cpu2[0].yaxis.set_tick_params(labelbottom=True)
ax_cpu2[1].yaxis.set_tick_params(labelbottom=True)
ax_cpu2[2].yaxis.set_tick_params(labelbottom=True)
ax_cpu2[0].yaxis.set_major_formatter(mtick.PercentFormatter())
ax_cpu2[1].yaxis.set_major_formatter(mtick.PercentFormatter())
ax_cpu2[2].yaxis.set_major_formatter(mtick.PercentFormatter())

plt.setp(ax_cpu2[0].get_yticklabels(),visible=True)
plt.tight_layout()
plt.savefig("Pixel5_CPU_Usage.png")
plt.clf()


#########################################
#########################################
#########################################
#########################################
#########################################

################# QQ-Plots #######################

# CHROME 
e_fig, ax_e = plt.subplots(nrows=2,ncols=3,figsize=(10,6))
chrome = sm.qqplot(df_pixel5_chrome_without_CSS["e"], line='q', ax=ax_e[0][0])
chrome2 = sm.qqplot(df_pixel5_chrome_with_CSS["e"], line='q', ax=ax_e[0][1])
chrome3 = sm.qqplot(df_pixel5_chrome_without_CSS["lt"], line='q', ax=ax_e[0][2])
chrome4 = sm.qqplot(df_pixel5_chrome_with_CSS["lt"], line='q', ax=ax_e[1][0])
chrome5 = sm.qqplot(df_pixel5_chrome_without_CSS["cu"], line='q', ax=ax_e[1][1])
chrome6 = sm.qqplot(df_pixel5_chrome_with_CSS["cu"], line='q', ax=ax_e[1][2])


ax_e[0][0].set(title='Without CSS Prefixes\nEnergy consumption')
ax_e[0][1].set(title='With CSS Prefixes\nEnergy consumption')
ax_e[0][2].set(title='Without CSS Prefixes\nLoading Time')
ax_e[1][0].set(title='With CSS Prefixes\nLoading Time')
ax_e[1][1].set(title='Without CSS Prefixes\nCPU Usage')
ax_e[1][2].set(title='With CSS Prefixes\nCPU Usage')


plt.tight_layout(pad=1.0)
plt.savefig("Pixel5_QQ_Plot_Chrome.png")
plt.clf()

# FIREFOX 
e_fig, ax_e = plt.subplots(nrows=2,ncols=3,figsize=(10,6))
firefox = sm.qqplot(df_pixel5_firefox_without_CSS["e"], line='q', ax=ax_e[0][0])
firefox2 = sm.qqplot(df_pixel5_firefox_with_CSS["e"], line='q', ax=ax_e[0][1])
firefox3 = sm.qqplot(df_pixel5_firefox_without_CSS["lt"], line='q', ax=ax_e[0][2])
firefox4 = sm.qqplot(df_pixel5_firefox_with_CSS["lt"], line='q', ax=ax_e[1][0])
firefox5 = sm.qqplot(df_pixel5_firefox_without_CSS["cu"], line='q', ax=ax_e[1][1])
firefox6 = sm.qqplot(df_pixel5_firefox_with_CSS["cu"], line='q', ax=ax_e[1][2])


ax_e[0][0].set(title='Without CSS Prefixes\nEnergy consumption')
ax_e[0][1].set(title='With CSS Prefixes\nEnergy consumption')
ax_e[0][2].set(title='Without CSS Prefixes\nLoading Time')
ax_e[1][0].set(title='With CSS Prefixes\nLoading Time')
ax_e[1][1].set(title='Without CSS Prefixes\nCPU Usage')
ax_e[1][2].set(title='With CSS Prefixes\nCPU Usage')


plt.tight_layout(pad=1.0)
plt.savefig("Pixel5_QQ_Plot_Firefox.png")
plt.clf()

# OPERA 
e_fig, ax_e = plt.subplots(nrows=2,ncols=3,figsize=(10,6))
opera = sm.qqplot(df_pixel5_opera_without_CSS["e"], line='q', ax=ax_e[0][0])
opera2 = sm.qqplot(df_pixel5_opera_with_CSS["e"], line='q', ax=ax_e[0][1])
opera3 = sm.qqplot(df_pixel5_opera_without_CSS["lt"], line='q', ax=ax_e[0][2])
opera4 = sm.qqplot(df_pixel5_opera_with_CSS["lt"], line='q', ax=ax_e[1][0])
opera5 = sm.qqplot(df_pixel5_opera_without_CSS["cu"], line='q', ax=ax_e[1][1])
opera6 = sm.qqplot(df_pixel5_opera_with_CSS["cu"], line='q', ax=ax_e[1][2])


ax_e[0][0].set(title='Without CSS Prefixes\nEnergy consumption')
ax_e[0][1].set(title='With CSS Prefixes\nEnergy consumption')
ax_e[0][2].set(title='Without CSS Prefixes\nLoading Time')
ax_e[1][0].set(title='With CSS Prefixes\nLoading Time')
ax_e[1][1].set(title='Without CSS Prefixes\nCPU Usage')
ax_e[1][2].set(title='With CSS Prefixes\nCPU Usage')


plt.tight_layout(pad=1.0)
plt.savefig("Pixel5_QQ_Plot_Opera.png")
plt.clf()



#########################################
#########################################
#########################################
#########################################
#########################################


################# Spearman's Correlation #######################

####################### WITHOUT CSS ########################
# For Chrome
df_e_cu = df_pixel5.loc[(df_pixel5["browser"] == 'chrome') & (df_pixel5['prefix'] == 0)]
coef, p = scipy.stats.spearmanr(df_e_cu['e'], df_e_cu['cu'])
print('Chrome Spearmans correlation coefficient: %.3f' % coef)
print('Chrome Spearmans correlation p-value: %.3f' % p)
alpha = 0.05
if p > alpha:
 print('Samples are uncorrelated (fail to reject H0) p=%.3f' % p)
else:
 print('Samples are correlated (reject H0) p=%.3f' % p)

 # For Firefox
df_e_cu = df_pixel5.loc[(df_pixel5["browser"] == 'firefox') & (df_pixel5['prefix'] == 0)]
coef, p = scipy.stats.spearmanr(df_e_cu['e'], df_e_cu['cu'])
print('Firefox Spearmans correlation coefficient: %.3f' % coef)
print('Firefox Spearmans correlation p-value: %.3f' % p)
alpha = 0.05
if p > alpha:
 print('Samples are uncorrelated (fail to reject H0) p=%.3f' % p)
else:
 print('Samples are correlated (reject H0) p=%.3f' % p)

# For Opera
df_e_cu = df_pixel5.loc[(df_pixel5["browser"] == 'opera') & (df_pixel5['prefix'] == 0)]
coef, p = scipy.stats.spearmanr(df_e_cu['e'], df_e_cu['cu'])
print('Opera Spearmans correlation coefficient: %.3f' % coef)
print('Opera Spearmans correlation p-value: %.3f' % p)
alpha = 0.05
if p > alpha:
 print('Samples are uncorrelated (fail to reject H0) p=%.3f' % p)
else:
 print('Samples are correlated (reject H0) p=%.3f' % p)



####################### WITH CSS ########################
# For Chrome
df_e_cu = df_pixel5.loc[(df_pixel5["browser"] == 'chrome') & (df_pixel5['prefix'] == 1)]
coef, p = scipy.stats.spearmanr(df_e_cu['e'], df_e_cu['cu'])
print('Chrome Spearmans correlation coefficient: %.3f' % coef)
print('Chrome Spearmans correlation p-value: %.3f' % p)
alpha = 0.05
if p > alpha:
 print('Samples are uncorrelated (fail to reject H0) p=%.3f' % p)
else:
 print('Samples are correlated (reject H0) p=%.3f' % p)



 # For Firefox
df_e_cu = df_pixel5.loc[(df_pixel5["browser"] == 'firefox') & (df_pixel5['prefix'] == 1)]
coef, p = scipy.stats.spearmanr(df_e_cu['e'], df_e_cu['cu'])
print('Firefox Spearmans correlation coefficient: %.3f' % coef)
print('Firefox Spearmans correlation p-value: %.3f' % p)
alpha = 0.05
if p > alpha:
 print('Samples are uncorrelated (fail to reject H0) p=%.3f' % p)
else:
 print('Samples are correlated (reject H0) p=%.3f' % p)

# For Opera
df_e_cu = df_pixel5.loc[(df_pixel5["browser"] == 'opera') & (df_pixel5['prefix'] == 1)]
coef, p = scipy.stats.spearmanr(df_e_cu['e'], df_e_cu['cu'])
print('Opera Spearmans correlation coefficient: %.3f' % coef)
print('Opera Spearmans correlation p-value: %.3f' % p)
alpha = 0.05
if p > alpha:
 print('Samples are uncorrelated (fail to reject H0) p=%.3f' % p)
else:
 print('Samples are correlated (reject H0) p=%.3f' % p)


################# Shapiro-Wilk test #######################

####################### WITHOUT CSS ########################
df_prefix = df_pixel5.loc[(df_pixel5["browser"] == 'chrome') & (df_pixel5['prefix'] == 0)]
df_with_prefix = df_pixel5.loc[(df_pixel5["browser"] == 'chrome') & (df_pixel5['prefix'] == 1)]

# CHROME - Energy Usage
print('\nShapiro-Wilk test for energy consumption for Chrome without prefixes')
stat, p = scipy.stats.shapiro(df_prefix['e'])
print(p)
alpha = 0.05
if p > alpha:
    print('Sample follow a normal distribution (fail to reject H0)')
else:
    print('Sample does not follow a normal distribution (reject H0)')

print('\nShapiro-Wilk test for energy consumption for Chrome with prefixes')
stat, p = scipy.stats.shapiro(df_with_prefix['e'])
print(p)
alpha = 0.05
if p > alpha:
    print('Sample follow a normal distribution (fail to reject H0)')
else:
    print('Sample does not follow a normal distribution (reject H0)\n')


# CHROME - Loading time
print('\nShapiro-Wilk test for loading time for Chrome without prefixes')
stat, p = scipy.stats.shapiro(df_prefix['lt'])
print(p)
alpha = 0.05
if p > alpha:
    print('Sample follow a normal distribution (fail to reject H0)')
else:
    print('Sample does not follow a normal distribution (reject H0)')

print('\nShapiro-Wilk test for loading time for Chrome with prefixes')
stat, p = scipy.stats.shapiro(df_with_prefix['lt'])
print(p)
alpha = 0.05
if p > alpha:
    print('Sample follow a normal distribution (fail to reject H0)')
else:
    print('Sample does not follow a normal distribution (reject H0)')


# CHROME - CPU usage
print('\nShapiro-Wilk test for CPU usage for Chrome without prefixes')
stat, p = scipy.stats.shapiro(df_prefix['cu'])
print(p)
alpha = 0.05
if p > alpha:
    print('Sample follow a normal distribution (fail to reject H0)')
else:
    print('Sample does not follow a normal distribution (reject H0)')

print('\nShapiro-Wilk test for CPU usage for Chrome with prefixes')
stat, p = scipy.stats.shapiro(df_with_prefix['cu'])
print(p)
alpha = 0.05
if p > alpha:
    print('Sample follow a normal distribution (fail to reject H0)')
else:
    print('Sample does not follow a normal distribution (reject H0)')
    
###############################################################################################################

df_prefix = df_pixel5.loc[(df_pixel5["browser"] == 'firefox') & (df_pixel5['prefix'] == 0)]
df_with_prefix = df_pixel5.loc[(df_pixel5["browser"] == 'firefox') & (df_pixel5['prefix'] == 1)]

# FIREFOX - Energy Usage
print('\nShapiro-Wilk test for energy consumption for Firefox without prefixes')
stat, p = scipy.stats.shapiro(df_prefix['e'])
print(p)
alpha = 0.05
if p > alpha:
    print('Sample follow a normal distribution (fail to reject H0)')
else:
    print('Sample does not follow a normal distribution (reject H0)')

print('\nShapiro-Wilk test for energy consumption for Firefox with prefixes')
stat, p = scipy.stats.shapiro(df_with_prefix['e'])
print(p)
alpha = 0.05
if p > alpha:
    print('Sample follow a normal distribution (fail to reject H0)')
else:
    print('Sample does not follow a normal distribution (reject H0)\n')


# FIREFOX - Loading time
print('\nShapiro-Wilk test for loading time for Firefox without prefixes')
stat, p = scipy.stats.shapiro(df_prefix['lt'])
print(p)
alpha = 0.05
if p > alpha:
    print('Sample follow a normal distribution (fail to reject H0)')
else:
    print('Sample does not follow a normal distribution (reject H0)')

print('\nShapiro-Wilk test for loading time for Firefox with prefixes')
stat, p = scipy.stats.shapiro(df_with_prefix['lt'])
print(p)
alpha = 0.05
if p > alpha:
    print('Sample follow a normal distribution (fail to reject H0)')
else:
    print('Sample does not follow a normal distribution (reject H0)')


# FIREFOX - CPU usage
print('\nShapiro-Wilk test for CPU usage for Firefox without prefixes')
stat, p = scipy.stats.shapiro(df_prefix['cu'])
print(p)
alpha = 0.05
if p > alpha:
    print('Sample follow a normal distribution (fail to reject H0)')
else:
    print('Sample does not follow a normal distribution (reject H0)')

print('\nShapiro-Wilk test for CPU usage for Firefox with prefixes')
stat, p = scipy.stats.shapiro(df_with_prefix['cu'])
print(p)
alpha = 0.05
if p > alpha:
    print('Sample follow a normal distribution (fail to reject H0)')
else:
    print('Sample does not follow a normal distribution (reject H0)')
    
###############################################################################################################

df_prefix = df_pixel5.loc[(df_pixel5["browser"] == 'opera') & (df_pixel5['prefix'] == 0)]
df_with_prefix = df_pixel5.loc[(df_pixel5["browser"] == 'opera') & (df_pixel5['prefix'] == 1)]


# OPERA - Energy Usage
print('\nShapiro-Wilk test for energy consumption for Opera without prefixes')
stat, p = scipy.stats.shapiro(df_prefix['e'])
print(p)
alpha = 0.05
if p > alpha:
    print('Sample follow a normal distribution (fail to reject H0)')
else:
    print('Sample does not follow a normal distribution (reject H0)')

print('\nShapiro-Wilk test for energy consumption for Opera with prefixes')
stat, p = scipy.stats.shapiro(df_with_prefix['e'])
print(p)
alpha = 0.05
if p > alpha:
    print('Sample follow a normal distribution (fail to reject H0)')
else:
    print('Sample does not follow a normal distribution (reject H0)\n')


# OPERA - Loading time
print('\nShapiro-Wilk test for loading time for Opera without prefixes')
stat, p = scipy.stats.shapiro(df_prefix['lt'])
print(p)
alpha = 0.05
if p > alpha:
    print('Sample follow a normal distribution (fail to reject H0)')
else:
    print('Sample does not follow a normal distribution (reject H0)')

print('\nShapiro-Wilk test for loading time for Opera with prefixes')
stat, p = scipy.stats.shapiro(df_with_prefix['lt'])
print(p)
alpha = 0.05
if p > alpha:
    print('Sample follow a normal distribution (fail to reject H0)')
else:
    print('Sample does not follow a normal distribution (reject H0)')


# OPERA - CPU usage
print('\nShapiro-Wilk test for CPU usage for Opera without prefixes')
stat, p = scipy.stats.shapiro(df_prefix['cu'])
print(p)
alpha = 0.05
if p > alpha:
    print('Sample follow a normal distribution (fail to reject H0)')
else:
    print('Sample does not follow a normal distribution (reject H0)')

print('\nShapiro-Wilk test for CPU usage for Opera with prefixes')
stat, p = scipy.stats.shapiro(df_with_prefix['cu'])
print(p)
alpha = 0.05
if p > alpha:
    print('Sample follow a normal distribution (fail to reject H0)')
else:
    print('Sample does not follow a normal distribution (reject H0)')

####################################################################

################# Wilcoxon Signed-Rank Test  #######################

# CHROME
stat, p = scipy.stats.wilcoxon(df_pixel5_chrome_without_CSS['e'],df_pixel5_chrome_with_CSS['e'])
print("\nFor energy consumption of Chrome: " + str(p))
stat, p = scipy.stats.wilcoxon(df_pixel5_chrome_without_CSS['lt'],df_pixel5_chrome_with_CSS['lt'])
print("\nFor loading time of Chrome: "  + str(p))
stat, p = scipy.stats.wilcoxon(df_pixel5_chrome_without_CSS['cu'],df_pixel5_chrome_with_CSS['cu'])
print("\nFor CPU usage of Chrome: "  + str(p))

# FIREFOX
stat, p = scipy.stats.wilcoxon(df_pixel5_firefox_without_CSS['e'],df_pixel5_firefox_with_CSS['e'])
print("\nFor energy consumption of Firefox: "  + str(p))
stat, p = scipy.stats.wilcoxon(df_pixel5_firefox_without_CSS['lt'],df_pixel5_firefox_with_CSS['lt'])
print("\nFor loading time of Firefox: "  + str(p))
stat, p = scipy.stats.wilcoxon(df_pixel5_firefox_without_CSS['cu'],df_pixel5_firefox_with_CSS['cu'])
print("\nFor CPU usage of Firefox: "  + str(p))

# OPERA
stat, p = scipy.stats.wilcoxon(df_pixel5_opera_without_CSS['e'],df_pixel5_opera_with_CSS['e'])
print("\nFor energy consumption of Opera: "  + str(p))
stat, p = scipy.stats.wilcoxon(df_pixel5_opera_without_CSS['lt'],df_pixel5_opera_with_CSS['lt'])
print("\nFor loading time of Opera: "  + str(p))
stat, p = scipy.stats.wilcoxon(df_pixel5_opera_without_CSS['cu'],df_pixel5_opera_with_CSS['cu'])
print("\nFor CPU usage of Opera: "  + str(p))

#########################################
#########################################
#########################################
#########################################
#########################################
    
#########################################
#########################################
#########################################
#########################################
#########################################


