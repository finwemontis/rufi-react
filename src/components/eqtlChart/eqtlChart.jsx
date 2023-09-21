import React, { Suspense } from 'react'
const Charts = React.lazy(()=>import('../../components/Charts'))

export default function eqtlChart(set) {

  const { eqtlDel } = set
  // console.log('eqltDelRoot', eqtlDelRoot)
  
  const delRoot = []
  eqtlDel.forEach((item)=>{
    switch(item.chr){
      case 1:
        delRoot.push([item.pos+2000000, item.p_value, item.chr, item.pos, item.pid, item.dst, item.sv])
        break
      case 2:
        delRoot.push([item.pos + 43270923+4000000, item.p_value, item.chr, item.pos, item.pid, item.dst, item.sv])
        break
      case 3:
        delRoot.push([item.pos +79208173 +6000000, item.p_value, item.chr, item.pos, item.pid, item.dst, item.sv])
        break
      case 4:
        delRoot.push([item.pos +115621992 +8000000, item.p_value, item.chr, item.pos, item.pid, item.dst, item.sv])
        break
      case 5:
        delRoot.push([item.pos +151124686+10000000, item.p_value, item.chr, item.pos, item.pid, item.dst, item.sv])
        break
      case 6:
        delRoot.push([item.pos + 181083120+12000000, item.p_value, item.chr, item.pos, item.pid, item.dst, item.sv])
        break
      case 7:
        delRoot.push([item.pos +212331907+14000000, item.p_value, item.chr, item.pos, item.pid, item.dst, item.sv])
        break
      case 8:
        delRoot.push([item.pos  + 242029528+16000000, item.p_value, item.chr, item.pos, item.pid, item.dst, item.sv])
        break
      case 9:
        delRoot.push([item.pos + 270472550+19000000, item.p_value, item.chr, item.pos, item.pid, item.dst, item.sv])
        break
      case 10:
        delRoot.push([item.pos+ 293485270+21000000, item.p_value, item.chr, item.pos, item.pid, item.dst, item.sv])
        break
      case 11:
        delRoot.push([item.pos + 316692557+23000000, item.p_value, item.chr, item.pos, item.pid, item.dst, item.sv])
        break
      case 12:
        delRoot.push([item.pos + 345713663+25000000, item.p_value, item.chr, item.pos, item.pid, item.dst, item.sv])
        break
      default:
        break
    }
  })

  // console.log('加工后的：', delRoot);


  const option = {
    title: {
      // text: 'GWAS plot of deletion',
    },
    tooltip: {
      show: true,
      // axisPointer: {
      //   type: 'cross'
      // }
    },
    xAxis: {
      min: 0,
      max: 400300000,
      axisTick: {
        show: false
      },
      axisLabel:{
        show: false,
        fontSize: 18
      }
      // data: ['chr01', 'chr02', 'chr03', 'chr04', 'chr05', 'chr06', 'chr07', 'chr08', 'chr09', 'chr10', 'chr11', 'chr12']
      // scale: true,
    },
    yAxis: {
      name: '-log(p-value)',
      nameTextStyle: {
        fontSize: 20
      },
      min: 2,
      max: 25,
      axisLabel: {
        show: true,
        fontSize: 20
      }
    },
    toolbox: {
      show: true,
      itemSize: 19,
      right: "10%",
      top: "1%",
      feature: {
        dataZoom: {},
        restore: {},
        // dataView: {
        //   readOnly: true
        // },
        saveAsImage: {}
      }
    },
    dataZoom: [
      {
        type: 'slider',
        filterMode: 'weakFilter',
        showDataShadow: false,
        top: '93%',
        labelFormatter: ''
      },
      {
        type: 'inside',
        filterMode: 'weakFilter'
      }
    ],
    series: [
      // {
      //   name: 'gwas snp',
      //   type: 'scatter',
      //   colorBy: 'data',
      //   data: spotSnp,
      //   symbolSize: 4,
      //   tooltip: {
      //     show: false,
      //   },
      //   itemStyle: {
      //     normal: {
      //       color: '#eee',
            
      //         }
      //       }
      // },
      {
        name: 'eQTL SV tissue',
        type: 'scatter',
        colorBy: 'data',
        data: delRoot,
        symbolSize: 7,
        tooltip: {
          show: true,
          formatter: (params)=>{
            return(`-log(p-value): ${params.data[1]}<br>chr: ${params.data[2]}<br>pos: ${params.data[3]}<br>pid: ${params.data[4]}<br>dst: ${params.data[5]}<br>variation: ${params.data[6]}`)
          }
        },
        itemStyle: {
          normal: {
            color: (params)=>{
              // console.log(params.data)
              switch(params.data[2]%2){
                case 0:
                  return '#76D7C4'
                case 1:
                  return '#F1948A'
                default:
                  return 'red'
                  // break
              }
            }
          }
        },
        markArea: {
          label: {
            show: true,
            fontSize: 20,
            color: 'rgba(33, 47, 60, 0.8)',
            position: ['30%', '102%'],
            tooltip: {
              show: false
            }
          },
          data: [[{
            name: 'chr01',
            itemStyle: {color:'rgba(214, 234, 248, 0)'},
            xAxis: 0
          },{
            xAxis: 45000000
          }], [{
            name: 'chr02',
            itemStyle: {color:'rgba(235, 222, 240, 0)'},
            xAxis: 45000000
          },{
            xAxis: 83131353
          }], [{
            name: 'chr03',
            itemStyle: {color:'rgba(250, 219, 216, 0)'},
            xAxis: 83131353
          },{
            xAxis: 119860940
          }], [{
            name: 'chr04',
            itemStyle: {color:'rgba(208, 236, 231, 0)'},
            xAxis: 119860940
          },{
            xAxis: 158984027
          }], [{
            name: 'chr05',
            itemStyle: {color:'rgba(252, 243, 207, 0)'},
            xAxis: 158984027
          },{
            xAxis: 190228533
          }], [{
            name: 'chr06',
            itemStyle: {color:'rgba(250, 229, 211, 0)'},
            xAxis: 190228533
          },{
            xAxis: 224140000
          }], [{
            name: 'chr07',
            itemStyle: {color:'rgba(237, 187, 153, 0)'},
            xAxis: 226800000
          },{
            xAxis: 255900000
          }], [{
            name: 'chr08',
            itemStyle: {color:'rgba(237, 187, 153, 0)'},
            xAxis: 254950000
          },{
            xAxis: 286285000
          }], [{
            name: 'chr09',
            itemStyle: {color:'rgba(237, 187, 153, 0)'},
            xAxis: 286285000
          },{
            xAxis: 312300000
          }], [{
            name: 'chr10',
            itemStyle: {color:'rgba(237, 187, 153, 0)'},
            xAxis: 312300000
          },{
            xAxis: 337738000
          }], [{
            name: 'chr11',
            itemStyle: {color:'rgba(237, 187, 153, 0)'},
            xAxis: 337738000
          },{
            xAxis: 368750000
          }], [{
            name: 'chr12',
            itemStyle: {color:'rgba(237, 187, 153,0)'},
            xAxis: 368750000
          },{
            xAxis: 398860000
          }]],
        },
      },
    ],
    
  }

  const style = {width:'1400px', height:'600px', backgroundColor: '#fff'}

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Charts option={option} style={style}></Charts>
  </Suspense>
  )
}
