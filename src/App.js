import React, {  } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from 'antd'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Jbrowse from './pages/Jbrowse/jbrowse'
import Variations from './pages/Variations/variations.jsx'
import OrthExpress from './pages/OrthExpress/orthExpress'
import OrthSeq from './pages/orthSeq'
import ExpressMatrix from './pages/ExpressMatrix/expressMatrix'
import Tools from './pages/tools'
import Download from './pages/download'
import Introduction from './pages/introduction'

// 懒加载
// const Hello = lazy(()=>{import('./components/Hello/Hello')})

export default function App() {
  return (
    <>
      <Layout>
        <Navbar></Navbar>
          <div className='main' style={{'height':'500px'}}>
            <Routes>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/jbrowse' element={<Jbrowse />}></Route>
              <Route path='/variations' element={<Variations />}></Route>
              <Route path='/orthExpress' element={<OrthExpress />}></Route>
              <Route path='/orthseq' element={<OrthSeq />}></Route>
              <Route path='/expressMatrix' element={<ExpressMatrix />}></Route>
              <Route path='/tools' element={<Tools />}></Route>
              <Route path='/download' element={<Download />}></Route>
              <Route path='/introduction' element={<Introduction />}></Route>
              <Route path='/' element={<Navigate to={'/home'} />}></Route>
            </Routes>
          </div>
          <Footer></Footer>
      </Layout>
    </>
    
  )
}