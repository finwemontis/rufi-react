import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts'

// 通用图表组件
export default function Charts(content) {
  const { option, style } = content
  const chartRef = useRef(null)
  let chartInstance = null

  function renderChart(){
    try{
      // const renderInstance = echarts.getInstanceByDom(chartRef.current)
      // if (renderInstance){
        // chartInstance = renderInstance
      // } else {
        chartInstance = echarts.init(chartRef.current) 
      // }
      chartInstance.setOption(option)
      console.log('option', option)
      console.log('charts.js被调用了');


      // 
    } catch(e) {
      console.log('error from Charts:', e.message);
      chartInstance && chartInstance.dispose()
    }
  }

  useEffect(()=>{
    renderChart()
    return ()=>{
      chartInstance && chartInstance.dispose()
    }
  }, [])

  return (
    <div ref={chartRef} style={style}>Charts</div>
  )
}
