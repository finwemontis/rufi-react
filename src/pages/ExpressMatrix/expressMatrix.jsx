import React, { useEffect, useState, lazy, Suspense } from 'react'
import PubSub from 'pubsub-js'
import { Col, Row, Space } from 'antd'
import TopText from '../../components/TopText'
import FormHeatmap from './FormHeatmap'
const Heatmap = lazy(()=>import('./Heatmap'))


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

  const [ load, setLoad ] = useState(false)
  const [ set, setSet ] = useState({})

  let subToken = PubSub.subscribe('heatmapData', (msg, data)=>{
    console.log('this is data from server: msg:', msg, 'data:', data, 'type:', typeof(data))
    setSet(data)
    if (load){
      console.log('load is true')
    } else {
      setLoad(true)
    }
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
        <FormHeatmap {...requestInfo}></FormHeatmap>
        <Suspense fallback={<div>loading...</div>}>
          {
            load ? (<Heatmap dataset={set}></Heatmap>) : ('asd')
          }
        </Suspense>
    </Space>
  )
}
