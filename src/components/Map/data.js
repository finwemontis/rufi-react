// 所有品种的经纬度 value的第一个元素是经度, 第二个是纬度 单位不是度分秒
// Niponbare == Nip_hifi
// {name: '', location: '', group: '', value: [, ]},






const data = [
  {name: '534M', location: 'China, Guangdong', group: 'Os.indica', value: [113.27, 23.13]},
  {name: 'Gla4', location: 'China, Anhui, Hubei', group: 'Os.indica', value: [115.93, 29.89]},
  {name: 'GP117', location: 'United States', group: 'Os.japonica', value: [-101, 40]},
  {name: 'GP505', location: 'Japan', group: 'Os.japonica', value: [138, 36]},  // 
  {name: 'GP523', location: 'Solomon Islands', group: 'Os.japonica', value: [159, -8]},  
  {name: 'GP524', location: 'Philippines', group: 'Os.indica', value: [122, 13]},
  {name: 'GP543', location: 'United States', group: 'Os.intermedia', value: [-101, 40]},
  {name: 'GP58', location: 'India', group: 'Os.indica', value: [72, 22]},
  {name: 'GP635', location: 'North Korea', group: 'Os.intermedia', value: [126, 39]},
  {name: 'GP680', location: 'Cuba', group: 'Os.japonica', value: [-79, 22]},
  {name: "HP436", location: "China, Hunan, Yiyangxian", group: "Os.japonica", value: [102.76, 27.07]}, 
  {name: "HP519", location: "China, Hunan, Yiyangxian", group: "Os.intermedia", value: [102.55, 26.74]}, 
  {name: 'Niponbare', location: 'Japan, aizhixian', group: 'Os.indica', value: [137, 35]},
  {name: "W0103", location: "India", group: "Or-I", value: [85.85, 20.48]}, 
  {name: "W0107", location: "India", group: "Or-I", value: [85.1, 20.95]}, 
  {name: 'W0108', location: 'India, Cuttack, Orissa, India ', group: 'Or-II', value: [77.13, 28.37]},
  {name: "W0136", location: "India", group: "Or-III", value: [81.82, 16.91]}, 
  {name: "W0137", location: "India", group: "Or-III", value: [81.82, 16.91]}, 
  {name: "W0145", location: "Thailand", group: "Or-II", value: [100.48, 13.72]}, 
  {name: "W0147", location: "India", group: "Or-I", value: [85.85, 20.48]}, 
  {name: "W0164", location: "Thailand", group: "Or-II", value: [98.66, 18.81]}, 
  {name: "W0169", location: "Thailand", group: "Or-II", value: [100.99, 15.87]}, 
  {name: "W0180", location: "Thailand", group: "Or-II", value: [99.97, 18.77]}, 
  {name: "W0234", location: "Thailand", group: "Or-II", value: [103.27, 18.08]}, 
  {name: "W0587", location: "Malaya", group: "Or-II", value: [102.53, 5.7]}, 
  {name: "W0590", location: "Malaya", group: "Or-I", value: [102.53, 5.7]}, 
  {name: "W0594", location: "Malaya", group: "Or-II", value: [101.69, 3.14]}, 
  {name: "W0627", location: "Burma", group: "Or-I", value: [96.11, 19.77]}, 
  {name: "W0630", location: "Burma", group: "Or-I", value: [94.56, 20.46]}, 
  {name: "W0632", location: "Burma", group: "Or-I", value: [95.22, 18.82]}, 
  {name: "W0639", location: "Burma", group: "Or-I", value: [96.11, 19.77]}, 
  {name: "W1080", location: "India", group: "Or-I", value: [88.4, 27.0]}, 
  {name: "W1084", location: "India", group: "Or-I", value: [88.4, 27.0]}, 
  {name: "W1111", location: "India", group: "Or-I", value: [94.17, 26.82]}, 
  {name: "W1117", location: "India", group: "Or-I", value: [94.17, 26.82]}, 
  {name: "W1214", location: "Philippines", group: "Or-III", value: [124.86, 7.86]}, 
  {name: "W1236", location: "Australian New Guinea", group: "Or-II", value: [141.61, -5.31]}, 
  {name: "W1292", location: "Indonesia", group: "Or-II", value: [117.0, 3.29]}, 
  {name: "W1536", location: "Sri Lanka", group: "Or-III", value: [79.84, 8.03]},
  {name: "W1547", location: "Thailand", group: "Or-I", value: [100.89, 14.5]}, 
  {name: "W1552", location: "Thailand", group: "Or-II", value: [100.52, 14.33]}, 
  {name: "W1553", location: "Thailand", group: "Or-II", value: [103.1, 14.6]}, 
  {name: "W1556", location: "Thailand", group: "Or-II", value: [99.99, 14.54]}, 
  {name: "W1557", location: "Thailand", group: "Or-II", value: [99.99, 14.54]}, 
  {name: "W1559", location: "Thailand", group: "Or-I", value: [100.0, 15.0]}, 
  {name: "W1619", location: "Thailand", group: "Or-I", value: [100.89, 14.5]}, 
  {name: "W1666", location: "India", group: "Or-I", value: [89.03, 26.34]}, 
  {name: "W1677", location: "India", group: "Or-I", value: [86.01, 20.29]}, 
  {name: "W1725", location: "Thailand", group: "Or-III", value: [100.0, 15.0]}, 
  {name: "W1732", location: "India", group: "Or-III", value: [84.81, 19.5]}, 
  {name: "W1736", location: "India", group: "Or-II", value: [75.82, 26.92]}, 
  {name: "W1742", location: "India", group: "Or-II", value: [75.82, 26.92]}, 
  {name: "W1748", location: "India", group: "Or-III", value: [75.82, 26.92]}, 
  {name: "W1777", location: "India", group: "Or-III", value: [79.3, 19.95]}, 
  {name: "W1783", location: "India", group: "Or-III", value: [76.63, 12.36]}, 
  {name: "W1787", location: "Thailand", group: "Or-I", value: [100.0, 15.0]}, 
  {name: "W1809", location: "Sri Lanka", group: "Or-III", value: [79.95, 6.93]}, 
  {name: "W1810", location: "Sri Lanka", group: "Or-II", value: [79.95, 6.93]}, 
  {name: "W1854", location: "Thailand", group: "Or-II", value: [99.52, 19.64]}, 
  {name: "W1859", location: "Thailand", group: "Or-II", value: [100.12, 17.52]}, 
  {name: "W1880", location: "Thailand", group: "Or-II", value: [102.91, 17.03]}, 
  {name: "W1890", location: "Thailand", group: "Or-II", value: [102.75, 17.85]}, 
  {name: "W1970", location: "Indonesia", group: "Or-I", value: [106.82, -6.4]}, 
  {name: "W1976", location: "Indonesia", group: "Or-II", value: [106.82, -6.4]}, 
  {name: "W2005", location: "India", group: "Or-III", value: [74.2, 15.35]}, 
  {name: "W2022", location: "Indonesia", group: "Or-II", value: [117.0, 3.29]}, 
  {name: "W2051", location: "Bangladesh", group: "Or-II", value: [90.41, 23.71]}, 
  {name: "W2053", location: "Bangladesh", group: "Or-I", value: [90.41, 23.71]}, 
  {name: "W2064", location: "Bangladesh", group: "Or-I", value: [89.55, 22.82]}, 
  {name: "W2066", location: "Nepal", group: "Or-III", value: [81.6, 28.6]}, 
  {name: "W2099", location: "Australia", group: "Or-III", value: [142.07, -13.07]}, 
  {name: "W2108", location: "Australia", group: "Or-III", value: [142.07, -13.07]}, 
  {name: "W2283", location: "Thailand", group: "Or-II", value: [99.47, 16.49]}, 
  {name: "W2305", location: "Laos", group: "Or-I", value: [105.5, 14.5]}, 
  {name: "W2310", location: "Laos", group: "Or-II", value: [102.36, 17.51]}, 
  {name: "W2318", location: "Vietnam", group: "Or-II", value: [106.06, 10.24]}, 
  {name: "W2319", location: "Vietnam", group: "Or-I", value: [106.25, 10.33]}, 
  {name: "W2320", location: "Vietnam", group: "Or-II", value: [105.36, 10.42]}, 
  {name: "W2321", location: "Vietnam", group: "Or-II", value: [105.37, 10.44]}, 
  {name: "W2332", location: "Vietnam", group: "Or-I", value: [105.85, 21.03]}, 
  {name: "W3007", location: "China", group: "Or-III", value: [112.69, 22.38]}, 
  {name: "W3009", location: "China", group: "Or-III", value: [112.85, 22.89]}, 
  {name: "W3012", location: "China", group: "Or-III", value: [113.26, 23.12]}, 
  {name: "W3029", location: "China", group: "Or-III", value: [109.19, 21.8]}, 
  {name: "W3031", location: "China", group: "Or-III", value: [108.36, 21.77]}, 
  {name: "W3033", location: "China", group: "Or-III", value: [109.97, 22.28]}, 
  {name: "W3038", location: "China", group: "Or-III", value: [109.36, 23.07]}, 
  {name: "W3040", location: "China", group: "Or-III", value: [110.07, 23.39]}, 
  {name: "W3047", location: "China", group: "Or-III", value: [106.91, 23.73]}, 
  {name: "W3051", location: "China", group: "Or-III", value: [106.61, 23.9]}, 
  {name: "W3055", location: "China", group: "Or-III", value: [110.35, 19.1]}, 
  {name: "W3066", location: "China", group: "Or-III", value: [109.17, 18.75]}, 
  {name: "W3073", location: "China", group: "Or-III", value: [110.7, 19.62]}, 
  {name: "W3086", location: "China", group: "Or-III", value: [102.01, 23.6]},


  // 来自3rd_pan_out样本经纬度信息.xlsx 后两个经纬度优先 要是没有就是前一对经纬度
  {name: 'W0135', location: 'India-Kesavaram, Samalkot, Andhra, India ', group: 'Or-III', value: [77.13, 28.37]},
  {name: 'W0166', location: 'Thailand-Chiengmai, Thailand ', group: 'Or-II', value: [100.35, 13.45]},
  {name: 'W0596', location: 'Malaysia-Malaya ', group: 'Or-II', value: [101.41, 3.09]},
  {name: 'W0600', location: 'Malaysia-Padang Kemunting, Malaya ', group: 'Or-II', value: [101.41, 3.09]},
  {name: 'W0634', location: 'Myanmar-Myitkyina, Burma ', group: 'Or-II', value: [96.2, 16.45]},
  {name: 'W1093', location: 'India-Gauhati, Assam, India ', group: 'Or-II', value: [77.13, 28.37]},
  {name: 'W1107', location: 'India-Kokilamukh, India ', group: 'Or-I', value: [77.13, 28.37]},
  {name: 'W1126', location: 'India-Karimganj, India ', group: 'Or-II', value: [77.13, 28.37]},
  {name: 'W1142', location: 'India-Cuttack, Orissa, India 3miles from CRRI ', group: 'Or-I', value: [77.13, 28.37]},
  {name: 'W1550', location: 'Thailand-CR-6 Phan, Chiangrai, Thailand ', group: 'Or-II', value: [100.35, 13.45]},
  {name: 'W1668', location: 'India-JP-4 18.52 N, 82.46 E, Orissa, India ca.1,000m alt. ', group: 'Or-III', value: [82.46, 18.52]},
  {name: 'W1679', location: 'India-CT-4 20.29 N, 86.01 E, Orissa, India ', group: 'Or-I', value: [86.01, 20.29]},
  {name: 'W1718', location: 'China-China ', group: 'Or-II', value: [116.2, 39.55]},
  {name: 'W1719', location: 'China-China ', group: 'Or-I', value: [116.2, 39.55]},
  {name: 'W1726', location: 'Thailand-B Thailand ', group: 'Or-I', value: [100.35, 13.45]},
  {name: 'W1731', location: 'India-WI-2 55km E of Cuttack for Konarak, India ', group: 'Or-I', value: [77.13, 28.37]},
  {name: 'W1735', location: 'India-WI-7 40km N of Jeypore, India ', group: 'Or-I', value: [77.13, 28.37]},
  {name: 'W1737', location: 'India-WI-9 28km S of Jeypore, India ', group: 'Or-I', value: [77.13, 28.37]},
  {name: 'W1750', location: 'India-WI-22 30km S of Pakhanjore, India ', group: 'Or-I', value: [77.13, 28.37]},
  {name: 'W1825', location: 'Bangladesh-Bangladesh ', group: 'Or-I', value: [90.26, 23.43]},
  {name: 'W1865', location: 'Thailand-NE3 14.56 N, 100.98 E, Thailand 20m alt. ', group: 'Or-I', value: [100.98, 14.56]},
  {name: 'W1895', location: 'Thailand-NE47 17.25 N, 104.18 E, Thailand 180m alt. ', group: 'Or-II', value: [104.18, 17.25]},
  {name: 'W1919', location: 'Thailand-NE85 14.73 N, 102.19 E, Thailand ca.150m alt. ', group: 'Or-II', value: [102.19, 14.73]},
  {name: 'W2036', location: 'Myanmar-Pegu, Burma ', group: 'Or-III', value: [96.2, 16.45]},
  {name: 'W2197', location: 'Indonesia-KL-13 Kalimantan, Indonesia ', group: 'Or-II', value: [106.49, -6.09]},
  {name: 'W2267', location: 'Laos- 18.14 N, 102.42 E, Laos ', group: 'Or-III', value: [102.42, 18.14]},
  {name: 'W2275', location: 'Thailand-CP41 16.09 N, 100.37 E, Thailand ', group: 'Or-I', value: [100.37, 16.09]},
  {name: 'W2308', location: 'Laos-LV1<br>17.57 N, 102.38 E, Vientian, Laos ', group: 'Or-II', value: [102.38, 17.57]},
  {name: 'W2311', location: 'Laos-LV9<br>17.52 N, 102.36 E, Vientian, Laos ', group: 'Or-II', value: [102.36, 17.52]},
  {name: 'W3000', location: 'China-广东-遂溪县', group: 'Or-III', value: [110.25089, 21.38298]},
  {name: 'W3035', location: 'China-广西-玉林', group: 'Or-III', value: [110.141471862793, 22.6318969726562]},
  {name: 'W3037', location: 'China-广西-贵县', group: 'Or-III', value: [109.60844, 23.099092]},
  {name: 'W3046', location: 'China-广西-横县', group: 'Or-III', value: [109.26704, 22.692957]},
  {name: 'W3052', location: 'China-广西-田阳县', group: 'Or-III', value: [106.90867, 23.73387]},
  {name: 'W3054', location: 'China-海南-万宁县', group: 'Or-III', value: [110.40747, 18.800625]},
  {name: 'W3063', location: 'China-海南-东方黎族自治县', group: 'Or-III', value: [108.63303, 19.097265]},
  {name: 'W3071', location: 'China-海南-文昌县', group: 'Or-III', value: [110.7559, 19.620953]},
  {name: 'W3074', location: 'China-海南-文昌县', group: 'Or-III', value: [110.7559, 19.620953]},
  {name: 'W3082', location: 'China-江西-东乡县', group: 'Or-III', value: [116.6061, 28.232292]},
  {name: 'W3088', location: 'China-云南-元江哈尼族彝族傣族自治县', group: 'Or-III', value: [102.00642, 23.604008]},
  {name: 'W3090', location: 'China-云南-景洪县', group: 'Or-II', value: [100.79406, 22.012938]},
  {name: 'W3092', location: 'China-湖南-茶陵县', group: 'Or-III', value: [113.55217, 26.801975]},
  {name: 'W3096', location: 'China-湖南-江永县', group: 'Or-III', value: [111.33645, 25.276974]},


]
export default data
