import { elementType } from 'prop-types';
import React from 'react'
import Charts from '../../components/Charts';

export default function Heatmap(dataset) {

  console.log('heatmap get dataset:', dataset.dataset)


  let ref = []
  // tissue: 后端来的组织的排序跟勾选顺序相关
  const tissue = Object.keys(dataset.dataset).sort()
  const aKey = Object.keys(dataset.dataset)[0]
  const aArray = dataset.dataset[aKey]
  let variations = Object.keys(aArray[0]).filter((element)=>{
    return element !== 'id' && element !== 'ref'
  })

  aArray.forEach((item)=>{
    ref.push(item.ref)
  })
  ref = ref.reverse()

  
  let xTissue = []
  for(let i=0;i<variations.length;i++){
    tissue.forEach((e)=>{
      xTissue.push(e)
    })
  }

  let data = []

  // const yMax = aArray.length
  // 为什么我写了四层for循环? 算了反正能用
  const xMax = tissue.length * variations.length
  let x = 0
  let y = 0
  ref.forEach((oneRef)=>{
    variations.forEach((oneVariation)=>{
      tissue.forEach((oneTissue)=>{
        dataset.dataset[oneTissue].forEach((element)=>{
          if(element.ref === oneRef){
            // console.log(x, y, element[oneVariation], oneRef, oneTissue, oneVariation)
            data.push([x, y, element[oneVariation]])
            // data.push([x, y, element[oneVariation], oneRef, oneTissue, oneVariation])
            if(x < xMax-1){
              x += 1
            } else {
              x = 0
              y += 1
            }
          }
        })
      })
    })
  })

  const option = {
    title: {
      text: 'heatmap',
      textStyle: {fontSize:26},  
      left: '32%',
      top: '1%'
    },
    tooltip: {
      position: 'top'
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
    // 坐标轴内绘图区域
    grid: {
      height: '50%',
      top: '10%',
      width: '52%'
    },
    xAxis: {
      type: 'category',
      data: xTissue,
      position: 'top',
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: ref,
      splitArea: {
        show: true
      }
    },
    visualMap: {
      min: 0,
      max: 1,
      calculable: true,
      // orient: 'horizontal',
      left: '68%',
      bottom: '80%',
      color: [
        '#ff6347',
        '#fffaf7'
      ]
    },
    series: [
      {
        name: 'TPM W1943',
        type: 'heatmap',
        data: data,
        label: {
          // 图上是否显示数字
          show: true
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  const style = {width: "2000px", height:"1300px"}
  return (
    <Charts option={option} style={style}></Charts>
  )
}
