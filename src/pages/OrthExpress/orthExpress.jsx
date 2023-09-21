import React, { useEffect, useState } from 'react'
import { Space, Row, Col } from 'antd'
import TopText from '../../components/TopText'
import InputBox from '../../components/InputBox'
import BarChart from './BarChart'



export default function OrthExpress() {

  const text = {
    title: 'Bar chart',
    subTitle: 'search data in rifu pan genome',
    content: 'some random content lalalalalala lalll asdfsaaa Os01t0883800'
  }
  
  const requestInfo = {
    url: '/orthexpress',
    pubName: 'barChartSet'
  }

  return (
    <>
      <Space direction="vertical" style={{display: 'flex'}} size="middle">
        <Row>
          <TopText text={text}></TopText>
        </Row>
        <Row>
          <Col span={20} align='middle'>
            <InputBox {...requestInfo}></InputBox>
          </Col>
          <Col span={23} align='middle'>
            <BarChart></BarChart>
          </Col>
        </Row>
      </Space>
    </>
  )
}
