import React, { useState } from 'react'
import { Form, Input, Checkbox, Select, Button, Divider, Space, Col, Row } from 'antd'
import PubSub from 'pubsub-js'
import { request } from '../../components/Request'
import options from './options'

const { TextArea } = Input

export default function FormHeatmap(msg) {

  const { url, pubName } = msg

  // 表单的回调
  const onFinish = (values) => {
    console.log('heatmap Success:', values);
    if (values){
      request.get(url, {params: {values}}).then((result)=>{
        if(result.status === 200){
          PubSub.publish(pubName, result.data)
        }
      })
      
    } else if (!values) {
      console.log('input cant be empty');
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  // 表单样式
  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };

  // accessions选择的回调
  const handleChange = (value) => {
    console.log(`selected ${value}`);
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
              variations: ['W1943', "W2064", 'GP100'],
              // variations: ['W1943'],
              geneSet: ['Os01t0883800', 'Os02t0244100', 'Os03t0407400', 
                        'Os07t0261200', 'Os01t0197700', 'Os04t0413500',
                        'Os01t0109300-02', 'Os01t0110050-01', 'Os01t0111500-01',
                        'Os01t0112100-01', 'Os01t0112600-01', 'Os01t0512800-00',
                        'Os01t0518800-01', 'Os01t0531300-00', 'Os01t0550800-01',
                        'Os01t0552050-00', 'Os01t0558200-01', 'Os05t0295700-01',
                        'Os06t0695300-01', 'Os06t0695500-01', 'Os06t0704000-01',
                        'Os07t0654900', 'Os07t0655600', 'Os07t0658300',
                        'Os07t0674800', 'Os07t0676600', 'Os03t0666700',
                        'Os03t0667400', 'Os01t0894075', 'Os08t0545900',
                        'Os08t0546467', 'Os08t0547100', 'Os12t0265201'
            ]
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

            {/* ........... */}
            <Form.Item name="variations" label="Variations"
              rules={[
                {
                  required: true,
                  message: 'Please choose at least one variation!',
                },
              ]}
              onChange={(value)=>{console.log('form item of abc:', value.currentTarget)}}
            >
              <Select
                mode="multiple"
                allowClear
                style={{
                  width: '100%',
                }}
                placeholder="Please select"
                onChange={handleChange}
                options={options}
              />
              
            </Form.Item>
            {/* ........... */}


            <Form.Item
              label="Gene set"
              name="geneSet"
              rules={[
                {
                  required: true,
                  message: 'Please input a gene set!',
                },
              ]}
            >
              <TextArea 
                allowClear 
                maxLength={2000} 
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

// p = '149_CDS_pa/(.*)[\.all]{0,1}?\.evm\.out_nucleus\.cds'
// l = []
// for i in s:
//     st = re.findall(p, i)[0]
//     st = st.replace('.all', '')
//     l.append(st)
