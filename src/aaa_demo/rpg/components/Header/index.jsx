import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className='header'>一个图片吧大概<br></br>再来一行<br></br>再来一行 对差不多这么宽</div>
        <Navbar></Navbar>
      </div>
    )
  }
}
