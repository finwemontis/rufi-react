import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts'

// 通用图表组件
export default function Charts(content) {
  // style: 
  const { option, style } = content
  const chartRef = useRef(null)
  let chartInstance = null

  function renderChart(){
    try{
      const renderInstance = echarts.getInstanceByDom(chartRef.current)
      if (renderInstance){
        chartInstance = renderInstance
      } else {
        chartInstance = echarts.init(chartRef.current) 
      }
      chartInstance.setOption(option)
      console.log('option', option)
      console.log('renderChart被调用了');

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
  })  //此处不要写第二个参数空数组 写了的话第一行就是didmount了

  
  return (
    <div ref={chartRef} style={style}>Charts</div>
  )
}
