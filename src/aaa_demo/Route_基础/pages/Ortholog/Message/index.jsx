import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

  state = {
    messageArr : [
      {id: '1', title: 'msg1'},
      {id: '2', title: 'msg2'},
      {id: '3', title: 'msg3'},
    ]
  }

  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((msgObj)=>{
              return(
                <li key={msgObj.id}>
                  {/* 向路由组件中传递params参数 使用类似ajax的params传参方法 为了在字符串里面嵌入表达式 使用模板字符串 */}
                  {/* 模板字符串中混入js的写法: ${} */}
                  <Link to={`/ortholog/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                  {/* 替换模式 无痕浏览 */}
                  {/* <Link replace={true} to={`/ortholog/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                  {/* 传递search参数 detail后面写不写斜杠呢*/}
                  {/* <Link to={`/ortholog/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
                </li>
              )
            })
          }
        </ul>
        <hr></hr>
        {/* 声明接收params参数*/}
        <Route path={"/ortholog/message/detail/:id/:title"} component={Detail}></Route>
        {/* search参数不需要声明接收 */}
        {/* <Route path={"/ortholog/message/detail"} component={Detail}></Route> */}
      </div>
    )
  }
}
