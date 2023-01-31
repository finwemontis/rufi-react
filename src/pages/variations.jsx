import React, { useEffect, useState } from 'react'
import PubSub from 'pubsub-js'
import { Col, Row, Space } from 'antd'
import TopText from '../components/TopText'
import InputBox from '../components/InputBox'
import VarTable from '../components/VarTable/VarTable'

export default function Variations() {

  const text = {
    title: 'Variations',
    subTitle: 'search variations in rifu pan genome',
    content: 'some random content lalalalalala lalll asdfsaaa dfadsf a dgwegwgh rskbslk 此处测试数据要用g'
  }

  const requestInfo = {
    url: '/variation',
    pubName: 'varData'
  }

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



  return (
    <Space direction="vertical" style={{display: 'flex'}} size="middle">
      <Row>
        <TopText text={text}></TopText>
      </Row>
      <Row>
        <Col span={20} align='middle'>
          <InputBox {...requestInfo}></InputBox>
        </Col>
        <Col span={22} offset={1}>
          <VarTable {...set}></VarTable>
        </Col>
      </Row>
        

    </Space>
  )
}
