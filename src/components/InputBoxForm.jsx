import React, { useEffect, useRef } from 'react';
import PubSub from 'pubsub-js';
import { Form, Input, Select, Space } from 'antd';
import { request } from './Request';
const { Search } = Input;


// 联系后端应该在这里写吗 不管了先写着
function MyInput(msg){
  const { url, pubName } = msg
  const input = useRef(null)

  useEffect(()=>{

  }, [])

  function onSearch(param){
    if (param){
      request.get(url, {params: {param}}).then((result)=>{
      if(result.status === 200){
        PubSub.publish(pubName, result.data)
      }
    })
    console.log('input.value:', input.current.input.value)
    } else if (!param) {
      console.log('input cant be empty');
    }
    
  }

  function handleChange(value){
    console.log(`selected ${value}`);
  }

  return(
    <Space direction="vertical">

    <Form>
      <Form.Item
        label="GeneInfo"
        name="geneInfo"
      >
        <Search
          ref={input}
          onSearch={onSearch}
          placeholder="Os01g0883800 or chr1 300000 350000"
          allowClear
          enterButton="Search"
          size="large"
          maxLength={500}
          style={{
            width: 500
          }}
        />
      </Form.Item>

      <Form.Item>
        <Select
          defaultValue="lucy"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: 'group148',
              label: 'group148',
            },
            {
              value: 'group281',
              label: 'group281',
            },
            {
              value: 'group66',
              label: 'group66',
            },
          ]}
        />
      </Form.Item>

    </Form>

      
  </Space>
  )
}
  

export default MyInput;