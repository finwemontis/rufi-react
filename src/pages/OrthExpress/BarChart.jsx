import React, { useEffect, useState } from 'react'
import PubSub from 'pubsub-js'
import Charts from '../../components/Charts'


export default function BarChart() {

  const [set, setSet] = useState({})

  let subToken = PubSub.subscribe('barChartSet', (msg, data)=>{
    setSet(data)
  })

  useEffect(()=>{
    return(()=>{
      PubSub.unsubscribe(subToken)
    })
  })

  const style = {width: '1850px', height:'600px', backgroundColor:'white'}
  const { ref, xAxis, fringe, leaf, root, seedling } = set
  const option = {
    title: {
      text: ref,
      textStyle: {fontSize:24},
      // 标题位置
      left: "38%",
      top: "3%",
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
    tooltip: {},
    legend: {
      top: "10%",
      left: "70%"
    },
    grid: {
      left: 50,
      bottom: 50,
      height: "450px"
    },
    xAxis: {
      name: "accessions",
      nameTextStyle: {
        fontSize: 18
      },
      data: xAxis,
      axisLabel: {
        rotate: 60
      }
    },
    yAxis: {
      name: "TPM",
      nameTextStyle: {
        fontSize: 16
      },
    },
    series: [{
      name: 'Fringe',
      type: 'bar',
      // color: "#",
      data: fringe
    },
    {
      name: 'leaf',
      type: 'bar',
      color: "#3ba272",
      data: leaf
    },  
    {
      name: 'root',
      type: 'bar',
      // color: "#9a60b4",
      data: root
    },  
    {
      name: 'seedling',
      type: 'bar',
      // color: "#73c0de",
      data: seedling
    }]
  }
  console.log('消息订阅拿到了set content:', set.ref);
  // 应该是消息订阅到了之后再次渲染一下 可以 我大概明白了
  return(
    <Charts option={option} style={style}></Charts>
  )
}
