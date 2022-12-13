import React from 'react';
import PubSub from 'pubsub-js';
import { Input, Space } from 'antd';
const { Search } = Input;



function MyInput (){

  function onSearch(){
    PubSub.publish('varData', {id:1, name:'Ludwig', age:23})
  }

  return(
    <Space direction="vertical">
    <Search
      placeholder="Os01g0883800 or chr1 300000 350000"
      defaultValue={"Os01g0883800"}
      allowClear
      enterButton="Search"
      size="large"
      maxLength={500}
      onSearch={onSearch}
      style={{
        width: 500
      }}
    />
  </Space>
  )
}
  

export default MyInput;