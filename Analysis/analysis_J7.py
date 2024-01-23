# library & dataset
import seaborn as sns
import pandas as pd 
import matplotlib.pyplot as plt
import scipy
import matplotlib.ticker as mtick
import statsmodels.api as sm


# dataframe for Galaxy J7 Duos data
df_galaxyJ7 = pd.read_csv('data_final_GalaxyJ7.csv')


df_galaxyJ7_chrome = df_galaxyJ7.loc[df_galaxyJ7["browser"] == 'chrome']
df_galaxyJ7_firefox = df_galaxyJ7.loc[df_galaxyJ7["browser"] == 'firefox']
df_galaxyJ7_opera = df_galaxyJ7.loc[df_galaxyJ7["browser"] == 'opera']



df_galaxyJ7_chrome_without_CSS = df_galaxyJ7_chrome.loc[df_galaxyJ7["prefix"] == 0]
df_galaxyJ7_firefox_without_CSS = df_galaxyJ7_firefox.loc[df_galaxyJ7["prefix"] == 0]
df_galaxyJ7_opera_without_CSS = df_galaxyJ7_opera.loc[df_galaxyJ7["prefix"] == 0]

df_galaxyJ7_chrome_with_CSS = df_galaxyJ7_chrome.loc[df_galaxyJ7["prefix"] == 1]
df_galaxyJ7_firefox_with_CSS = df_galaxyJ7_firefox.loc[df_galaxyJ7["prefix"] == 1]
df_galaxyJ7_opera_with_CSS = df_galaxyJ7_opera.loc[df_galaxyJ7["prefix"] == 1]

#########################################
########## ENERGY CONSUMPTION ###########
#########################################

############## HISTOGRAMS ###############
e_fig, ax_e = plt.subplots(nrows=2,ncols=3,figsize=(10,6))

chrome = sns.distplot(df_galaxyJ7_chrome_without_CSS["e"], color='blue', kde=True,  ax=ax_e[0][0])
firefox = sns.distplot(df_galaxyJ7_opera_without_CSS["e"],  color='blue', kde=True,  ax=ax_e[0][1])
opera = sns.distplot(df_galaxyJ7_opera_without_CSS["e"], color='blue', kde=True, ax=ax_e[0][2])

chrome2 = sns.distplot(df_galaxyJ7_chrome_with_CSS["e"], color='orange', kde=True,  ax=ax_e[1][0])
firefox2 = sns.distplot(df_galaxyJ7_firefox_with_CSS["e"], color='orange', kde=True,  ax=ax_e[1][1])
opera2 = sns.distplot(df_galaxyJ7_opera_with_CSS["e"], color='orange', kde=True, ax=ax_e[1][2])

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
plt.setp(ax_e[0][0], xlim=ax_e[1,2].get_xlim(), ylim=ax_e[1,0].get_ylim())
plt.setp(ax_e[0][1], xlim=ax_e[1,2].get_xlim(), ylim=ax_e[1,0].get_ylim())
plt.setp(ax_e[0][2], xlim=ax_e[1,2].get_xlim(), ylim=ax_e[1,0].get_ylim())
plt.setp(ax_e[1][0], xlim=ax_e[1,2].get_xlim(), ylim=ax_e[1,0].get_ylim())
plt.setp(ax_e[1][1], xlim=ax_e[1,2].get_xlim(), ylim=ax_e[1,0].get_ylim())
plt.setp(ax_e[1][2], xlim=ax_e[1,2].get_xlim(), ylim=ax_e[1,0].get_ylim())
plt.savefig("J7_Energy_Consumption_histogram.png")
plt.clf()


############## VIOLIN PLOTS ###############
e_fig, ax_e = plt.subplots(ncols=3,figsize=(8,4),sharey = True)
chrome = sns.violinplot(data=df_galaxyJ7_chrome, x=df_galaxyJ7_chrome["prefix"], y=df_galaxyJ7_chrome["e"], palette='pastel', ax=ax_e[0])
sns.boxplot(x=df_galaxyJ7_chrome["prefix"], y=df_galaxyJ7_chrome["e"], data=df_galaxyJ7_chrome, palette='deep', width=0.3,boxprops={'zorder': 2}, ax=chrome)
firefox = sns.violinplot(data=df_galaxyJ7_firefox, x=df_galaxyJ7_firefox["prefix"], y=df_galaxyJ7_firefox["e"], palette='pastel', ax=ax_e[1])
sns.boxplot(x=df_galaxyJ7_firefox["prefix"], y=df_galaxyJ7_firefox["e"], data=df_galaxyJ7_firefox, palette='deep', width=0.3,boxprops={'zorder': 2}, ax=firefox)
opera = sns.violinplot(data=df_galaxyJ7_opera, x=df_galaxyJ7_opera["prefix"], y=df_galaxyJ7_opera["e"], palette='pastel', ax=ax_e[2])
sns.boxplot(x=df_galaxyJ7_opera["prefix"], y=df_galaxyJ7_opera["e"], data=df_galaxyJ7_opera, palette='deep', width=0.3,boxprops={'zorder': 2}, ax=opera)

chrome.set(ylim = (0,0.03))
chrome.set(title='Chrome')
chrome.set_xticklabels(['Without CSS \n prefixes','With CSS \n prefixes'])
chrome.set(xlabel='CSS Prefixes', ylabel='Energy Consumption (Joules)')

firefox.set(ylim = (0,0.03))
firefox.set(title='Firefox')
firefox.set_xticklabels(['Without CSS \n prefixes','With CSS \n prefixes'])
firefox.set(xlabel='CSS Prefixes', ylabel='Energy Consumption (Joules)')

opera.set(ylim = (0,0.03))
opera.set(title='Opera')
opera.set_xticklabels(['Without CSS \n prefixes','With CSS \n prefixes'])
opera.set(xlabel='CSS Prefixes', ylabel='Energy Consumption (Joules)')

ax_e[0].yaxis.set_tick_params(labelbottom=True)
ax_e[1].yaxis.set_tick_params(labelbottom=True)
ax_e[2].yaxis.set_tick_params(labelbottom=True)

ax_e[0].set_yticklabels(['{:,.2f}'.format(x) for x in ax_e[0].get_yticks()* 1000])
ax_e[1].set_yticklabels(['{:,.2f}'.format(x) for x in ax_e[1].get_yticks()* 1000])
ax_e[2].set_yticklabels(['{:,.2f}'.format(x) for x in ax_e[2].get_yticks()* 1000])


plt.setp(ax_e[0].get_yticklabels(),visible=True)
plt.tight_layout()
plt.savefig("J7_Energy_Consumption.png")
plt.clf()


#########################################
############# LOADING TIME ##############
#########################################

############## HISTOGRAMS ###############
e_fig, ax_e = plt.subplots(nrows=2,ncols=3,figsize=(10,6))

chrome = sns.distplot(df_galaxyJ7_chrome_without_CSS["lt"], color='blue', kde=True,  ax=ax_e[0][0])
firefox = sns.distplot(df_galaxyJ7_opera_without_CSS["lt"],  color='blue', kde=True,  ax=ax_e[0][1])
opera = sns.distplot(df_galaxyJ7_opera_without_CSS["lt"], color='blue', kde=True, ax=ax_e[0][2])

chrome2 = sns.distplot(df_galaxyJ7_chrome_with_CSS["lt"], color='orange', kde=True,  ax=ax_e[1][0])
firefox2 = sns.distplot(df_galaxyJ7_firefox_with_CSS["lt"], color='orange', kde=True,  ax=ax_e[1][1])
opera2 = sns.distplot(df_galaxyJ7_opera_with_CSS["lt"], color='orange', kde=True, ax=ax_e[1][2])

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

plt.tight_layout(pad=1.1)
plt.setp(ax_e[0][0], xlim=ax_e[1,2].get_xlim(), ylim=ax_e[0,0].get_ylim())
plt.setp(ax_e[0][1], xlim=ax_e[1,2].get_xlim(), ylim=ax_e[0,0].get_ylim())
plt.setp(ax_e[0][2], xlim=ax_e[1,2].get_xlim(), ylim=ax_e[0,0].get_ylim())
plt.setp(ax_e[1][0], xlim=ax_e[1,2].get_xlim(), ylim=ax_e[0,0].get_ylim())
plt.setp(ax_e[1][1], xlim=ax_e[1,2].get_xlim(), ylim=ax_e[0,0].get_ylim())
plt.setp(ax_e[1][2], xlim=ax_e[1,2].get_xlim(), ylim=ax_e[0,0].get_ylim())

plt.savefig("J7_Loading_Time_histogram.png")
plt.clf()


############## VIOLIN PLOTS ###############
lt_fig, ax_lt = plt.subplots(ncols=3,figsize=(8,4),sharey = True)
chrome_lt = sns.violinplot(data=df_galaxyJ7_chrome, x=df_galaxyJ7_chrome["prefix"], y=df_galaxyJ7_chrome["lt"], palette='pastel', ax=ax_lt[0])
sns.boxplot(x=df_galaxyJ7_chrome["prefix"], y=df_galaxyJ7_chrome["lt"], data=df_galaxyJ7_chrome, palette='deep', width=0.3,boxprops={'zorder': 2}, ax=chrome_lt)
firefox_lt = sns.violinplot(data=df_galaxyJ7_firefox, x=df_galaxyJ7_firefox["prefix"], y=df_galaxyJ7_firefox["lt"], palette='pastel', ax=ax_lt[1])
sns.boxplot(x=df_galaxyJ7_firefox["prefix"], y=df_galaxyJ7_firefox["lt"], data=df_galaxyJ7_firefox, palette='deep', width=0.3,boxprops={'zorder': 2}, ax=firefox_lt)
opera_lt = sns.violinplot(data=df_galaxyJ7_opera, x=df_galaxyJ7_opera["prefix"], y=df_galaxyJ7_opera["lt"], palette='pastel', ax=ax_lt[2])
sns.boxplot(x=df_galaxyJ7_opera["prefix"], y=df_galaxyJ7_opera["lt"], data=df_galaxyJ7_opera, palette='deep', width=0.3,boxprops={'zorder': 2}, ax=opera_lt)

chrome_lt.set(ylim = (0,6000))
chrome_lt.set(title='Chrome')
chrome_lt.set_xticklabels(['Without CSS \n prefixes','With CSS \n prefixes'])
chrome_lt.set(xlabel='CSS Prefixes', ylabel='Loading Time (milliseconds)')

firefox_lt.set(ylim = (0,6000))
firefox_lt.set(title='Firefox')
firefox_lt.set_xticklabels(['Without CSS \n prefixes','With CSS \n prefixes'])
firefox_lt.set(xlabel='CSS Prefixes', ylabel='Loading Time (milliseconds)')

opera_lt.set(ylim = (0,6000))
opera_lt.set(title='Opera')
opera_lt.set_xticklabels(['Without CSS \n prefixes','With CSS \n prefixes'])
opera_lt.set(xlabel='CSS Prefixes', ylabel='Loading Time (milliseconds)')

ax_lt[0].yaxis.set_tick_params(labelbottom=True)
ax_lt[1].yaxis.set_tick_params(labelbottom=True)
ax_lt[2].yaxis.set_tick_params(labelbottom=True)

plt.setp(ax_lt[0].get_yticklabels(),visible=True)
plt.tight_layout()
plt.savefig("J7_Loading_Time.png")
plt.clf()

#########################################
############## CPU MEMORY ###############
#########################################

############## HISTOGRAMS ###############
e_fig, ax_e = plt.subplots(nrows=2,ncols=3,figsize=(10,6))

chrome = sns.distplot(df_galaxyJ7_chrome_without_CSS["cu"], color='blue', kde=True,  ax=ax_e[0][0])
firefox = sns.distplot(df_galaxyJ7_opera_without_CSS["cu"],  color='blue', kde=True,  ax=ax_e[0][1])
opera = sns.distplot(df_galaxyJ7_opera_without_CSS["cu"], color='blue', kde=True, ax=ax_e[0][2])

chrome2 = sns.distplot(df_galaxyJ7_chrome_with_CSS["cu"], color='orange', kde=True,  ax=ax_e[1][0])
firefox2 = sns.distplot(df_galaxyJ7_firefox_with_CSS["cu"], color='orange', kde=True,  ax=ax_e[1][1])
opera2 = sns.distplot(df_galaxyJ7_opera_with_CSS["cu"], color='orange', kde=True, ax=ax_e[1][2])

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
plt.setp(ax_e[0][0], xlim=ax_e[0,0].get_xlim(), ylim=ax_e[1,1].get_ylim())
plt.setp(ax_e[0][1], xlim=ax_e[0,0].get_xlim(), ylim=ax_e[1,1].get_ylim())
plt.setp(ax_e[0][2], xlim=ax_e[0,0].get_xlim(), ylim=ax_e[1,1].get_ylim())
plt.setp(ax_e[1][0], xlim=ax_e[0,0].get_xlim(), ylim=ax_e[1,1].get_ylim())
plt.setp(ax_e[1][1], xlim=ax_e[0,0].get_xlim(), ylim=ax_e[1,1].get_ylim())
plt.setp(ax_e[1][2], xlim=ax_e[0,0].get_xlim(), ylim=ax_e[1,1].get_ylim())
plt.savefig("J7_CPU_Usage_histogram.png")
plt.clf()


############## VIOLIN PLOTS ###############
cpu_fig, ax_cpu = plt.subplots(ncols=3,figsize=(8,4),sharey = True)
chrome_cpu = sns.violinplot(data=df_galaxyJ7_chrome, x=df_galaxyJ7_chrome["prefix"], y=df_galaxyJ7_chrome["cu"], palette='pastel', ax=ax_cpu[0])
sns.boxplot(x=df_galaxyJ7_chrome["prefix"], y=df_galaxyJ7_chrome["cu"], data=df_galaxyJ7_chrome, palette='deep', width=0.3,boxprops={'zorder': 2}, ax=chrome_cpu)
firefox_cpu = sns.violinplot(data=df_galaxyJ7_firefox, x=df_galaxyJ7_firefox["prefix"], y=df_galaxyJ7_firefox["cu"], palette='pastel', ax=ax_cpu[1])
sns.boxplot(x=df_galaxyJ7_firefox["prefix"], y=df_galaxyJ7_firefox["cu"], data=df_galaxyJ7_firefox, palette='deep', width=0.3,boxprops={'zorder': 2}, ax=firefox_cpu)
opera_cpu = sns.violinplot(data=df_galaxyJ7_opera, x=df_galaxyJ7_opera["prefix"], y=df_galaxyJ7_opera["cu"], palette='pastel', ax=ax_cpu[2])
sns.boxplot(x=df_galaxyJ7_opera["prefix"], y=df_galaxyJ7_opera["cu"], data=df_galaxyJ7_opera, palette='deep', width=0.3,boxprops={'zorder': 2}, ax=opera_cpu)

chrome_cpu.set(title='Chrome')
chrome_cpu.set_xticklabels(['Without CSS \n prefixes','With CSS \n prefixes'])
chrome_cpu.set(xlabel='CSS Prefixes', ylabel='CPU Usage (percentages)')

firefox_cpu.set(title='Firefox')
firefox_cpu.set_xticklabels(['Without CSS \n prefixes','With CSS \n prefixes'])
firefox_cpu.set(xlabel='CSS Prefixes', ylabel='CPU Usage (percentages)')

opera_cpu.set(title='Opera')
opera_cpu.set_xticklabels(['Without CSS \n prefixes','With CSS \n prefixes'])
opera_cpu.set(xlabel='CSS Prefixes', ylabel='CPU Usage (percentages)')

ax_cpu[0].yaxis.set_tick_params(labelbottom=True)
ax_cpu[1].yaxis.set_tick_params(labelbottom=True)
ax_cpu[2].yaxis.set_tick_params(labelbottom=True)
ax_cpu[0].yaxis.set_major_formatter(mtick.PercentFormatter())
ax_cpu[1].yaxis.set_major_formatter(mtick.PercentFormatter())
ax_cpu[2].yaxis.set_major_formatter(mtick.PercentFormatter())

plt.setp(ax_cpu[0].get_yticklabels(),visible=True)
plt.tight_layout()
plt.savefig("J7_CPU_Usage.png")
plt.clf()


#########################################
#########################################
#########################################
#########################################
#########################################

################# QQ-Plots #######################

# CHROME 
e_fig, ax_e = plt.subplots(nrows=2,ncols=3,figsize=(10,6))
chrome = sm.qqplot(df_galaxyJ7_chrome_without_CSS["e"], line='q', ax=ax_e[0][0])
chrome2 = sm.qqplot(df_galaxyJ7_chrome_with_CSS["e"], line='q', ax=ax_e[0][1])
chrome3 = sm.qqplot(df_galaxyJ7_chrome_without_CSS["lt"], line='q', ax=ax_e[0][2])
chrome4 = sm.qqplot(df_galaxyJ7_chrome_with_CSS["lt"], line='q', ax=ax_e[1][0])
chrome5 = sm.qqplot(df_galaxyJ7_chrome_without_CSS["cu"], line='q', ax=ax_e[1][1])
chrome6 = sm.qqplot(df_galaxyJ7_chrome_with_CSS["cu"], line='q', ax=ax_e[1][2])


ax_e[0][0].set(title='Without CSS Prefixes\nEnergy consumption')
ax_e[0][1].set(title='With CSS Prefixes\nEnergy consumption')
ax_e[0][2].set(title='Without CSS Prefixes\nLoading Time')
ax_e[1][0].set(title='With CSS Prefixes\nLoading Time')
ax_e[1][1].set(title='Without CSS Prefixes\nCPU Usage')
ax_e[1][2].set(title='With CSS Prefixes\nCPU Usage')


plt.tight_layout(pad=1.0)
plt.savefig("J7_QQ_Plot_Chrome.png")
plt.clf()

# FIREFOX 
e_fig, ax_e = plt.subplots(nrows=2,ncols=3,figsize=(10,6))
firefox = sm.qqplot(df_galaxyJ7_firefox_without_CSS["e"], line='q', ax=ax_e[0][0])
firefox2 = sm.qqplot(df_galaxyJ7_firefox_with_CSS["e"], line='q', ax=ax_e[0][1])
firefox3 = sm.qqplot(df_galaxyJ7_firefox_without_CSS["lt"], line='q', ax=ax_e[0][2])
firefox4 = sm.qqplot(df_galaxyJ7_firefox_with_CSS["lt"], line='q', ax=ax_e[1][0])
firefox5 = sm.qqplot(df_galaxyJ7_firefox_without_CSS["cu"], line='q', ax=ax_e[1][1])
firefox6 = sm.qqplot(df_galaxyJ7_firefox_with_CSS["cu"], line='q', ax=ax_e[1][2])


ax_e[0][0].set(title='Without CSS Prefixes\nEnergy consumption')
ax_e[0][1].set(title='With CSS Prefixes\nEnergy consumption')
ax_e[0][2].set(title='Without CSS Prefixes\nLoading Time')
ax_e[1][0].set(title='With CSS Prefixes\nLoading Time')
ax_e[1][1].set(title='Without CSS Prefixes\nCPU Usage')
ax_e[1][2].set(title='With CSS Prefixes\nCPU Usage')


plt.tight_layout(pad=1.0)
plt.savefig("J7_QQ_Plot_Firefox.png")
plt.clf()

# OPERA 
e_fig, ax_e = plt.subplots(nrows=2,ncols=3,figsize=(10,6))
opera = sm.qqplot(df_galaxyJ7_opera_without_CSS["e"], line='q', ax=ax_e[0][0])
opera2 = sm.qqplot(df_galaxyJ7_opera_with_CSS["e"], line='q', ax=ax_e[0][1])
opera3 = sm.qqplot(df_galaxyJ7_opera_without_CSS["lt"], line='q', ax=ax_e[0][2])
opera4 = sm.qqplot(df_galaxyJ7_opera_with_CSS["lt"], line='q', ax=ax_e[1][0])
opera5 = sm.qqplot(df_galaxyJ7_opera_without_CSS["cu"], line='q', ax=ax_e[1][1])
opera6 = sm.qqplot(df_galaxyJ7_opera_with_CSS["cu"], line='q', ax=ax_e[1][2])


ax_e[0][0].set(title='Without CSS Prefixes\nEnergy consumption')
ax_e[0][1].set(title='With CSS Prefixes\nEnergy consumption')
ax_e[0][2].set(title='Without CSS Prefixes\nLoading Time')
ax_e[1][0].set(title='With CSS Prefixes\nLoading Time')
ax_e[1][1].set(title='Without CSS Prefixes\nCPU Usage')
ax_e[1][2].set(title='With CSS Prefixes\nCPU Usage')


plt.tight_layout(pad=1.0)
plt.savefig("J7_QQ_Plot_Opera.png")
plt.clf()



#########################################
#########################################
#########################################
#########################################
#########################################

################# Spearman's Correlation #######################

####################### WITHOUT CSS ########################
# For Chrome
df_e_cu = df_galaxyJ7.loc[(df_galaxyJ7["browser"] == 'chrome') & (df_galaxyJ7['prefix'] == 0)]
coef, p = scipy.stats.spearmanr(df_e_cu['e'], df_e_cu['cu'])
print('Chrome Spearmans correlation coefficient: %.3f' % coef)
print('Chrome Spearmans correlation p-value: %.3f' % p)
alpha = 0.05
if p > alpha:
 print('Samples are uncorrelated (fail to reject H0) p=%.3f' % p)
else:
 print('Samples are correlated (reject H0) p=%.3f' % p)

 # For Firefox
df_e_cu = df_galaxyJ7.loc[(df_galaxyJ7["browser"] == 'firefox') & (df_galaxyJ7['prefix'] == 0)]
coef, p = scipy.stats.spearmanr(df_e_cu['e'], df_e_cu['cu'])
print('Firefox Spearmans correlation coefficient: %.3f' % coef)
print('Firefox Spearmans correlation p-value: %.3f' % p)
alpha = 0.05
if p > alpha:
 print('Samples are uncorrelated (fail to reject H0) p=%.3f' % p)
else:
 print('Samples are correlated (reject H0) p=%.3f' % p)

# For Opera
df_e_cu = df_galaxyJ7.loc[(df_galaxyJ7["browser"] == 'opera') & (df_galaxyJ7['prefix'] == 0)]
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
df_e_cu = df_galaxyJ7.loc[(df_galaxyJ7["browser"] == 'chrome') & (df_galaxyJ7['prefix'] == 1)]
coef, p = scipy.stats.spearmanr(df_e_cu['e'], df_e_cu['cu'])
print('Chrome Spearmans correlation coefficient: %.3f' % coef)
print('Chrome Spearmans correlation p-value: %.3f' % p)
alpha = 0.05
if p > alpha:
 print('Samples are uncorrelated (fail to reject H0) p=%.3f' % p)
else:
 print('Samples are correlated (reject H0) p=%.3f' % p)

 # For Firefox
df_e_cu = df_galaxyJ7.loc[(df_galaxyJ7["browser"] == 'firefox') & (df_galaxyJ7['prefix'] == 1)]
coef, p = scipy.stats.spearmanr(df_e_cu['e'], df_e_cu['cu'])
print('Firefox Spearmans correlation coefficient: %.3f' % coef)
print('Firefox Spearmans correlation p-value: %.3f' % p)
alpha = 0.05
if p > alpha:
 print('Samples are uncorrelated (fail to reject H0) p=%.3f' % p)
else:
 print('Samples are correlated (reject H0) p=%.3f' % p)

# For Opera
df_e_cu = df_galaxyJ7.loc[(df_galaxyJ7["browser"] == 'opera') & (df_galaxyJ7['prefix'] == 1)]
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
df_prefix = df_galaxyJ7.loc[(df_galaxyJ7["browser"] == 'chrome') & (df_galaxyJ7['prefix'] == 0)]
df_with_prefix = df_galaxyJ7.loc[(df_galaxyJ7["browser"] == 'chrome') & (df_galaxyJ7['prefix'] == 1)]

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

df_prefix = df_galaxyJ7.loc[(df_galaxyJ7["browser"] == 'firefox') & (df_galaxyJ7['prefix'] == 0)]
df_with_prefix = df_galaxyJ7.loc[(df_galaxyJ7["browser"] == 'firefox') & (df_galaxyJ7['prefix'] == 1)]

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

df_prefix = df_galaxyJ7.loc[(df_galaxyJ7["browser"] == 'opera') & (df_galaxyJ7['prefix'] == 0)]
df_with_prefix = df_galaxyJ7.loc[(df_galaxyJ7["browser"] == 'opera') & (df_galaxyJ7['prefix'] == 1)]


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
stat, p = scipy.stats.wilcoxon(df_galaxyJ7_chrome_without_CSS['e'],df_galaxyJ7_chrome_with_CSS['e'])
print("\nFor energy consumption of Chrome: " + str(p))
stat, p = scipy.stats.wilcoxon(df_galaxyJ7_chrome_without_CSS['lt'],df_galaxyJ7_chrome_with_CSS['lt'])
print("\nFor loading time of Chrome: "  + str(p))
stat, p = scipy.stats.wilcoxon(df_galaxyJ7_chrome_without_CSS['cu'],df_galaxyJ7_chrome_with_CSS['cu'])
print("\nFor CPU usage of Chrome: "  + str(p))

# FIREFOX
stat, p = scipy.stats.wilcoxon(df_galaxyJ7_firefox_without_CSS['e'],df_galaxyJ7_firefox_with_CSS['e'])
print("\nFor energy consumption of Firefox: "  + str(p))
stat, p = scipy.stats.wilcoxon(df_galaxyJ7_firefox_without_CSS['lt'],df_galaxyJ7_firefox_with_CSS['lt'])
print("\nFor loading time of Firefox: "  + str(p))
stat, p = scipy.stats.wilcoxon(df_galaxyJ7_firefox_without_CSS['cu'],df_galaxyJ7_firefox_with_CSS['cu'])
print("\nFor CPU usage of Firefox: "  + str(p))

# OPERA
stat, p = scipy.stats.wilcoxon(df_galaxyJ7_opera_without_CSS['e'],df_galaxyJ7_opera_with_CSS['e'])
print("\nFor energy consumption of Opera: "  + str(p))
stat, p = scipy.stats.wilcoxon(df_galaxyJ7_opera_without_CSS['lt'],df_galaxyJ7_opera_with_CSS['lt'])
print("\nFor loading time of Opera: "  + str(p))
stat, p = scipy.stats.wilcoxon(df_galaxyJ7_opera_without_CSS['cu'],df_galaxyJ7_opera_with_CSS['cu'])
print("\nFor CPU usage of Opera: "  + str(p))

#########################################
#########################################
#########################################
#########################################
#########################################


