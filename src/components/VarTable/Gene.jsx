import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts'
// import set from './set';


export default function Gene(set) {

  const { gff, vars } = set

  console.log('this is gff:', gff)
  console.log('this is vars:', vars)

  let spot = []

  for (let i in vars){
    for (let e in vars[i]){
      if(e !== 'Ref_base' && e !== 'Variant_base'){
        switch (vars[i][e]){
          case 'A':
            spot.push([vars[i].Ref_POS1 - 1755847, e, vars[i][e], vars[i]['Ref_base']])
            break
          case 'T':
            spot.push([vars[i].Ref_POS1 - 1755847, e, vars[i][e], vars[i]['Ref_base']])
            break
          case 'C':
            spot.push([vars[i].Ref_POS1 - 1755847, e, vars[i][e], vars[i]['Ref_base']])
            break
          case 'G':
            spot.push([vars[i].Ref_POS1 - 1755847, e, vars[i][e], vars[i]['Ref_base']])
            break
          default:
            break
        }
      }
    }
  }

  // const category = ['CDS', 'exon', 'mRNA', 'gene']
  const category = ['CDS', 'exon', 'mRNA', 'gene', 'GP3', 'GP22', 'GP51', 'GP72', 'GP772-1', 'HP119', 'HP263', 
    'HP327', 'HP517-1', 'HP362-2', 'HP383', 'HP396', 'HP407', 'HP486', 'HP492', 'HP577', 'GLA4', 'UR28', 'GP39', 
    'GP77', 'GP536', 'GP551', 'GP677', 'GP761-1', 'HP13-2', 'HP14', 'HP38', 'HP44', 'HP45', 'HP48', 'HP91-2', 
    'HP98', 'HP103', 'HP274', 'HP314', 'HP390', 'WYG7', 'KY131', 'LG31', 'DHX2', 'IL9', 'Koshihikari', 'GP62', 
    'GP104', 'GP124', 'GP540', 'Kasalath', 'GP295-1', 'W0123-1', 'W0128', 'W0141', 'W0170', 'W1687', 'W1698', 
    'W1739', 'W1754', 'W1777', 'W3078-2', 'W1943', 'W1979', 'W2012', 'W3095-2', 'W3105-1']
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

  const option = {
    tooltip: {
      // formatter: function (params) {
      //   return params.marker + params.name + ': ' + params.value[3] + ' ms';
      // }
      axisPointer: {
        type: 'cross'
      }
    },
    // title: {
    //   text: 'Profile',
    //   left: 'center'
    // },
    
    grid: {
      // height: 300,
      // width: 1300 
    },
    dataZoom: [
      {
        type: 'slider',
        filterMode: 'weakFilter',
        showDataShadow: false,
        top: '98%',
        labelFormatter: ''
      },
      {
        type: 'inside',
        filterMode: 'weakFilter'
      }
    ],
    xAxis: {
      min: min,
      max: max,
      scale: true,
    },
    yAxis: {
      data: category,
      axisLabel: {
        show: true,
        formatter: (param)=>{
          if (['gene', 'mRNA', 'exon', 'CDS'].includes(param)){
            return(param)
          }
        }
      }
    },
    series: [
      {
        name: 'variations',
        type: 'scatter',
        colorBy: 'data',
        data: spot,
        symbolSize: 7,
        tooltip: {
          show: true,
          formatter: (params)=>{
            return(`${params.data[1]}, ${params.data[0]}, ${params.data[3]}->${params.data[2]}`)
          }
        },
        markArea: {
          label: {
            show: true,
            fontSize: 17,
            color: 'rgba(33, 47, 60, 0.8)',
            position: ['5%', '10%'],
            tooltip: {
              show: false
            }
          },
          data: [[{
            name: 'indica',
            itemStyle: {color:'rgba(214, 234, 248, 0.2)'},
            yAxis: 'GP3'
          },{
            yAxis: 'UR28'
          }], [{
            name: 'japonica',
            itemStyle: {color:'rgba(235, 222, 240, 0.2)'},
            yAxis: 'UR28'
          },{
            yAxis: 'Koshihikari'
          }], [{
            name: 'aus',
            itemStyle: {color:'rgba(250, 219, 216, 0.2)'},
            yAxis: 'Koshihikari'
          },{
            yAxis: 'Kasalath'
          }], [{
            name: 'aromatic',
            itemStyle: {color:'rgba(208, 236, 231, 0.2)'},
            yAxis: 'Kasalath'
          },{
            yAxis: 'GP295-1'
          }], [{
            name: 'Or-I',
            itemStyle: {color:'rgba(252, 243, 207, 0.2)'},
            yAxis: 'GP295-1'
          },{
            yAxis: 'W0141'
          }], [{
            name: 'Or-II',
            itemStyle: {color:'rgba(250, 229, 211, 0.2)'},
            yAxis: 'W0141'
          },{
            yAxis: 'W1739'
          }], [{
            name: 'Or-III',
            itemStyle: {color:'rgba(237, 187, 153, 0.3)'},
            yAxis: 'W1739'
          },{
            yAxis: 'W3105-1'
          }]]
        },
        itemStyle: {
          normal: {
            color: (params)=>{
              switch(params.data[2]){
                case 'A':
                  return '#641E16'
                case 'T':
                  return '#1B2631'
                case 'C':
                  return '#784212'
                case 'G':
                  return '#0B5345'
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
        data: data
      }
    ]
  };

  // console.log(data)

  const chartRef = useRef(null)

  useEffect(()=>{
    const myChart = echarts.init(chartRef.current)
    myChart.setOption(option)
  })

  const style = {width:'1600px', height:'1200px', backgroundColor: '#fff'}
  return (
    <div ref={chartRef} style={style}>
    </div>

  )
}

