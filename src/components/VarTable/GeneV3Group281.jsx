import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts'
// import set from './set';


export default function Gene(set) {

  // console.log('...set.of.Gene...:', set)
  // const { gff, snp, ins, del, start, end } = set
  const { gff, snp, start, end } = set
  const category = ['CDS', 'exon', 'mRNA', 'gene', 

                    '11cA', 'N22', 'Nagina22', 'NATELBORO', 'TG27', 'TG49', 'TG60', 'TG6', 'TG62', 'TG87',

                    'ind', 'TG11', 'TG52', 'TG64', 'TG75', 'TG85', 'R600', '534M', '9311', 'CN1', 'D62', 'DG', 'FH838', 'FS32', 'G46', 'G630', 
                    'G8', 'Gla4', 'GOBOLSAIL', 'GP100', 'GP119', 'GP58', 'GP622', 'H7L1', 'H7L26', 'H7L27', 'H7L28', 'H7L30', 'H7L31', 'H7L32', 
                    'H7L33', 'HR12', 'II32', 'IR64', 'IR8', 'J4155', 'KHAOYAIGUA', 'LARHAMUGAD', 'LIMA', 'LIUXU', 'MH63', 'PR106', 'R498', 
                    'R527', 'S548', 'SE-134', 'SE-19', 'SE-33', 'SE-3', 'Tetep', 'TG10', 'TG13', 'TG1', 'TG21', 'TG24', 'TG28', 'TG30', 
                    'TG33', 'TG42', 'TG43', 'TG45', 'TG50', 'TG51', 'TG53', 'TG55', 'TG56', 'TG58', 'TG59', 'TG5', 'TG61', 'TG70', 'TG76', 
                    'TG77', 'TG78', 'TG7', 'TG80', 'TG82', 'TG83', 'TG84', 'TG86', 'TG88', 'TG8', 'TG9', 'TM', 'Tumba', 'WSSM', 'Y3551', 
                    'Y58S', 'YX1', 'ZS97',

                    'int', 'GP524', 'GP543', 'GP635', 'HP519',
                    '8cB', 'ARC10497', 'Basmati1', 'Sadri', 'TG12', 'TG54', 'TG81', 'WW8', 'TG16',

                    'jap', '02428', 'Azucena', 'CGS', 'CHAOMEO', 'DHX2', 'GP117', 'GP505', 'GP523', 'GP680', 'HP436', 'KETANNANGK', 'Kitaake', 
                    'Kosh', 'KY131', 'Lemont', 'LJ', 'NamRoo', 'Suijing18', 'TG14', 'TG15', 'TG17', 'TG18', 'TG19', 'TG22', 'TG2', 'TG29', 
                    'TG31', 'TG32', 'TG3', 'TG46', 'TG4', 'TG63', 'TG65', 'TG90', 'ZH11', 'TG34',

                    'or3b', 'W0133', 'W0135', 'W0136', 'W0137', 'W0149', 'W0573', 'W1536', 'W1748', 'W1750', 'W1777', 'W1783', 'W1809', 'W2005',
                    'or3a', 'W0639', 'W1559', 'W1718', 'W1725', 'W1943', 'W2036', 'W2051', 'W3000', 'W3009', 'W3012', 'W3029', 'W3033', 'W3035', 
                    'W3037', 'W3038', 'W3046', 'W3047', 'W3051', 'W3055', 'W3063', 'W3066', 'W3074', 'W3082', 'W3086', 'W3088', 'W3092', 'W3096',

                    'or2', 'W0108', 'W0143', 'W0166', 'W0169', 'W0171', 'W0180', 'W0600', 'W0634', 'W1093', 'W1126', 'W1214', 'W1236', 'W1292', 
                    'W1550', 'W1552', 'W1553', 'W1556', 'W1859', 'W1880', 'W1890', 'W1895', 'W1919', 'W1976', 'W2022', 'W2108', 'W2197', 'W2267', 
                    'W2275', 'W2283', 'W2308', 'W2310', 'W2318', 'W2320', 'W2321', 'W3007', 'W3054', 'W3071', 'W3090',

                    'mix', 'W0145', 'W0157', 'W0164', 'W0234', 'W0590', 'W0594', 'W0596', 'W1557', 'W1666', 'W1668', 'W1736', 'W1737', 'W1742', 
                    'W1810', 'W1825', 'W1970', 'W2099', 'W2311', 'W3040', 'W3052',

                    'or1b', 'W1677', 'W1732', 'W1679', 'W2064', 'W1084', 'W0627', 'W1787', 'W0630', 'W2305', 'W2053', 'W1726', 'W1865', 'W1547', 
                    'W1619', 'W0107', 'W1142', 'W0147', 'W1731',

                    'or1a', 'W1117', 'W0179', 'W1839', 'W2332', 'W1719', 'W2066', 'W1735', 'W0632', 'W1107', 'W0103', 'W2319', 'W1723', 'W1080',
                    'mer', 'W1952',
                    '0CC', 'OryzaOffic',
                    'lon', 'W2296', 'W3101', 'W3102',
                    'end']





  let infoCol = ['alt', 'baseCount', 'chr', 'key', 'pos', 'ref', 'refCount', 'varCount', 'var_id', 'alt_len', 'alt_end']
  let spotSnp = []
  
  for (let i in snp){
      for(let e in snp[i]){
        if (!infoCol.includes(e) && snp[i][e] !== '0/0' && snp[i][e] !== './.'){
          let alt = snp[i]['alt'].split(',')
          switch (snp[i][e]) {
            case '1/1':
              spotSnp.push([snp[i].pos, e, snp[i]['ref'], alt[0], 'SNP', snp[i]['chr']])
              break
            case '2/2':
              spotSnp.push([snp[i].pos, e, snp[i]['ref'], alt[1], 'SNP', snp[i]['chr']])
              break
            case '3/3':
              spotSnp.push([snp[i].pos, e, snp[i]['ref'], alt[3], 'SNP', snp[i]['chr']])
              break
            case '0/1' || '1/0':
              spotSnp.push([snp[i].pos, e, snp[i]['ref'], `${snp[i]['ref']}/${alt[0]}`, 'SNP', snp[i]['chr']])
              break
            case '0/2' || '2/0':
              spotSnp.push([snp[i].pos, e, snp[i]['ref'], `${snp[i]['ref']}/${alt[1]}`, 'SNP', snp[i]['chr']])
              break
            case '0/3' || '3/0':
              spotSnp.push([snp[i].pos, e, snp[i]['ref'], `${snp[i]['ref']}/${alt[2]}`, 'SNP', snp[i]['chr']])
              break
            case '1/2' || '2/1':
              spotSnp.push([snp[i].pos, e, snp[i]['ref'], `${alt[0]}/${alt[1]}`, 'SNP', snp[i]['chr']])
              break
            case '1/3' || '3/1':
              spotSnp.push([snp[i].pos, e, snp[i]['ref'], `${alt[0]}/${alt[2]}`, 'SNP', snp[i]['chr']])
              break
            case '2/3' || '3/2':
              spotSnp.push([snp[i].pos, e, snp[i]['ref'], `${alt[1]}/${alt[2]}`, 'SNP', snp[i]['chr']])
              break
            default:
              break
          }
        }
      }
    }
  
  function sortIndel(set, sortedSet, type){
    for (let i in set){
      for(let e in set[i]){
        if (!infoCol.includes(e) && set[i][e] !== '0/0' && set[i][e] !== './.'){
          switch (set[i][e]) {
            case '1/1':
              // sortedSet.push([set[i].pos, e, set[i]['alt_end'], set[i]['alt_len'], type, set[i]['chr']])
              sortedSet.push({
                name: e,
                type: type,
                length: set[i]['alt_len'],
                chr: set[i]['chr'],
                value: [1, set[i].pos, set[i]['alt_end'], category.indexOf(e)],
                itemStyle: {
                  normal: {
                    color: '#4D5656'
                  }
                }
              })
              break
            case '0/1' || '1/0':
              sortedSet.push({
                name: e,
                type: type,
                length: set[i]['alt_len'],
                value: [1, set[i].pos, set[i]['alt_end'], category.indexOf(e)],
                itemStyle: {
                  normal: {
                    color: '#4D5656'
                  }
                }
              })
              break
            default:
              break
          }
        }
      }
    }
  }

  function sortIns(set, sortedSet, type){
    for (let i in set){
      for(let e in set[i]){
        if (!infoCol.includes(e) && set[i][e] !== '0/0' && set[i][e] !== './.'){
          switch (set[i][e]) {
            case '1/1':
              sortedSet.push([set[i].pos, e, set[i]['alt_end'], set[i]['alt_len'], type, set[i]['chr']])
              break
            case '0/1' || '1/0':
              sortedSet.push([set[i].pos, e, set[i]['alt_end'], set[i]['alt_len'], type, set[i]['chr']])
              break
            default:
              break
          }
        }
      }
    }
  }

  let spotIns = []
  let spotDel = []
  // sortIns(ins, spotIns, 'insertion')
  // sortIndel(del, spotDel, 'deletion')

  // console.log('spot:', spotSnp)
  // console.log('spot del:', spotDel)
  // let min = 0
  // let max = 0
  // console.log('gff:', gff)
  var types = {
    'gene': '#7b9ce1' ,
    'mRNA': '#bd6d6c' ,
    'exon': '#75d874' ,
    'CDS': '#e0bc78',
    'five_prime_UTR': '#dc77dc',
    'three_prime_UTR': '#922B21'
  }

  let data = []
  gff.forEach((item)=>{
    // if (item.type === 'gene'){
    //   min = item.start - 2000
    //   max = item.end + 2000
    // } else if (item.type === 'mRNA'){
    //   min = item.start - 2000
    //   max = item.end + 2000
    // }
    data.push({
      name: item.type,
      value: item.value,
      strand: item.strand,
      chr: item.chr,
      gene: item.gene_id,
      itemStyle: {
        normal: {
          color: types[item.type]
        }
      }
    })
  })  

  // 基因结构
  function renderItem(params, api) {
    const start = api.coord([api.value(1), api.value(3)]);
    const end = api.coord([api.value(2), api.value(3)]);
    const height = 7
    var rectShape = echarts.graphic.clipRectByRect(
      {
        x: start[0],
        y: start[1] - height / 2,
        width: end[0] - start[0],
        height: height
      },
      {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
      }
    )
    return (
      rectShape && {
        type: 'rect',
        transition: ['shape'],
        shape: rectShape,
        style: api.style()
      }
    );
  }

  // sv结构
  function renderItem1(params, api) {
    const start = api.coord([api.value(1), api.value(3)]);
    const end = api.coord([api.value(2), api.value(3)]);
    const height = 7
    var rectShape = echarts.graphic.clipRectByRect(
      {
        x: start[0],
        y: start[1] - height / 2,
        width: end[0] - start[0],
        height: height
      },
      {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
      }
    )
    return (
      rectShape && {
        type: 'rect',
        transition: ['shape'],
        shape: rectShape,
        style: api.style()
      }
    );
  }

  const option = {
    tooltip: {
      // formatter: function (params) {
      //   return params.marker + params.name + ': ' + params.value[3] + ' ms';
      // },
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      show: false,
      formatter: (param)=>{
        switch (param){
          case 'SNP':
            return 'SNP'
          case 'indel':
            return 'indel'
          case 'SV':
            return 'SV'
          case 'gene structure':
            return null
          default:
            break
        }
      }
    },
    toolbox: {
      show: true,
      itemSize: 19,
      right: "15%",
      top: "1%",
      feature: {
        dataZoom: {},
        restore: {},
        // dataView: {
        //   readOnly: true
        // },
        saveAsImage: {}
      }
    },
    grid: {
      height: 2200,
      // width: 1300 
    },
    dataZoom: [
      {
        type: 'slider',
        filterMode: 'weakFilter',
        showDataShadow: false,
        top: '97%',
        labelFormatter: ''
      },
      {
        type: 'inside',
        filterMode: 'weakFilter'
      }
    ],
    xAxis: {
      min: start,
      max: end,
      scale: true,
    },
    yAxis: {
      data: category,
      axisLabel: {
        // show: false,
        show: true,
        fontSize: 8,
        // rotate: 30

        // formatter: (param)=>{
        //   if (['gene', 'mRNA', 'exon', 'CDS'].includes(param)){
        //     return(param)
        //   }
        // }
      }
    },
    series: [
      {
        name: 'deletion',
        type: 'custom',
        data: spotDel,
        renderItem: renderItem1,
        encode: {
          x: [1, 2],
          y: 0
        },
        tooltip: {
          show: true,
          formatter: (params)=>{
            // sortedSet.push([set[i].pos, e, set[i]['alt_end'], set[i]['alt_len'], type, set[i]['chr']])
            return(`accession: ${params.data.name}<br>type: deletion<br>chr: ${params.data.chr}<br>length: ${params.data.length}<br>coord: ${params.data.value[1]}-${params.data.value[2]}`)
          }
        },
      },
      {
        name: 'SNP',
        type: 'scatter',
        colorBy: 'data',
        data: spotSnp,
        symbolSize: 6,
        tooltip: {
          show: true,
          formatter: (params)=>{
            // spotSnp.push([snp[i].pos, e, snp[i]['ref'], alt[0], 'SNP', snp[i]['chr']])
            return(`accession: ${params.data[1]}<br>type: SNP<br>chr: ${params.data[5]}<br>pos: ${params.data[0]}<br>ref: ${params.data[2]}<br>variation: ${params.data[3]}`)
          }
        },
        markArea: {
          label: {
            show: true,
            fontSize: 14,
            color: 'rgba(33, 47, 60, 0.8)',
            position: ['-8%', '4%'],
            tooltip: {
              show: false
            }
          },
          data: [[{
            name: 'cA',
            itemStyle: {color:'rgba(240, 178, 122, 0.2)'},
            yAxis: '11cA'
          },{
            yAxis: 'ind'
          }],  [{
            name: 'indica',
            itemStyle: {color:'rgba(250, 219, 216, 0.2)'},
            yAxis: 'ind'
          },{
            yAxis: 'int'
          }], [{
            name: 'intermedia',
            itemStyle: {color:'rgba(235, 222, 240, 0.2)'},
            yAxis: 'int'
          },{
            yAxis: '8cB'
          }], [{
            name: 'japonica',
            itemStyle: {color:'rgba(214, 234, 248, 0.2)'},
            yAxis: 'jap'
          },{
            yAxis: 'or3b'
          }], 
          
          
          [{
            name: 'Or-IIIb',
            itemStyle: {color:'rgba(208, 236, 231, 0.2)'},
            yAxis: 'or3b'
          },{
            yAxis: 'or3a'
          }], [{
            name: 'Or-IIIa',
            itemStyle: {color:'rgba(252, 243, 207, 0.2)'},
            yAxis: 'or3a'
          },{
            yAxis: 'or2'
          }], [{
            name: 'Or-II',
            itemStyle: {color:'rgba(250, 229, 211, 0.2)'},
            yAxis: 'or2'
          },{
            yAxis: 'mix'
          }], [{
            name: 'admixed',
            itemStyle: {color:'rgba(237, 187, 153, 0.3)'},
            yAxis: 'mix'
          },{
            yAxis: 'or1b'
          }], [{
            name: 'Or-Ib',
            itemStyle: {color:'rgba( 252, 243, 207 , 0.3)'},
            yAxis: 'or1b'
          },{
            yAxis: 'or1a'
          }], [{
            name: 'Or-Ia',
            itemStyle: {color:'rgba( 213, 245, 227 , 0.3)'},
            yAxis: 'or1a'
          },{
            yAxis: 'mer'
          }], [{
            name: 'Or-Ia',
            itemStyle: {color:'rgba( 208, 236, 231 , 0.3)'},
            yAxis: 'or1a'
          },{
            yAxis: 'mer'
          }], [{
            name: 'O.merid',
            // name: 'O.meridionalis',
            itemStyle: {color:'rgba( 209, 242, 235 , 0.3)'},
            yAxis: 'mer'
          },{
            yAxis: '0CC'
          }], [{
            name: '0CC',
            // name: 'O.longistaminata',
            itemStyle: {color:'rgba( 210, 180, 222 , 0.3)'},
            yAxis: '0CC'
          },{
            yAxis: 'lon'
          }], [{
            name: 'O.longis',
            // name: 'O.longistaminata',
            itemStyle: {color:'rgba( 212, 230, 241 , 0.3)'},
            yAxis: 'lon'
          },{
            yAxis: 'end'
          }]]
        },
        itemStyle: {
          normal: {
            color: (params)=>{
              // console.log(params.data)
              switch(params.data[4]){
                case 'SNP':
                  return '#AEB6BF'
                default:
                  break
              }
            }
          }
        }
      },
      {
        name: 'insertion',
        type: 'scatter',
        data: spotIns,
        symbol: 'triangle',
        symbolSize: 7,
        tooltip: {
          show: true,
          formatter: (params)=>{
            // sortedSet.push([set[i].pos, e, set[i]['alt_end'], set[i]['alt_len'], type, set[i]['chr']])
            return(`accession: ${params.data[1]}<br>type: insertion<br>chr: ${params.data[5]}<br>pos: ${params.data[0]}<br>length: ${params.data[3]}`)
          }
        },
        itemStyle: {
          normal: {
            color: 'red'
          }
        }  
      },
      {
        name: 'gene structure',
        type: 'custom',
        renderItem: renderItem,
        itemStyle: {
          opacity: 0.5
        },
        encode: {
          x: [1, 2],
          y: 0
        },
        tooltip: {
          show: true,
          formatter: (params)=>{
            return(`${params.data.chr}<br>${params.data.name}<br>${params.data.gene}`)
          }
        },
        data: data
        // data: spotSv

      }
    ]
  };

  // console.log('....data....', data, gff)
  // console.log('option of var chart', option)

  const chartRef = useRef(null)

  useEffect(()=>{
    const myChart = echarts.init(chartRef.current)
    myChart.setOption(option)
  })

  // console.log('oooooooooooooooooption', option);

  const style = {width:'1800px', height:'3000px'}
  return (
    <div ref={chartRef} style={style}>
    </div>

  )
}

