import React from 'react'
import Charts from '../../components/Charts';

export default function Heatmap(dataset) {

  console.log('heatmap get dataset:', dataset.dataset)


  let ref = []
  // tissue: 后端来的组织的排序跟勾选顺序相关
  const tissue = Object.keys(dataset.dataset).sort()
  const aKey = Object.keys(dataset.dataset)[0]
  const aArray = dataset.dataset[aKey]
  let variations = Object.keys(aArray[0]).filter((element)=>{
    return element !== 'id' && element !== 'ref'
  })

  aArray.forEach((item)=>{
    ref.push(item.ref)
  })
  ref = ref.reverse()

  const xTissue = []
  variations.forEach((element)=>{
    tissue.forEach((e)=>{
      xTissue.push(element + ' ' + e)
    })
  })
  
  // let xTissue = []
  // for(let i=0;i<variations.length;i++){
  //   tissue.forEach((e)=>{
  //     xTissue.push(e)
  //   })
  // }

  let data = []

  // const yMax = aArray.length
  // 为什么我写了四层for循环? 算了反正能用
  const xMax = tissue.length * variations.length
  let x = 0
  let y = 0
  ref.forEach((oneRef)=>{
    variations.forEach((oneVariation)=>{
      tissue.forEach((oneTissue)=>{
        dataset.dataset[oneTissue].forEach((element)=>{
          if(element.ref === oneRef){
            // console.log(x, y, element[oneVariation], oneRef, oneTissue, oneVariation)
            data.push([x, y, element[oneVariation]])
            // data.push([x, y, element[oneVariation], oneRef, oneTissue, oneVariation])
            if(x < xMax-1){
              x += 1
            } else {
              x = 0
              y += 1
            }
          }
        })
      })
    })
  })

  // 求最大最小值
  let max = 0
  let min = 1
  // let min = 1
  console.log(data);
  data.forEach((item)=>{
    let n = parseFloat(item[2])
    console.log(typeof(n))
    if(n >= max){
      max = n
    }
    if(item[2] < min){
      min = item[2]
    }
  })

  console.log('max:', max, 'min: ', min);

  let newData = data.map((item)=>{
    // return [item[0], item[1], (item[2]/max).toFixed(6), {'value': item[2]}]
    // return [item[0], item[1], (item[2]/max).toFixed(6)]  //线性归一化粗糙版
    return [item[0], item[1], ((item[2] - min)/(max - min)).toFixed(6)]  //线性归一化标准版
    // return [item[0], item[1], item[2]]  //原始数据
  })
  // 有大问题 图上鼠标放上去显示原始数据怎么办

  const option = {
    title: {
      text: 'heatmap',
      textStyle: {fontSize:26},  
      left: '32%',
      top: '1%'
    },
    tooltip: {
      position: 'top'
    },
    toolbox: {
        show: true,
        itemSize: 19,
        right: "15%",
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
    // 坐标轴内绘图区域
    grid: {
      height: '50%',
      top: '10%',
      width: '52%'
    },
    xAxis: {
      type: 'category',
      data: xTissue,
      position: 'top',
      splitArea: {
        show: true
      },
      axisLabel: {
        fontSize: 13,
      }
    },
    yAxis: {
      type: 'category',
      data: ref,
      splitArea: {
        show: true
      },
      axisLabel: {
        fontSize: 14
      }
    },
    visualMap: {
      min: 0,
      max: 1,
      calculable: true,
      // orient: 'horizontal',
      left: '63%',
      bottom: '80%',
      color: [
        '#ff6347',
        '#fffaf7'
      ]
    },
    series: [
      {
        name: 'TPM W1943',
        type: 'heatmap',
        data: newData,
        label: {
          // 图上是否显示数字
          // show: true
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      // {
      //   // name: 'variation',
      //   type: 'bar',
      //   data: [],
      //   yAxis: {
      //     data: variations
      //   }
      // }
    ]
  };

  const style = {width: "2000px", height:"1500px"}
  return (
    <Charts option={option} style={style}></Charts>
  )
}
