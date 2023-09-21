import React from 'react'
import { Radio, Typography } from 'antd'

export default function Standardization() {



  return (
    <>
      <Typography.Title level={3} style={{margin: 5}}>Method of data normalization:</Typography.Title>
      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="a">min-max normalization</Radio.Button>
        <Radio.Button value="b">Z-score normalization</Radio.Button>
      </Radio.Group>
      <Radio.Group
        style={{
          marginTop: 16,
        }}
        ></Radio.Group>
    </>
  )
}
