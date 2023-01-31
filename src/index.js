// 引入核心库和ReactDOM
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider} from 'antd'
// import { BrowserRouter } from 'react-router-dom'
// 引入App组件 .js和.jsx后缀可省略
import App from './App'

// 渲染App组件到DOM
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ConfigProvider theme={{
              token: {
                colorPrimary: 'rgb(4, 119, 104)'
              },
              components: {
                // 各个组件的颜色样式
                Button: {
                  borderRadius: 2,
                  fontSize: 16
                }
              }
            }}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<App></App>}></Route>
                <Route path='/*' element={<App></App>}></Route>
              </Routes>
            </BrowserRouter>
            </ConfigProvider>
            )