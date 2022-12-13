import React from 'react'
import { Space, Row, Col } from 'antd'
import TopText from '../../components/TopText'
import InputBox from '../../components/InputBox'

const text = {
  title: 'Bar chart',
  subTitle: 'search data in rifu pan genome',
  content: 'some random content lalalalalala lalll asdfsaaa dfadsf a dgwegwgh rskbslk '
}

export default function OrthExpress() {
  return (
    <>
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
    </>
  )
}
