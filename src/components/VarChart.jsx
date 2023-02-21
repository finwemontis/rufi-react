import React from 'react'
import Charts from './Charts'

export default function VarChart(gff, varSet) {

  // 为什么这里就打印了呢
  console.log('varChart get gff:', gff, "and set:", varSet)

  const allVariations = []

  // function doVarSet(varSet) {
  //   let data = []
  //   varSet.forEach((element) => {
  //     data.push([element[0], element[1], element[2]])
  //   })
  //   return data
  // }

  // 一个散点图和一个什么
  const option = {
    title: {
      text: 'variations',
      left: 'center'
    },
    toolbox: {
      show: true,
      itemSize: 19,
      right: "6%",
      feature: {
        dataZoom: {},
        restore: {},
        dataView: {
          readOnly: true
        },
        saveAsImage: {}
      }
    },
    grid: {
      show: true,
      top: 70,
      bottom: 20,
      left: 100,
      right: 20,
      backgroundColor: '#fff',
      borderWidth: 0
    },
    xAxis: {},
    yAxis: {
      data: allVariations
    },
    series: [
      {
        id: 'scatter',
        type: 'scatter',
        // data: doVarSet(varSet)
        data: []
      },
      {
        id: 'gene structure',
        type: 'custom',
      }
    ]
  }

  const style = { height: '600px', weight: '1200px' }

  return (
    // <Charts option={option} style={style}></Charts>
    <div>Charts</div>
  )
}
