import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink activeClassName='activeStyle' {...this.props}></NavLink>
    )
  }
}

// 封装MyNavLink
// children: 组件标签体内容
// const {to, children} = this.props
// props接收到的标签体内容会自动被展开运算符放到标签体里面
// 也就是说 <NavLink to="/Home" children="Home"/>完全等价于<NavLink to="/Home">Home</NavLink>
