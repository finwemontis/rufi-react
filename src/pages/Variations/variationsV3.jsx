import React, { useEffect, useState, Suspense } from 'react'
import PubSub from 'pubsub-js'
import { Col, Row, Space } from 'antd'
import TopText from '../../components/TopText'
import InputBox from '../../components/InputBox'
// import VarTable from '../../components/VarTable/VarTable'
import VarTable from '../../components/VarTable/VarTableV3'
import Loading from '../../components/Loading'
import ChartBeforeLoad from '../../components/FirstLoad/ChartBeforeLoad'
// import Gene from '../../components/VarTable/GeneV3Group281'
const VariationChart = React.lazy(()=>import('../../components/VarTable/GeneV3'))

export default function Variations() {

  const text = {
    title: 'Variations 148 rufi',
    subTitle: 'search variations in rifu pan genome',
    content: 'sh4: chr4 34231186	34233373  4000  sd1: chr1 38382466 38385208'
  }

  const requestInfo = {
    url: '/variationV3',
    pubName: 'varData'
  }

  const [ snp, setSnp ] = useState({})
  const [ ins, setIns ] = useState({})
  const [ del, setDel ] = useState({})
  const [ gff, setGff ] = useState({})
  const [ start, setStart ] = useState(0)
  const [ end, setEnd ] = useState(0)
  const [ first, setFirst ] = useState(true)

  let subToken = PubSub.subscribe('varData', (msg, data)=>{
    console.log('this is conponent variations v3', data);
    setSnp(data.snp)
    setIns(data.ins)
    setDel(data.del)
    setGff(data.gff)
    setStart(data.start)
    setEnd(data.end)
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
  // console.log('start', start, 'end', end);
  // console.log('data of v3', snp)

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
          <VarTable {...snp}></VarTable>
        </Col>
      </Row>
      <Suspense fallback={<Loading></Loading>}>
        {
          first ? <ChartBeforeLoad></ChartBeforeLoad> : <VariationChart gff={gff} snp={snp} ins={ins} del={del} start={start} end={end} ></VariationChart>
          // first ? <div>hello, {first} varchart</div> : <Gene gff={gff} snp={snp} start={start} end={end} ></Gene>
        }
      </Suspense>
      
    </Space>
  )
}
