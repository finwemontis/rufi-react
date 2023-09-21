import React from "react";
import { LoadingOutlined }  from '@ant-design/icons';
import { Space } from "antd";

export default function Loading(){
 return(
  <Space>
    <LoadingOutlined rotate={160}/>
  </Space>
 )
}