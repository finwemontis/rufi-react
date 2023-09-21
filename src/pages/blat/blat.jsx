import React, { useEffect, useState, Suspense } from 'react'
import PubSub from 'pubsub-js'
import InputBox from '../../components/InputBox'
import TopText from '../../components/TopText'
import FormBlat from './FormBlat'
import Loading from '../../components/Loading'
import ChartBeforeLoading from '../../components/FirstLoad/ChartBeforeLoad'
import { Divider } from 'antd'

export default function Blat() {

  const text = {
    title: 'Blat alignment tool',
    subTitle: 'Blat alignment tool for rifu pan genome',
    content: 'sh4: chr4 34231186	34233373  4000  sd1: chr1 38382466 38385208'
  }

  const requestInfo = {
    url: '/blat',
    pubName: 'blat'
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

  return (
    <>
      <TopText text={text}></TopText>
      <Divider></Divider>
      <FormBlat></FormBlat>
      <Suspense fallback={<Loading></Loading>}>
          {
            first ? <ChartBeforeLoading></ChartBeforeLoading> : <div>result</div>
            // first ? <div>hello, {first} varchart</div> : <Gene gff={gff} snp={snp} start={start} end={end} ></Gene>
          }
      </Suspense>
    </>
  )
}
