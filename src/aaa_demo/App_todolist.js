// 创建外壳组件 
// 这不属于解构赋值 是ES6的另一种引入方式 可以引入分别暴露和统一暴露的东西 花括号里面是分别暴露的类
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Footer from './components/TodoList/Footer'
import Header from './components/TodoList/Header'
import List from './components/TodoList/List'
import './App.css'

export default class App extends Component{

  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  // 把子组件使用的状态放在共同的父组件里 叫做状态提升
  state = {todos:[
    {id: '001', name:'combing hair', done:true},
    {id: '002', name:'having breakfast', done:true},
    {id: '003', name:'scratching the sofa', done:false},
  ]}

  // 状态在哪里 操作状态的方法就在哪里 
  // 子组件把数据传递给父组件 父组件给子组件一个props
  addTodo = (todoObj)=>{
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos:newTodos})
    console.log(this.state);
  }

  // 改变勾选的选项的状态
  updateTodo = (id, done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id) return {...todoObj, done:done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    this.setState({todos:newTodos})
  }

  // 全选 传入一个参数done 判断是全选还是全不选 依据checkbox是勾还是不勾
  checkAllTodo = (done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      // return {...todoObj, done:done}  //两个done重名 可以简写
      return {...todoObj, done}
    })
    this.setState({todos:newTodos})
  }

  //清除所有已完成 
  clearAllDone = ()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }

  render(){
    const {todos} = this.state
    console.log('finished')
    return(
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo}></Header>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}></Footer>
        </div>
      </div>
  )
 }
}

// 暴露App组件 或者也可以像上面那样简写
// export default App