import React, { useState } from 'react'
import { Form, Input, Checkbox, Button, Divider, Col, Row } from 'antd'

const { TextArea } = Input

export default function FormHeatmap() {

  const onFinish = (values) => {
    console.log('heatmap Success:', values);
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };

  return (
      <>
        <Divider></Divider>
        <Row>
          <Col offset={3}>
          </Col>
          <Form
            name='heatmap'
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            {...formItemLayout}
          >

            <Form.Item name="tissue" label="Tissue"
              rules={[
                {
                  required: true,
                  message: 'Please choose at least one tissue!',
                },
              ]}
              onChange={(value)=>{console.log('form item of abc:', value.currentTarget)}}
            >
              <Checkbox.Group onChange={(checked) => {console.log('checked:', checked);}}>
                <Row>
                  <Col span={6}>
                    <Checkbox
                      value="fringe"
                      style={{
                        lineHeight: '32px',
                      }}
                    >
                      fringe
                    </Checkbox>
                  </Col>
                  <Col span={6}>
                    <Checkbox
                      value="leaf"
                      style={{
                        lineHeight: '32px',
                      }}
                      // disabled
                    >
                      leaf
                    </Checkbox>
                  </Col>
                  <Col span={6}>
                    <Checkbox
                      value="root"
                      style={{
                        lineHeight: '32px',
                      }}
                    >
                      root
                    </Checkbox>
                  </Col>
                  <Col span={6}>
                    <Checkbox
                      value="seedling"
                      style={{
                        lineHeight: '32px',
                      }}
                    >
                      seedling
                    </Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Form.Item>


            <Form.Item
              label="Gene set"
              name="geneSet"
              rules={[
                {
                  required: true,
                  message: 'Please input a variation!',
                },
              ]}
            >
              <TextArea 
                allowClear 
                maxLength={900} 
                style={{width:'800px', height:'300px'}}
                initialvalue={"Os01t0101900-00\nOs01t0101850-00\nOs01t0101800-01\nOs01t0101700-00\nOs01t0101600-01\nOs01t0101300-01\nOs01t0101200-01\nOs01t0101150-00"}
              >
              </TextArea>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>

          </Form>

        </Row>
        <Divider></Divider>
      </>
  )
}
