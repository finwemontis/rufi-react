import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  TransformComponent,
  DatasetComponent,
} from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'


export default function HeatmapChart(set) {

  const { title_text, tissue, ref, data } = set

  const chartRef = useRef(null)  
  echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
  ]);

  useEffect(()=>{
    let barChart = echarts.init(chartRef.current)
    const option = {
      title: {
        text: title_text,
        textStyle: {fontSize:26},  
        left: '25%',
        top: '3%'
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
        data: tissue,
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
            // show: true
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    barChart.setOption(option)
  }, [])

  return (
    <div ref={chartRef} style={{height:'1000px'}}></div>
  )
}
