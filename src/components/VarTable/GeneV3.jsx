import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts'
// import set from './set';


export default function Gene(set) {

  // console.log('...set.of.Gene...:', set)
  const { gff, snp, ins, del, start, end } = set
  // const { gff, snp, start, end } = set
  const category = ['CDS', 'exon', 'mRNA', 'gene', 
                    'jap', 'HP436', 'GP680', 'GP523', 'GP505', 'GP117', 
                    'int','HP519', 'GP635', 'GP543', 'GP524', 
                    'ind', 'GP622', 'GP58', 'GP119', 'GP100', 'Gla4', '534M', 
                    'or3b', 'W2005', 'W1809', 'W1783', 
                    'W1777', 'W1750', 'W1748', 'W1536', 'W0573', 'W0149', 'W0137', 'W0136', 'W0135', 'W0133', 
                    'or3a', 'W3096', 
                    'W3092', 'W3088', 'W3086', 'W3082', 'W3074', 'W3066', 'W3063', 'W3055', 'W3051', 'W3047', 'W3046', 
                    'W3038', 'W3037', 'W3035', 'W3033', 'W3029', 'W3012', 'W3009', 'W3000', 'W2051', 'W2036', 'W1943', 
                    'W1725', 'W1718', 'W1559', 'W0639', 
                    'or2', 'W3090', 'W3071', 'W3054', 'W3007', 'W2321', 'W2320', 'W2318', 
                    'W2310', 'W2308', 'W2283', 'W2275', 'W2267', 'W2197', 'W2108', 'W2022', 'W1976', 'W1919', 'W1895', 
                    'W1890', 'W1880', 'W1859', 'W1556', 'W1553', 'W1552', 'W1550', 'W1292', 'W1236', 'W1214', 'W1126', 
                    'W1093', 'W0634', 'W0600', 'W0180', 'W0171', 'W0169', 'W0166', 'W0143', 'W0108', 
                    'mix', 'W3052', 'W3040', 
                    'W2311', 'W2099', 'W1970', 'W1825', 'W1810', 'W1742', 'W1737', 'W1736', 'W1668', 'W1666', 'W1557', 
                    'W0596', 'W0594', 'W0590', 'W0234', 'W0164', 'W0157', 'W0145', 
                    'or1b', 'W2305', 'W2064', 'W2053', 'W1865', 
                    'W1787', 'W1732', 'W1731', 'W1726', 'W1679', 'W1677', 'W1619', 'W1547', 'W1142', 'W1084', 'W0630', 
                    'W0627', 'W0147', 'W0107', 
                    'or1a', 'W2332', 'W2319', 'W2066', 'W1839', 'W1735', 'W1723', 'W1719', 'W1117', 
                    'W1107', 'W1080', 'W0632', 'W0179', 'W0103', 
                    'mer', 'W1952', 
                    'lon', 'W3102', 'W3101', 'W2296', 'end'
                  ]


  let boundary = ['jap', 'int', 'ind', 'or3b', 'or3a', 'or2', 'mix', 'or1b', 'or1a', 'mer', 'lon', 'end']
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
  sortIns(ins, spotIns, 'insertion')
  sortIndel(del, spotDel, 'deletion')

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
      // height: 300,
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
        // 强制显示所有标签
        interval: 0,
        // show: false,
        show: true,
        fontSize: 10,
        formatter: (param)=>{
          if (!boundary.includes(param)){
            return(param)
          }
        }
      }
    },
    series: [
      // deletion
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
          // textStyle: {
          //   // fontSize: 20
          // },
          formatter: (params)=>{
            // sortedSet.push([set[i].pos, e, set[i]['alt_end'], set[i]['alt_len'], type, set[i]['chr']])
            return(`accession: ${params.data.name}<br>type: deletion<br>chr: ${params.data.chr}<br>length: ${params.data.length}<br>coord: ${params.data.value[1]}-${params.data.value[2]}`)
          }
        },
      },
      // SNP 包括纵坐标分区
      {
        name: 'SNP',
        type: 'scatter',
        colorBy: 'data',
        data: spotSnp,
        symbolSize: 6,
        // symbolSize: 10,
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
            // fontSize: 18,
            color: 'rgba(33, 47, 60, 0.8)',
            position: ['-10%', '4%'],
            tooltip: {
              show: false
            }
          },
          data: [[{
            name: 'japonica',
            itemStyle: {color:'rgba(214, 234, 248, 0.2)'},
            yAxis: 'jap'
          },{
            yAxis: 'int'
          }], [{
            name: 'intermedia',
            itemStyle: {color:'rgba(235, 222, 240, 0.2)'},
            yAxis: 'int'
          },{
            yAxis: 'ind'
          }], [{
            name: 'indica',
            itemStyle: {color:'rgba(250, 219, 216, 0.2)'},
            yAxis: 'ind'
          },{
            yAxis: 'or3b'
          }], [{
            name: 'Or-IIIb',
            itemStyle: {color:'rgba(208, 236, 231, 0.2)'},
            yAxis: 'or3b'
          },{
            yAxis: 'or3a'
          }], 
          [{
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
            // name: 'O.merid',
            name: 'O.meridionalis',
            itemStyle: {color:'rgba( 209, 242, 235 , 0.3)'},
            yAxis: 'mer'
          },{
            yAxis: 'lon'
          }], [{
            // name: 'O.longis',
            // name: 'O.longistaminata',
            name: 'O.longistami..',
            itemStyle: {color:'rgba( 212, 230, 241 , 0.3)'},
            yAxis: 'lon'
          },{
            yAxis: 'end'
          }]
        ]
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
      // insertion
      {
        name: 'insertion',
        type: 'scatter',
        data: spotIns,
        symbol: 'triangle',
        symbolSize: 7,
        // symbolSize: 10,
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
      // gene structue from ref gff
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

  const style = {width:'1840px', height:'1700px'}
  // const style = {width:'1840px', height:'900px'}
  return (
    <div ref={chartRef} style={style}>
    </div>

  )
}

