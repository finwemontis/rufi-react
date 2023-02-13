import React, { useEffect, useState } from 'react'
import PubSub from 'pubsub-js'
import { Col, Row, Space } from 'antd'
import TopText from '../../components/TopText'
import FormHeatmap from './FormHeatmap'
import accessionInfo from '../../resource/144_from_zhaoyan'
// import Test from './Test'



const text = {
  title: 'Express Matrix',
  subTitle: 'search transcriptome data in rifu pan genome',
  content: 'some random content lalalalalala lalll asdfsaaa dfadsf a dgwegwgh rskbslk '
}

const requestInfo = {
  url: '/expressmatrix',
  // url: '/variation',
  pubName: 'heatmapData'
}

export default function ExpressMatrix() {

  const [ set, setSet ] = useState({})

  let subToken = PubSub.subscribe('heatmapData', (msg, data)=>{
    console.log('this is data from server:');
    console.log('msg:', msg, 'data:', data, 'type:', typeof(data))
    setSet(data)
  })
  
  useEffect(()=>{
    return(()=>{
      PubSub.unsubscribe(subToken)
    })
  })

  console.log('this is heatmap');
  // console.log(accessionInfo);

  // accessionInfo.forEach((item)=>{
  //   if (item.newGroup === 'Os.indica'){
  //     console.log('item', item)
  //   }
  // })

  return (
      <Space direction="vertical" style={{display: 'flex'}} size="middle">
        <Row>
          <TopText text={text}></TopText>
        </Row>
        <FormHeatmap {...requestInfo}></FormHeatmap>
        {/* <Test></Test> */}
        

    </Space>
  )
}
