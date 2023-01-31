import React, { Component } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
// import qs from 'qs'  //处理urlencoded编码的一个库
import Home from './Route_基础/pages/Home'
import Ortholog from './Route_基础/pages/Ortholog'
import Header from './Route_基础/components/Header'
import MyNavLink from './Route_基础/components/MyNavLink'

// qs的用法
// let obj = {name:'Lu', age:23}
// let str = '?name=Lu&age=23'
// console.log(qs.stringify(obj))
// console.log(qs.parse(str.slice(1)))

export default class App extends Component { 
  render() {
    return (
      <div>
        <div>
          <Header></Header>
        </div>
        {/* 1. 路由和嵌套路由 */}
        {/* 给路由组件传参 写了param参数 search和state参数没写 但是好像大家都用的是search参数! 那就也写吧 第三种不写了 state地址栏里面不显示参数 刷新也不会丢*/}
        
        {/* 原生html的做法 靠<a>跳转不同的页面 */}
        {/* <a href=''>Home</a>
        <a href=''>Ortholog</a> */}
        {/* react中靠路由链接实现切换组件 编写路由链接*/}
        <div>
          <MyNavLink to="/home">Home</MyNavLink>
          <MyNavLink to="/ortholog">Ortholog</MyNavLink>
        </div>

        {/* 注册路由 */}
        <div>
          <Switch>
            <Route path={"/home"} component={Home}></Route>
            <Route path={"/ortholog"} component={Ortholog}></Route>
            <Redirect to={"/home"}></Redirect>
          </Switch>
        </div>
        {/* 路由组件不应该放在components里面 应该放在pages里面 */}
        {/* 路由组件和普通组件的区别: 普通组件不传props就接收不到任何东西 路由组件能接收到一个对象 包括三个固定属性history location match */}
        {/* Switch作用是防止匹配多个路由 react-router-dom v6中是Routes */} 
        {/* 点击前端路由时没有网络请求 */}
        {/* v5默认路由匹配是模糊匹配 严格匹配加exact v6默认为严格匹配 */}

        {/* 2. 编程式路由导航 */}
        {/* "不是真要延迟跳转, 比如处理表单数据之后跳转, 获取远程接口响应之后跳转, 根本没法写按钮才需要编程式" */}
        {/* 比如找不到页面 几秒后跳转到主页 */}
        {/* 就是一段代码 执行了就会跳转路由 不写了 使用路由组件身上的replace和push方法 目前版本18依然可以用 */}
        {/* this.props.history对象上的API */}

        {/* 3. 让普通组件能像路由组件一样使用的方法是 引入withRouter()方法 */}
        {/* 于是普通组件也拥有了this.props.history等等路由组件特有的API */}

        {/* 4. BrowserRouter和HashRouter的区别 一共三点 首先是底层原理不一样 BrowserRouter使用的是H5的history API 不兼容IE9及以下版本 */}

      </div>
    )
  }
}
