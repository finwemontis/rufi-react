import React, { useState } from 'react'
import PubSub from 'pubsub-js'
import { Col, Row, Space } from 'antd'
import TopText from '../components/TopText'
import InputBox from '../components/InputBox'

export default function Variations() {

  const text = {
    title: 'Variations',
    subTitle: 'search variations in rifu pan genome',
    content: 'some random content lalalalalala lalll asdfsaaa dfadsf a dgwegwgh rskbslk '
  }

  const [isFirst, setIsFirst] = useState(true)
  const [idLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState('')
  const [dataset, setDataset] = useState({})

  let subToken = PubSub.subscribe('varData', (msg, data)=>{
    console.log('msg:', msg, 'data:', data)
  })
  
  return (
    <Space direction="vertical" style={{display: 'flex'}} size="middle">
      <Row>
        <TopText text={text}></TopText>
      </Row>
      <Row>
        <Col span={20} align='middle'>
          <InputBox></InputBox>
        </Col>
        <Col span={24} offset={5}>
          
        </Col>
      </Row>
        
    </Space>
  )
}
