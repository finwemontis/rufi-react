import React, { useState } from 'react'



export default function Tools() {

  const [ n, setN ] = useState(0)
  const handleOnClick = () => {
    setN(1)
    console.log('n:', n)
    // 第一次点击 打印出的n的值是0
  } 
  

  return (
    <div onClick={handleOnClick}>{n}</div>
  )
}
