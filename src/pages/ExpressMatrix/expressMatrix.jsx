import React, { useEffect, useState, lazy, Suspense } from 'react'
import PubSub from 'pubsub-js'
import { Col, Row, Space } from 'antd'
import TopText from '../../components/TopText'
import FormHeatmap from './FormHeatmap'
import Loading from '../../components/Loading'
import ChartBeforeLoad from '../../components/FirstLoad/ChartBeforeLoad'
const Heatmap = lazy(()=>import('./Heatmap'))
const Standardization = lazy(()=>import('./Standardization'))


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

  const [ first, setFirst ] = useState(true)
  const [ set, setSet ] = useState({})

  let subToken = PubSub.subscribe('heatmapData', (msg, data)=>{
    console.log('this is data from server: msg:', msg, 'data:', data, 'type:', typeof(data))
    setSet(data)
    setFirst(false)
    
  })
  
  useEffect(()=>{
    return(()=>{
      PubSub.unsubscribe(subToken)
    })
  })

  console.log('this is heatmap');

  return (
    <>
      <Row>
        <TopText text={text}></TopText>
      </Row>
      <FormHeatmap {...requestInfo}></FormHeatmap>
      <Suspense fallback={<Loading></Loading>}>
        {
          first ? <ChartBeforeLoad></ChartBeforeLoad> : (<><Standardization></Standardization><Heatmap dataset={set}></Heatmap></>)
        }
      </Suspense>
    </>
  )
}
