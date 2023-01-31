import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class Table extends Component {
  render() {
    console.log('table props', this.props);
    const {variations} = this.props
    console.log('variations type', typeof(variations))
    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th className='refGene'>Ref_gene</th>
            <th>Chr</th>
            <th>Pos</th>
            <th>Ref base</th>
            <th>Variant base</th>
            <th>gene coding</th>
            <th>var type</th>
            <th>GP3</th>
            <th>GP22</th>
            <th>GP39</th>
            <th>GP51</th>
            <th>GP62</th>
            <th>GP72</th>
            <th>GP77</th>
            <th>GP104</th>
            <th>GP124</th>
            <th>GP772-1</th>
            <th>GP295-1</th>
            <th>GP536</th>
            <th>GP540</th>
            <th>GP551</th>
            <th>GP567</th>
            <th>GP640</th>
            <th>GP669</th>
            <th>GP677</th>
            <th>GP761-1</th>
            <th>HP13-2</th>
            <th>HP14</th>
            <th>HP38</th>
            <th>HP44</th>
            <th>HP45</th>
            <th>HP48</th>
            <th>HP91-2</th>
            <th>HP98</th>
            <th>HP103</th>
            <th>HP119</th>
            <th>HP263</th>
            <th>HP274</th>
            <th>HP314</th>
            <th>HP327</th>
            <th>HP517-1</th>
            <th>HP362-2</th>
            <th>HP383</th>
            <th>HP390</th>
            <th>HP396</th>
            <th>HP407</th>
            <th>HP486</th>
            <th>HP492</th>
            <th>HP577</th>
            <th>WYG7</th>
            <th>GLA4</th>
            <th>Kasalath</th>
            <th>KY131</th>
            <th>LG31</th>
            <th>DHX2</th>
            <th>IL9</th>
            <th>Koshihikari</th>
            <th>UR28</th>
            <th>W0123-1</th>
            <th>W0128</th>
            <th>W0141</th>
            <th>W0170</th>
            <th>W1687</th>
            <th>W1698</th>
            <th>W1739</th>
            <th>W1754</th>
            <th>W1777</th>
            <th>W3078-2</th>
            <th>W1943</th>
            <th>W1979</th>
            <th>W2012</th>
            <th>W3095-2</th>
            <th>W3105-1</th>
          </tr>
        </thead>
        <tbody>
          {
            variations.map((oneVarObj, index)=>{
              return <Item key={index} {...oneVarObj}></Item>
            })
          }
        </tbody>
      </table>
    )
  }
}
