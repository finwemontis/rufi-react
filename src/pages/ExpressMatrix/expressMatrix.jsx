import React, { useEffect, useState } from 'react'
import PubSub from 'pubsub-js'
import { Col, Row, Space } from 'antd'
import TopText from '../../components/TopText'
import FormHeatmap from './FormHeatmap'
import Test from './Test'



const text = {
  title: 'Express Matrix',
  subTitle: 'search transcriptome data in rifu pan genome',
  content: 'some random content lalalalalala lalll asdfsaaa dfadsf a dgwegwgh rskbslk '
}

const requestInfo = {
  url: '/expressmatrix',
  pubName: 'heatmapData'
}

export default function ExpressMatrix() {

  const [ set, setSet ] = useState({})

  let subToken = PubSub.subscribe('varData', (msg, data)=>{
    console.log('this is conponent variations');
    console.log('msg:', msg, 'data:', data, 'type:', typeof(data))
    setSet(data)
  })
  
  useEffect(()=>{
    return(()=>{
      PubSub.unsubscribe(subToken)
    })
  })

  console.log('this is heatmap');

  return (
      <Space direction="vertical" style={{display: 'flex'}} size="middle">
        <Row>
          <TopText text={text}></TopText>
        </Row>
        <FormHeatmap></FormHeatmap>
        <Test></Test>
        

    </Space>
  )
}
