import React, { useEffect, useState, Suspense } from 'react'
import PubSub from 'pubsub-js'
import Loading from '../../components/Loading'
import ChartBeforeLoad from '../../components/FirstLoad/ChartBeforeLoad'
// import Charts from '../../components/Charts'

const Charts = React.lazy(()=>import('../../components/Charts'))


export default function BarChart() {

  const [set, setSet] = useState({})
  const [ first, setFirst ] = useState(true)


  let subToken = PubSub.subscribe('barChartSet', (msg, data)=>{
    setSet(data)
    setFirst(false)
  })

  useEffect(()=>{
    return(()=>{
      PubSub.unsubscribe(subToken)
    })
  })

  const style = {width: '1650px', height:'600px', backgroundColor:'orange'}
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
      left: "70%",
      textStyle: {
        fontSize: 14
      }
    },
    grid: {
      top: 100,
      left: 50,
      bottom: 50,
      right: 100
      // height: "1400px"
    },
    xAxis: {
      name: "accessions",
      // name: "",
      nameLocation: 'end',
      nameTextStyle: {
        fontSize: 14
      },
      data: xAxis,
      axisLabel: {
        rotate: 60,
        fontSize: 12
      }
    },
    yAxis: {
      name: "TPM",
      // name: "",
      position: 'top',
      nameLocation: 'end',
      nameTextStyle: {
        fontSize: 13
      },
      axisLabel: {
        // rotate: 60,
        fontSize: 12
      }
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
  return(
    <Suspense fallback={<Loading></Loading>}>
      {
        first ? <ChartBeforeLoad></ChartBeforeLoad> : <Charts option={option} style={style}></Charts>
      }
    </Suspense>
  )
}
