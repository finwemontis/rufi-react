import React, { useEffect, useState } from 'react'
import PubSub from 'pubsub-js'
import { Col, Row, Space } from 'antd'
import TopText from '../../components/TopText'
import InputBox from '../../components/InputBox'
import VarTable from '../../components/VarTable/VarTable'
import VarChart from '../../components/VarChart'

export default function Variations() {

  const text = {
    title: 'Variations',
    subTitle: 'search variations in rifu pan genome',
    content: 'some random content lalalalalala lalll asdfsaaa dfadsf a dgwegwgh rskbslk os01g0883800'
  }

  const requestInfo = {
    url: '/variation',
    // url: '/expressmatrix',
    pubName: 'varData'
  }

  const [ varSet, setVarSet ] = useState({})
  const [ gff, setGff ] = useState({})
  const [ first, setFirst ] = useState(true)

  let subToken = PubSub.subscribe('varData', (msg, data)=>{
    console.log('this is conponent variations');
    console.log('msg:', msg, 'data:', data, 'type:', typeof(data))
    setGff(data.gff)
    setVarSet(data.vars)
    if (first){
      setFirst(false)
    }
  })
  
  useEffect(()=>{
    return(()=>{
      PubSub.unsubscribe(subToken)
    })
  })

  console.log("first", first);


  // console.log('set', varSet);

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
          <VarTable {...varSet}></VarTable>
        </Col>
      </Row>
      {
        first ? <div>hello, {first} first</div> : <VarChart gff={gff} varSet={varSet}></VarChart>
      }
        

    </Space>
  )
}
