import React, { Component } from 'react'
import axios from 'axios'
import './Hello.css'

export default class Hello extends Component {
  state = {'id':'', 'name':'', 'identity':''}
  
  componentDidMount(){
    console.log('did')
    axios.get('http://healingchurch.com:8000/jbrowse').then((result)=>{
      if(result.status === 200){
        console.log(result.status)
        console.log(result.statusText)
        console.log(result.data)
        this.setState(result.data)
      }
    })
    .catch((error)=>{
      console.log(error);
    })
    .then(()=>{
      console.log('default. this will run no matter what')
    })
  }
    
  render() {
    return (
      <div>
        <p className="text">Hello! I'm a nice {this.state.identity}, meow! My name is {this.state.name}, meow!</p>
      </div>
    )
  }
}
