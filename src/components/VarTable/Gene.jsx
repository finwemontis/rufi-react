import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts'
// import set from './set';


export default function Gene(set) {

 
  const { gff, snp, indel, sv } = set
  // console.log('.................................set:', snp.length())
    // const category = ['CDS', 'exon', 'mRNA', 'gene']
    const category = ['CDS', 'exon', 'mRNA', 'gene', 's1', 'GP3', 'GP22', 'GP51', 'GP72', 'GP772-1', 'HP119', 'HP263', 
    'HP327', 'HP517-1', 'HP362-2', 'HP383', 'HP396', 'HP407', 'HP486', 'HP492', 'HP577', 'GLA4', 'UR28', 's2', 'GP39', 
    'GP77', 'GP536', 'GP551', 'GP677', 'GP761-1', 'HP13-2', 'HP14', 'HP38', 'HP44', 'HP45', 'HP48', 'HP91-2', 
    'HP98', 'HP103', 'HP274', 'HP314', 'HP390', 'WYG7', 'KY131', 'LG31', 'DHX2', 'IL9', 'Koshihikari', 's3', 'GP62', 
    'GP104', 'GP124', 'GP540', 'Kasalath', 's4', 'GP295-1', 's5', 'W0123-1', 'W0128', 'W0141', 's6', 'W0170', 'W1687', 'W1698', 
    'W1739', 's7', 'W1754', 'W1777', 'W3078-2', 'W1943', 'W1979', 'W2012', 'W3095-2', 'W3105-1', 's8']

  console.log('this is gff:', gff)
  console.log('this is snp:', snp)


  // let alt = 398542
  let alt = 1755847  //sd1?

  let spotSnp = []
  let spotIndel = []
  let spotSv = []
  let not = ['Ref_base', 'Variant_base', 'baseCount', 'Ref_POS1', 'Ref_POS2', 'varType', 'Ref_CHR', 'Ref_gene', 'Ref_gene_coding', 'refCount', 'varCount', 'key']

  for (let i in snp){
    switch (snp[i]['varType']){
      case 'SNP':
        for(let e in snp[i]){
          if(!not.includes(e) && snp[i][e] !== 'R' && snp[i][e] !== 'X' && snp[i][e] !== snp[i]['Ref_base']){
            // spotSnp.push([snp[i].Ref_POS1 - 1755847, e, snp[i][e], snp[i]['Ref_base'], 'SNP'])
            spotSnp.push([snp[i].Ref_POS1 - alt, e, snp[i][e], snp[i]['Ref_base'], 'SNP', snp[i]['Ref_CHR']])
          }
        }
        break
      default:
        break
    }
  }

  for (let i in indel){
    switch (indel[i]['varType']){
      case 'in':
        for(let e in indel[i]){
          if(!not.includes(e) && indel[i][e] !== 'R' && !indel[i][e].includes('X') && indel[i][e] !== indel[i]['Ref_base']){
            // spotIndel.push([indel[i].Ref_POS1 - 1755847, e, indel[i][e], indel[i]['Ref_base'], 'in'])
            spotIndel.push([indel[i].Ref_POS1 - alt, e, indel[i][e], indel[i]['Ref_base'], 'in', snp[i]['Ref_CHR']])
          }
        }
        break
      case 'del':
        for(let e in indel[i]){
          if(!not.includes(e) && indel[i][e] !== 'R' && !indel[i][e].includes('X')  && indel[i][e] !== indel[i]['Ref_base']){
            // spotIndel.push([indel[i].Ref_POS1 - 1755847, e, indel[i][e], indel[i]['Ref_base'], 'del'])
            spotIndel.push([indel[i].Ref_POS1 - alt, e, indel[i][e], indel[i]['Ref_base'], 'del', snp[i]['Ref_CHR']])
          }
        }
        break
      case 'NHS':
        for(let e in indel[i]){
          if(!not.includes(e) && indel[i][e] !== 'R' && !indel[i][e].includes('X')){
            // spotIndel.push([indel[i].Ref_POS1 - 1755847, e, indel[i][e], indel[i]['Ref_base'], 'NHS'])
            spotIndel.push([indel[i].Ref_POS1 - alt, e, indel[i][e], indel[i]['Ref_base'], 'NHS', snp[i]['Ref_CHR']])
          }
        }
        break
      default:
        break
  }
}

for (let i in sv){
  switch (sv[i]['varType']){
    case 'SV':
      for(let e in sv[i]){
        if(!not.includes(e) && sv[i][e] !== 'R' && sv[i][e] !=='NA'){
          switch (sv[i][e]){
            case '384bp':
              spotSv.push({
                name: e,
                length: sv[i][e],
                // value: [1, sv[i].Ref_POS1 - 1755847, sv[i].Ref_POS1 - 1755847 + 384],
                value: [1, sv[i].Ref_POS1 - alt, sv[i].Ref_POS1 - alt + 384, category.indexOf(e)],
                itemStyle: {
                  normal: {
                    color: '#4D5656'
                  }
                }
              })
              break
            case '2bp':
              break
            default:
              break
          }
          // spotSv.push([sv[i].Ref_POS1 - 1755847, e, sv[i][e], sv[i]['Ref_base'], 'SV',])
          
        }
      }
      break
    default:
      break
  }
}



  // console.log('spot:', spot)
  let min = 0
  let max = 0
  // console.log('gff:', gff)
  var types = {
    'gene': '#7b9ce1' ,
    'mRNA': '#bd6d6c' ,
    'exon': '#75d874' ,
    'CDS': '#e0bc78',
    'five_prime_UTR': '#dc77dc',
    'three_prime_UTR': '#72b362'
  }

  let data = []
  gff.forEach((item)=>{
    if (item.type === 'gene'){
      min = item.start - 2000
      max = item.end + 2000
    } else if (item.type === 'mRNA'){
      min = item.start - 2000
      max = item.end + 2000
    }
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

  function renderItem(params, api) {
    const start = api.coord([api.value(1), api.value(3)]);
    const end = api.coord([api.value(2), api.value(3)]);
    const height = 10
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
      // 34219186 and end<34245373
      // min: 34219186,
      // max: 34245373,38380382 and end<38387504
      min: 38380382,
      max: 38387504,
      scale: true,
      axisLabel: {
        fontSize: 20
      } 
    },
    yAxis: {
      data: category,
      axisLabel: {
        show: false,
        // formatter: (param)=>{
        //   if (['gene', 'mRNA', 'exon', 'CDS'].includes(param)){
        //     return(param)
        //   }
        // }
      }
    },
    series: [
      {
        name: 'SV',
        type: 'custom',
        tooltip: {
          show: true,
          textStyle: {
            fontSize: 18
          },
          formatter: (params)=>{
            // return(`accession: ${params.data.name}<br>chr: 1<br>pos: ${params.data.value[1]}-${params.data.value[2]}<br>length: ${params.data.length}<br>type: deletion`)
            return(`accession: ${params.data.name}<br>chr: 1<br>pos: ${params.data.value[1]}-${params.data.value[2]}<br>length: ${params.data.length}<br>type: deletion`)
            // console.log(params.data.name)
            
          }
        },
        renderItem: renderItem1,
        itemStyle: {
          opacity: 0.9
        },
        encode: {
          x: [1, 2],
          y: 0
        },
        data: spotSv
        // data: data

      },
      {
        name: 'SNP',
        type: 'scatter',
        colorBy: 'data',
        data: spotSnp,
        symbolSize: 7,
        tooltip: {
          show: true,
          formatter: (params)=>{
            // return(`accession: ${params.data[1]}<br>type: SNP<br>pos: ${params.data[0]+1755847}<br>ref: ${params.data[3]}<br>variation: ${params.data[2]}`)
            return(`accession: ${params.data[1]}<br>type: SNP<br>pos: ${params.data[0]}<br>ref: ${params.data[3]}<br>variation: ${params.data[2]}<br>chr: ${params.data[5]}`)
          }
        },
        markArea: {
          label: {
            show: true,
            fontSize: 24,
            color: 'rgba(33, 47, 60, 0.8)',
            position: ['-6%', '20%'],
            tooltip: {
              show: false
            }
          },
          data: [[{
            name: 'indica',
            itemStyle: {color:'rgba(214, 234, 248, 0.2)'},
            yAxis: 's1'
          },{
            yAxis: 's2'
          }], [{
            name: 'japonica',
            itemStyle: {color:'rgba(235, 222, 240, 0.2)'},
            yAxis: 's2'
          },{
            yAxis: 's3'
          }], [{
            name: 'aus',
            itemStyle: {color:'rgba(250, 219, 216, 0.2)'},
            yAxis: 's3'
          },{
            yAxis: 's4'
          }], [{
            name: 'aromatic',
            itemStyle: {color:'rgba(208, 236, 231, 0.2)'},
            yAxis: 's4'
          },{
            yAxis: 's5'
          }], [{
            name: 'Or-I',
            itemStyle: {color:'rgba(252, 243, 207, 0.2)'},
            yAxis: 's5'
          },{
            yAxis: 's6'
          }], [{
            name: 'Or-II',
            itemStyle: {color:'rgba(250, 229, 211, 0.2)'},
            yAxis: 's6'
          },{
            yAxis: 's7'
          }], [{
            name: 'Or-III',
            itemStyle: {color:'rgba(237, 187, 153, 0.3)'},
            yAxis: 's7'
          },{
            yAxis: 's8'
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
        name: 'indel',
        type: 'scatter',
        colorBy: 'data',
        data: spotIndel,
        symbol: 'triangle',
        symbolSize: 7,
        tooltip: {
          show: true,
          formatter: (params)=>{
            // return(`accession: ${params.data[1]}<br>type: ${params.data[4]}<br>pos: ${params.data[0]}<br>ref: ${params.data[3]}<br>variation: ${params.data[2]}`)
            return(`accession: ${params.data[1]}<br>type: ${params.data[4]}<br>pos: ${params.data[0]}<br>ref: ${params.data[3]}<br>variation: ${params.data[2]}<br>chr: ${params.data[5]}`)
          }
        },
        itemStyle: {
          normal: {
            color: (params)=>{
              // console.log(params.data)
              switch(params.data[4]){
                case 'in':
                  return '#E67E22'
                  // 深黄色
                case 'del':
                  return 'red'
                case 'NHS':
                  return '#F4D03F'
                default:
                  break
              }
            }
          }
        }
      },
      {
        name: 'gene structure',
        type: 'custom',
        renderItem: renderItem,
        itemStyle: {
          opacity: 0.8
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

  const style = {width:'2200px', height:'1300px'}
  return (
    <div ref={chartRef} style={style}>
    </div>

  )
}

// 统计代码的饼图
// option = {
//   tooltip: {
//     trigger: 'item'
//   },
//   series: [
//     {
//       name: 'Access From',
//       type: 'pie',
//       radius: ['40%', '70%'],
//       avoidLabelOverlap: false,
//       itemStyle: {
//         borderRadius: 10,
//         borderColor: '#fff',
//         borderWidth: 2
//       },
//       label: {
//         show: true,
//         fontSize: 27
//       },
//       labelLine: {
//         show: true
//       },
//       emphasis: {
//         label: {
//           show: true,
//           fontSize: 40,
//           fontWeight: 'bold',
//         }
//       },
      
//       data: [
//         { value: 76, name: 'CSS' },
//         { value: 6595, name: 'JavaScript React' },
//         { value: 600, name: 'JavaScript' },
//         { value: 855, name: 'PHP' },
        
//       ]
//     }
//   ]
// };

