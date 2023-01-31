import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

  // 添加一个新的todo
  // 绑定和取值的节点是同一个 用事件对象 不用refs
  handleKeyUp = (event)=>{
    const {key, target} = event
    if(key !== 'Enter') return
    if(target.value.trim() === ''){
      alert('input coundn\'t be empty!')
      return
    }
    // 用uuid来生成全世界唯一的标识作为id 使用同样生成uuid的比较小的库nanoid
    const todoObj = {id:nanoid(), name:target.value, done:false}
    // 将输入框输入的值放在todoObj里面 传递给App
    this.props.addTodo(todoObj)
    // 清空输入
    target.value = ''
  }

  render() {
    return (
      <div className='todo-header'>
        <input onKeyUp={this.handleKeyUp} type={'text'} placeholder='input your mission, press ENTER to confirm'></input>
      </div>
    )
  }
}