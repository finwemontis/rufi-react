import React, { useEffect, useState } from 'react'
import PubSub from 'pubsub-js'
import { Col, Row, Space } from 'antd'
import TopText from '../../components/TopText'
import InputBox from '../../components/InputBox'
import VarTable from '../../components/VarTable/VarTable'
import Gene from '../../components/VarTable/Gene'
import Gwas from '../../components/Gwas'
// import EqtlChart from '../../components/eqtlChart/eqtlChart'

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

  const [ snp, setSnp ] = useState({})
  const [ indel, setIndel ] = useState({})
  const [ sv, setSv ] = useState({})
  const [ gff, setGff ] = useState({})
  const [ gwasDel, setGwasDel ] = useState({})
  const [ gwasSnp, setGwasSnp ] = useState({})
  // const [ eqtlDelRoot, setEqtlDelRoot ] = useState({})
  // const [ eqtlDelLeaf, setEqtlDelLeaf ] = useState({})
  // const [ eqtlDelFringe, setEqtlDelFringe ] = useState({})
  // const [ eqtlDelSeedling, setEqtlDelSeedling ] = useState({})
  const [ first, setFirst ] = useState(true)

  let subToken = PubSub.subscribe('varData', (msg, data)=>{
    console.log('this is conponent variations');
    console.log('msg:', msg, 'data:', data, 'type:', typeof(data))
    setSnp(data.snp)
    setIndel(data.indel)
    setSv(data.sv)
    setGff(data.gff)
    setGwasDel(data.gwasDel)
    setGwasSnp(data.gwasSnp)
    // setEqtlDelRoot(data.eqtlDelRoot)
    // setEqtlDelFringe(data.eqtlDelFringe)
    // setEqtlDelLeaf(data.eqtlDelLeaf)
    // setEqtlDelSeedling(data.eqtlDelSeedling)
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
          <VarTable {...snp}></VarTable>
        </Col>
      </Row>
      {
        first ? <div>hello, {first} varchart</div> : <Gene gff={gff} snp={snp} indel={indel} sv={sv} ></Gene>
      }
      {
        first ? <div>hello, {first} gwas</div> : <Gwas gwasDel={gwasDel} gwasSnp={gwasSnp} ></Gwas>
      }
      {
        // first ? <div>hello, {first} eqlt del fringe</div> : <EqtlChart eqtlDel={eqtlDelFringe} ></EqtlChart>
      }
      {
        // first ? <div>hello, {first} eqlt del leaf</div> : <EqtlChart eqtlDel={eqtlDelLeaf} ></EqtlChart>
      }
      {
        // first ? <div>hello, {first} eqlt del root</div> : <EqtlChart eqtlDel={eqtlDelRoot} ></EqtlChart>
      }
      {
        // first ? <div>hello, {first} eqlt del seedling</div> : <EqtlChart eqtlDel={eqtlDelSeedling} ></EqtlChart>
      }
    </Space>
  )
}
