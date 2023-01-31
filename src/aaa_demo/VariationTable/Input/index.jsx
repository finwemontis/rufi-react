import React, { Component } from 'react'
import './index.css'

export default class Input extends Component {

  getInput = (event)=>{
    const {key, target} = event
    if(key !== 'Enter') return
    if(target.value.trim() === ''){
      alert('input coundn\'t be empty!')
      return
    }
    // console.log(target.value);
    this.props.searchId(target.value)
  }

  render() {
    return (
      <div className='search'>
        <p>os01g0883800</p>
        <p>os01g0105900</p>
        <p>os01g0100200</p>
        <input type={'text'} onKeyUp={this.getInput} placeholder="input gene id or coordinate range"></input>
      </div>
    )
  }
}

