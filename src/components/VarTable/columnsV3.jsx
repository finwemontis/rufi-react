

// const columns = [
// // 信息的列
//   {
//     title: '#',
//     width: 50,
//     fixed: 'left',
//     key: 'default',
//     render: (text, record, index)=>{
//       return <div>{index+1}</div>
//     }
//   },
//   {
//     title: 'reference',
//     width: 150,
//     dataIndex: '',
//     key: 'default',
//     fixed: 'left',
//   },
//   {
//     title: 'chr',
//     width: 50,
//     dataIndex: 'chr',
//     key: 'default',
//     fixed: 'left',
//   },
//   {
//     title: 'pos1',
//     dataIndex: 'pos',
//     key: 'default',
//     width: 120,
//     fixed: 'left',
//   },
//   {
//     title: 'pos2',
//     dataIndex: 'alt_end',
//     key: 'default',
//     width: 120,
//     fixed: 'left',
//   },
//   {
//     title: 'length',
//     dataIndex: 'alt_len',
//     key: 'default',
//     width: 120,
//     fixed: 'left',
//   },
//   {
//     title: 'ref base',
//     dataIndex: 'ref',
//     key: 'default',
//     width: 85,
//     fixed: 'left',
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'variant base',
//     dataIndex: 'alt',
//     key: 'default',
//     width: 85,
//     fixed: 'left',
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'gene coding',
//     dataIndex: 'Ref_gene_coding',
//     key: 'default',
//     width: 90,
//     fixed: 'left',
//   },
//   {
//     title: 'var type',
//     dataIndex: 'varType',
//     key: 'default',
//     width: 80,
//     fixed: 'left',
//   },
  
  
  
// // 各品种 万一需要重写呢
// // with open('columns.jsx', 'w') as f:
// // f.write('const columns = [\n')
// // for i in all:
// //     i = i.strip()
// //     i = i.split()
// //     f.write('  {\n')
// //     f.write('    title: \'{0}\',\n'.format(i[0]))
// //     f.write('    dataIndex: \'{0}\',\n'.format(i[0]))
// //     f.write('    key: \'{0}\',\n'.format(i[1][1:]))
// //     f.write('    width: 90,\n')
// //     f.write('    render: (text)=>{\n')
// //     f.write('      return colStyle(text)\n')
// //     f.write('    }\n')
// //     f.write('  },\n')
// // f.write(']\n')
// // f.write('export default columns')
//   {
//     title: 'W2296',
//     dataIndex: 'W2296',
//     key: 'O.longistaminata',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3101',
//     dataIndex: 'W3101',
//     key: 'O.longistaminata',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3102',
//     dataIndex: 'W3102',
//     key: 'O.longistaminata',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1952',
//     dataIndex: 'W1952',
//     key: 'O.meridionalis',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0103',
//     dataIndex: 'W0103',
//     key: 'Or-Ia',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0179',
//     dataIndex: 'W0179',
//     key: 'Or-Ia',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0632',
//     dataIndex: 'W0632',
//     key: 'Or-Ia',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1080',
//     dataIndex: 'W1080',
//     key: 'Or-Ia',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1107',
//     dataIndex: 'W1107',
//     key: 'Or-Ia',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1117',
//     dataIndex: 'W1117',
//     key: 'Or-Ia',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1719',
//     dataIndex: 'W1719',
//     key: 'Or-Ia',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1723',
//     dataIndex: 'W1723',
//     key: 'Or-Ia',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1735',
//     dataIndex: 'W1735',
//     key: 'Or-Ia',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1839',
//     dataIndex: 'W1839',
//     key: 'Or-Ia',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2066',
//     dataIndex: 'W2066',
//     key: 'Or-Ia',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2319',
//     dataIndex: 'W2319',
//     key: 'Or-Ia',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2332',
//     dataIndex: 'W2332',
//     key: 'Or-Ia',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0107',
//     dataIndex: 'W0107',
//     key: 'Or-Ib',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0147',
//     dataIndex: 'W0147',
//     key: 'Or-Ib',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0627',
//     dataIndex: 'W0627',
//     key: 'Or-Ib',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0630',
//     dataIndex: 'W0630',
//     key: 'Or-Ib',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1084',
//     dataIndex: 'W1084',
//     key: 'Or-Ib',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1142',
//     dataIndex: 'W1142',
//     key: 'Or-Ib',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1547',
//     dataIndex: 'W1547',
//     key: 'Or-Ib',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1619',
//     dataIndex: 'W1619',
//     key: 'Or-Ib',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1677',
//     dataIndex: 'W1677',
//     key: 'Or-Ib',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1679',
//     dataIndex: 'W1679',
//     key: 'Or-Ib',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1726',
//     dataIndex: 'W1726',
//     key: 'Or-Ib',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1731',
//     dataIndex: 'W1731',
//     key: 'Or-Ib',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1732',
//     dataIndex: 'W1732',
//     key: 'Or-Ib',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1787',
//     dataIndex: 'W1787',
//     key: 'Or-Ib',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1865',
//     dataIndex: 'W1865',
//     key: 'Or-Ib',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2053',
//     dataIndex: 'W2053',
//     key: 'Or-Ib',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2064',
//     dataIndex: 'W2064',
//     key: 'Or-Ib',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2305',
//     dataIndex: 'W2305',
//     key: 'Or-Ib',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0145',
//     dataIndex: 'W0145',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0157',
//     dataIndex: 'W0157',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0164',
//     dataIndex: 'W0164',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0234',
//     dataIndex: 'W0234',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0590',
//     dataIndex: 'W0590',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0594',
//     dataIndex: 'W0594',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0596',
//     dataIndex: 'W0596',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1557',
//     dataIndex: 'W1557',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1666',
//     dataIndex: 'W1666',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1668',
//     dataIndex: 'W1668',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1736',
//     dataIndex: 'W1736',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1737',
//     dataIndex: 'W1737',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1742',
//     dataIndex: 'W1742',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1810',
//     dataIndex: 'W1810',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1825',
//     dataIndex: 'W1825',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1970',
//     dataIndex: 'W1970',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2099',
//     dataIndex: 'W2099',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2311',
//     dataIndex: 'W2311',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3040',
//     dataIndex: 'W3040',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3052',
//     dataIndex: 'W3052',
//     key: 'admixed',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0108',
//     dataIndex: 'W0108',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0143',
//     dataIndex: 'W0143',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0166',
//     dataIndex: 'W0166',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0169',
//     dataIndex: 'W0169',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0171',
//     dataIndex: 'W0171',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0180',
//     dataIndex: 'W0180',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0600',
//     dataIndex: 'W0600',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0634',
//     dataIndex: 'W0634',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1093',
//     dataIndex: 'W1093',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1126',
//     dataIndex: 'W1126',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1214',
//     dataIndex: 'W1214',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1236',
//     dataIndex: 'W1236',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1292',
//     dataIndex: 'W1292',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1550',
//     dataIndex: 'W1550',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1552',
//     dataIndex: 'W1552',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1553',
//     dataIndex: 'W1553',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1556',
//     dataIndex: 'W1556',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1859',
//     dataIndex: 'W1859',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1880',
//     dataIndex: 'W1880',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1890',
//     dataIndex: 'W1890',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1895',
//     dataIndex: 'W1895',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1919',
//     dataIndex: 'W1919',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1976',
//     dataIndex: 'W1976',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2022',
//     dataIndex: 'W2022',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2108',
//     dataIndex: 'W2108',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2197',
//     dataIndex: 'W2197',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2267',
//     dataIndex: 'W2267',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2275',
//     dataIndex: 'W2275',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2283',
//     dataIndex: 'W2283',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2308',
//     dataIndex: 'W2308',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2310',
//     dataIndex: 'W2310',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2318',
//     dataIndex: 'W2318',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2320',
//     dataIndex: 'W2320',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2321',
//     dataIndex: 'W2321',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3007',
//     dataIndex: 'W3007',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3054',
//     dataIndex: 'W3054',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3071',
//     dataIndex: 'W3071',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3090',
//     dataIndex: 'W3090',
//     key: 'Or-II',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0639',
//     dataIndex: 'W0639',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1559',
//     dataIndex: 'W1559',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1718',
//     dataIndex: 'W1718',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1725',
//     dataIndex: 'W1725',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1943',
//     dataIndex: 'W1943',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2036',
//     dataIndex: 'W2036',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2051',
//     dataIndex: 'W2051',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3000',
//     dataIndex: 'W3000',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3009',
//     dataIndex: 'W3009',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3012',
//     dataIndex: 'W3012',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3029',
//     dataIndex: 'W3029',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3033',
//     dataIndex: 'W3033',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3035',
//     dataIndex: 'W3035',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3037',
//     dataIndex: 'W3037',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3038',
//     dataIndex: 'W3038',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3046',
//     dataIndex: 'W3046',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3047',
//     dataIndex: 'W3047',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3051',
//     dataIndex: 'W3051',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3055',
//     dataIndex: 'W3055',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3063',
//     dataIndex: 'W3063',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3066',
//     dataIndex: 'W3066',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3074',
//     dataIndex: 'W3074',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3082',
//     dataIndex: 'W3082',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3086',
//     dataIndex: 'W3086',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3088',
//     dataIndex: 'W3088',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3092',
//     dataIndex: 'W3092',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W3096',
//     dataIndex: 'W3096',
//     key: 'Or-IIIa',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0133',
//     dataIndex: 'W0133',
//     key: 'Or-IIIb',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0135',
//     dataIndex: 'W0135',
//     key: 'Or-IIIb',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0136',
//     dataIndex: 'W0136',
//     key: 'Or-IIIb',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0137',
//     dataIndex: 'W0137',
//     key: 'Or-IIIb',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0149',
//     dataIndex: 'W0149',
//     key: 'Or-IIIb',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W0573',
//     dataIndex: 'W0573',
//     key: 'Or-IIIb',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1536',
//     dataIndex: 'W1536',
//     key: 'Or-IIIb',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1748',
//     dataIndex: 'W1748',
//     key: 'Or-IIIb',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1750',
//     dataIndex: 'W1750',
//     key: 'Or-IIIb',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1777',
//     dataIndex: 'W1777',
//     key: 'Or-IIIb',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1783',
//     dataIndex: 'W1783',
//     key: 'Or-IIIb',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W1809',
//     dataIndex: 'W1809',
//     key: 'Or-IIIb',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'W2005',
//     dataIndex: 'W2005',
//     key: 'Or-IIIb',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: '534M',
//     dataIndex: '534M',
//     key: 'Os.indica',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'Gla4',
//     dataIndex: 'Gla4',
//     key: 'Os.indica',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'GP100',
//     dataIndex: 'GP100',
//     key: 'Os.indica',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'GP119',
//     dataIndex: 'GP119',
//     key: 'Os.indica',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'GP58',
//     dataIndex: 'GP58',
//     key: 'Os.indica',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'GP622',
//     dataIndex: 'GP622',
//     key: 'Os.indica',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'GP524',
//     dataIndex: 'GP524',
//     key: 'Os.intermedia',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'GP543',
//     dataIndex: 'GP543',
//     key: 'Os.intermedia',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'GP635',
//     dataIndex: 'GP635',
//     key: 'Os.intermedia',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'HP519',
//     dataIndex: 'HP519',
//     key: 'Os.intermedia',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'GP117',
//     dataIndex: 'GP117',
//     key: 'Os.japonica',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'GP505',
//     dataIndex: 'GP505',
//     key: 'Os.japonica',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'GP523',
//     dataIndex: 'GP523',
//     key: 'Os.japonica',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'GP680',
//     dataIndex: 'GP680',
//     key: 'Os.japonica',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
//   {
//     title: 'HP436',
//     dataIndex: 'HP436',
//     key: 'Os.japonica',
//     width: 90,
//     render: (text)=>{
//       return colStyle(text)
//     }
//   },
// ]



// // export default {columns, colStyle}