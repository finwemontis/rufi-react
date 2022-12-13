import React, {  } from 'react'
import { Col, Typography } from 'antd'
const { Text } = Typography

export default function TopText(props) {
  const { title, subTitle, content } = props.text
  return (
    <Col span={22} offset={1} style={{'backgroundColor': 'orange'}}>
      <Typography.Title level={3} style={{margin: 15}}>{title}</Typography.Title>
      <Typography.Title level={4} style={{margin: 15}}>{subTitle}</Typography.Title>
      <Text style={{margin: 15}}>{content}</Text>
    </Col>  
  )
}
