import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'

export default class Ortholog extends Component {
  render() {
    return (
      <div>
        <div>This is Ortholog.</div>
        <ul>
          <li>
            <MyNavLink to={"/ortholog/news"}>News</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/ortholog/message"}>Message</MyNavLink>
          </li>
        </ul>

        {/* 注册路由 */}
        <Switch>
          <Route path={"/ortholog/news"} component={News}></Route>
          <Route path={"/ortholog/message"} component={Message}></Route>
          <Redirect to="/ortholog/news"/>
        </Switch>
      </div>
    )
  }
}
