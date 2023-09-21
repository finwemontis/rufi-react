import React from 'react'
import { Divider, Col, Row, Space, Typography } from 'antd'
import TopText from '../../components/TopText'
import ColComponent from './ColComponent'
import filesVcf from './filesVcf'
import filesFasta from './filesFasta'
const { Text } = Typography


export default function Download() {


  const text = {
    title: 'Data Download',
    subTitle: 'There are many data you can download!',
    content: 'sh4: chr4 34231186	34233373  4000  sd1: chr1 38382466 38385208    '
  }

  return (
    <Space direction="vertical" style={{display: 'flex'}} size="middle">
      <TopText text={text}></TopText>
      <Divider></Divider>
      
      <Row>
        <Col offset={1}>
          <Typography.Title level={4} style={{margin: 15, color: '#0E6655'}}>All variations in rufipogon pangenome(148 accessions):</Typography.Title>
        </Col>
      </Row>
      <Row justify="space-evenly">
        {
          filesVcf.map((item, index)=>{
            console.log(item.filename, item.url, index)
            // console.log(index);
            return (<Col span={4}>
                      <a href={item.url} style={{color:'#0E6655'}}>{item.filename}</a>
                    </Col>)
          })
        }
      </Row>

      <Row>
        <Col offset={1}>
          <Typography.Title level={4} style={{margin: 15, color: '#0E6655'}}>Genomes:</Typography.Title>
        </Col>
      </Row>
      <Row>
        {
          filesFasta.map((item, index)=>{
            console.log(item.filename, item.url, index)
            // console.log(index);
            return (<Col span={4}>
                      <a href={item.url} style={{color:'#0E6655'}}>{item.filename}</a>
                    </Col>)
          })
        }
      </Row>
      
    </Space>
  )
}
