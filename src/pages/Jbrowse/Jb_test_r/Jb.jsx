import React from 'react'
import '@fontsource/roboto'
import {
  createViewState,
  JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view'
import assembly from './assembly'
import tracks from './tracks'

const viewState = createViewState({
      assembly,
      tracks,
      location: '1:100,987,269..100,987,368',
      // defaultSession,
    })

export default function Jb() {

  // buffer怎么办呢

  // const [viewState, setViewState] = useState({})

  // useEffect(() => {
  //   const state = createViewState({
  //     assembly,
  //     tracks,
  //     location: '1:100,987,269..100,987,368',
  //     // defaultSession,
  //   })
  //   setViewState(state)
  //   console.log('state:', state);  //值是正常的
  //   console.log('hiiiiiiiiiiiiiiiiiiiii')
  //   console.log('viewState:', viewState)
  // }, [])

  return(
    <>
      <JBrowseLinearGenomeView viewState={viewState} />
    </>

    // <div>jb......</div>  // 第一次渲染这个组件之后的状态是初始的状态也就是undefined 所以随后的调用都是undefined 这什么天才写的代码啊 
    // 可不可以不用useEffect和状态
    
  )
}