import React from 'react'
import Charts from './Charts'

export default function VarChart(set) {

  const { gff, varSet } = set
  const allVariations = []

  // function doVarSet(varSet) {
  //   let data = []
  //   varSet.forEach((element) => {
  //     data.push([element[0], element[1], element[2]])
  //   })
  //   return data
  // }

  // 一个散点图和自定义类型
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

  const style = { height: '1000px', weight: '1200px' }

  return (
    // <Charts option={option} style={style}></Charts>
    <div>Charts</div>
  )
}
