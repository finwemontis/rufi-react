import React from 'react'
import * as echarts from 'echarts'
import 'echarts/extension/bmap/bmap'
import Charts from '../Charts'
import data from './data'

export default function Map() {


  data.forEach(element => {
    switch (element.group){
      case 'Os.indica':
        element.itemStyle = {
          color: '#1ABC9C' // green
        }
        break
      case 'Os.japonica':
        element.itemStyle = {
          color: '#E74C3C' // red
        }
        break
      case 'Os.intermedia':
        element.itemStyle = {
          color: '#C39BD3' // purple
        }
        break
      case 'Or-I':
        element.itemStyle = {
          color: '#F4D03F' // yellow
        }
        break
      case 'Or-II':
        element.itemStyle = {
          color: '#F5B041' // orange
        }
        break
      case 'Or-III':
        element.itemStyle = {
          color: '#DC7633' // brown
        }
        break
      default:
        element.itemStyle = {
          color: 'blue'
        }
    }
  });
  
  const option = {
    backgroundColor: 'transparent',
    title: {
      text: '148 rice accessions distribution worldwide',
      // subtext: 'data from PM25.in',
      // sublink: 'http://www.pm25.in',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    // legend: {
    //   show: true,
    // },
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        // console.log(params.data);
        //   {name: 'W0135', location: 'India-Kesavaram, Samalkot, Andhra, India ', group: 'Or-III', value: [77.13, 28.37]},
        return(`accession: ${params.data.name}<br>ecotype: ${params.data.group}<br>location: ${params.data.location}<br>longitude: ${params.data.value[0]}<br>latitude: ${params.data.value[1]}`)
      }
    },
    bmap: {
      center: [111.114129, 25.550339],
      zoom: 1,
      roam: true,
      mapStyle: {
        styleJson: [
          {
            featureType: 'water',
            elementType: 'all',
            stylers: {
              color: '#044161'
            }
          },
          {
            featureType: 'land',
            elementType: 'all',
            stylers: {
              color: '#004981'
            }
          },
          {
            featureType: 'boundary',
            elementType: 'geometry',
            stylers: {
              color: '#064f85'
            }
          },
          {
            featureType: 'railway',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'highway',
            elementType: 'geometry',
            stylers: {
              color: '#004981'
            }
          },
          {
            featureType: 'highway',
            elementType: 'geometry.fill',
            stylers: {
              color: '#005b96',
              lightness: 1
            }
          },
          {
            featureType: 'highway',
            elementType: 'labels',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'arterial',
            elementType: 'geometry',
            stylers: {
              color: '#004981'
            }
          },
          {
            featureType: 'arterial',
            elementType: 'geometry.fill',
            stylers: {
              color: '#00508b'
            }
          },
          {
            featureType: 'poi',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'green',
            elementType: 'all',
            stylers: {
              color: '#056197',
              visibility: 'off'
            }
          },
          {
            featureType: 'subway',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'manmade',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'local',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'arterial',
            elementType: 'labels',
            stylers: {
              visibility: 'off'
            }
          },
          {
            featureType: 'boundary',
            elementType: 'geometry.fill',
            stylers: {
              color: '#029fd4'
            }
          },
          {
            featureType: 'building',
            elementType: 'all',
            stylers: {
              color: '#1a5787'
            }
          },
          {
            featureType: 'label',
            elementType: 'all',
            stylers: {
              visibility: 'off'
            }
          }
        ]
      }
    },
    series: [
      {
        name: 'variations',
        type: 'scatter',
        coordinateSystem: 'bmap',
        // data: convertData(data),
        data: data,
        encode: {
          value: 2
        },
        // symbolSize: function (val) {
        //   return val[2] / 10;
        // },
        symbolSize: 7,
        label: {
          formatter: '{b}',
          position: 'right'
        },
        emphasis: {
          label: {
            show: true
          }
        }
      },
      
    ]
  };

  // console.log('map data:', convertData(data))
  
  const style = {width: '1400px', height: '600px'}
  return (
    <>
      {/* <div>Map ah map</div> */}
      <Charts option={option} style={style}></Charts>
    </>
  )
}
