import React,{Component} from 'react'
import axios from 'axios'
import Input from './components/VariationTable/Input'
import Table from './components/VariationTable/Table'
import './App.css'

export default class App extends Component{

  state = {variations:[
    // {'ref': '000000'}
  ]}


  searchId = (geneid)=>{
    console.log(geneid);
    axios.get('http://healingchurch.com:8000/Variation/get', {params: {geneid}}).then((result)=>{
      if(result.status === 200){
        this.setState({variations:result.data})
      }
    })
  }

  render(){
    const {variations} = this.state
    return(
      <div>
        <Input searchId={this.searchId}></Input>
        <Table variations={variations}></Table>
      </div>
    )
  }
}