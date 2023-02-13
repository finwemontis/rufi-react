import React, { Suspense } from 'react'
import newickParser from './newick'
import newickString from './twomethod_3rd_pan_out_MAF01'
import smallNewickStr from './smallTree'
import writeData from './writeData'
import links from './links'
import jsonTree from './jsonTree.json'
const Charts = React.lazy(()=>import('../../components/Charts'))


// console.log('tree:', newickString);

// const jsonTree = newickParser(newickString)
// const jsonTree = newickParser(smallNewickStr)
const {data} = writeData(jsonTree)


console.log('data:', data)
console.log('links:', links)

// const option = {
//   title: {
//     text: 'Rufipogon Pan-genome',
//     // subtitle: '',
//     // top: 'bottom',
//     // left: 'right'
//   },
//   Tooltip: {},
//   // legend: [],
//   animationDurationUpdate: 1500,
//   animationEasingUpdate: 'quinticInOut',
//   series: [{
//     name: '',
//     type: 'graph',
//     layout: 'force',
//     // focusNodeAdjacency: true,
//     data: data,
//     links: links,
//     roam: true,
//     lineStyle: {
//       color: '#ccc',
//       opacity: 0.9,
//       width: 2,
//       curveness: 0
//     },
//     label: {
//       show: true,
//       position: 'right',
//     },
//     force: {
//       repulsion: 100
//     }
//   }]
// } 
// 这个为什么不显示线的标签 未解之谜


const option = {
  title: {
    text: ''
  },
  tooltip: {
    // 提示框配置
    formatter: (params)=>{
      // console.log(params.data);
      if (params.data.name){
        return null
      } else {
        // console.log(params.data) 
      }
    }
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: true,
      restore: true
    }
  },
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: [{
        name: '',
        type: 'sunburst',
        // layout: 'force',
        // 'draggable': true,
        // force: {
        //   edgeLength: [2, 50],
        //   repulsion: 40,
        //   gravity: 0.01
        // },
        data: jsonTree,
        links: links,
        roam: true,
        lineStyle: {
          color: '#ccc',
          opacity: 0.9,
          width: 2,
          curveness: 0
        },
        label: {
          show: false,
          position: 'right',
          formatter: (params)=>{
            if (params.data.name.includes('node') || params.data.name === 'root'){
              return null
            } else {
              return params.data.name
            }
          }
        },
        edgeLabel: {
          show: false,
          formatter: (params)=>{
            // let n = params.data.category * 10000
            // return n.toFixed(4)
            // let m = params.data.value
            // return m.toFixed(4)
          }
        }
      }]
}
const style = {width: '1000px', height:'800px', backgroundColor:'#eee'}


export default function Tree() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Charts option={option} style={style}></Charts>
    </Suspense>
  )
}
