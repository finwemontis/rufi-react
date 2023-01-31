import React, { Component } from 'react'
// import qs from 'qs'

const data = [
  {id: '1', name: 'Ludwig'},
  {id: '2', name: 'Laurence'},
  {id: '3', name: 'Maria'},
]

export default class Detail extends Component {
  render() {
    // 接收params参数
    const {id, title} = this.props.match.params

    // 接收search参数
    // const {search} = this.props.location
    // const {id, title} = qs.parse(search.slice(1))

    // find()方法返回数组中满足提供的测试函数的第一个元素的值 否则返回undefined
    const findResult = data.find((detailObj)=>{
      return detailObj.id === id
    })
    return (
      <ul>
        <li>id: {id}</li>
        <li>{title}</li>
        <li>name: {findResult.name}</li>
      </ul>
    )
  }
}
