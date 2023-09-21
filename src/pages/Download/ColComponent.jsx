import React from "react";
import { Col } from 'antd'

export default function ColComponent(url, text) {
  return (
    <Col span={4}>
      <a href={url} style={{color:'#0E6655'}}>{text}</a>
    </Col>
  )
}