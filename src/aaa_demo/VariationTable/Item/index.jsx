import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  render() {
    const oneVarObj = this.props
    // console.log('item', oneVarObj, typeof(oneVarObj))
    return (
      <tr>
        <td><input type="checkbox"/></td>
        {
          Object.values(oneVarObj).map((value, index)=>{
            // 这里肯定有更好的写法吧 这什么玩意
            if(value === 'R'){
              return <td key={index} className='isR'>{value}</td>
            } else if(value === 'X'){
              return <td key={index} className='isX'>{value}</td>
            } else {
              return <td key={index} className='notR'>{value}</td>
            }
          })
        }
      </tr>
    )
  }
}
