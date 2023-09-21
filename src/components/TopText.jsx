import React, {  } from 'react'
import { Col, Typography } from 'antd'
const { Text } = Typography

export default function TopText(props) {
  const { title, subTitle, content } = props.text
  return (
    <Col span={22} offset={1} style={{'backgroundColor': '#0E6655', 'color':'white'}}>
      <Typography.Title level={3} style={{margin: 15, color: 'white'}}>{title}</Typography.Title>
      <Typography.Title level={4} style={{margin: 15, color: 'white'}}>{subTitle}</Typography.Title>
      <Text style={{margin: 15, color: 'white'}}>{content}</Text>
    </Col>  
  )
}


// option = {
//   tooltip: {
//     trigger: 'item'
//   },
//   // legend: {
//   //   top: '5%',
//   //   left: 'center'
//   // },
//   series: [
//     {
//       name: 'Access From',
//       type: 'pie',
//       radius: ['40%', '70%'],
//       avoidLabelOverlap: false,
//       itemStyle: {
//         borderRadius: 10,
//         borderColor: '#fff',
//         borderWidth: 2
//       },
//       label: {
//         show: true,
//         // position: 'center'
//       },
//       emphasis: {
//         label: {
//           show: true,
//           fontSize: 40,
//           fontWeight: 'bold'
//         }
//       },
//       labelLine: {
//         show: true
//       },
//       data: [
//         { value: 720, name: 'JavaScript' },
//         { value: 4426, name: 'JSON' },
//         { value: 9757, name: 'JavaScript React' },
//         { value: 1402, name: 'PHP' },
//         { value: 4, name: 'CSS' }
//       ]
//     }
//   ]
// };