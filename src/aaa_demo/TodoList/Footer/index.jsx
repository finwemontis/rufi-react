import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  // 全选checkbox的回调
  handleCheckAll = (event)=>{
    this.props.checkAllTodo(event.target.checked)
  }

  handleClearAllDone = ()=>{
    this.props.clearAllDone()
  }

  render() {
    const {todos} = this.props
    // 数组的条件统计 reduce接收两个参数 一个函数和一个initial value 箭头函数只有一句话 花括号和return可以省略
    // const doneCount = todos.reduce((pre, todo)=>{return pre + (todo.done ? 1 : 0)}, 0)
    const doneCount = todos.reduce((pre, todo)=>pre + (todo.done ? 1 : 0), 0)
    const total = todos.length
    return (
      <div className='todo-footer'>
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount===total && total !== 0 ? true : false}/>
        </label>
        <span>
          <span>completed {doneCount}</span> / all  {total}
        </span>
        <button onClick={this.handleClearAllDone} className='btn btn-danger'>clear all completed</button>
      </div>
    )
  }
}
