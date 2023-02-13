  // 基本思路是每一个json文件里的对象都转化为一个节点 每一个有子对象的对象都是分支点 无子对象的对象是叶子
  // 分支点和叶子有各自的样式
  // 各个节点的连接问题:
  //   父节点跟直接包含的子节点有连线 跟子节点的子节点无连线
  // 连接线的长度问题
  //   可以通过一些或许会比较复杂的方式计算得到每个节点的x,y
  //   或者用力引导布局series-graph.force里面的引力和斥力 值越大斥力越大 这里也有一个属性可以设置两个节点之间的距离
  // 好了思路整理完毕接下来该写代码了
  // 节点搞定了 节点的更多属性可以再写一个函数来增加 
  // 连线怎么办
  //   父节点跟直接包含的子节点有连线 
  //   连线的长度是子节点的数字
  // 连线的格式 
  // const links = [{
  //     target: '这是子节点',
  //     sourse: '父节点',
  //     category: '连线的名字 大概吧 要是能写名就能写遗传距离',
  //   }]
  // 连线也拿到了 但是每一个节点的name都是1 所以下一步是
  // 改变节点的名字 应该在拿到json的时候改 改好了


function writeData(jsonTree){
  // console.log('here is writeData!')
  let data = []
  let links = []
  let n = 0

  function renameNode(obj){
    if (obj){
      for (const key in obj){
        if (obj['name'] === '' || obj['name'] === '1'){
          n += 1
          obj[key] = 'node' + n.toString()
        }
      }
      if (obj.children){
        obj.children.forEach(element => {
          renameNode(element)
        });
      }
    }
    return obj
  }

  function traverseJsonTree(obj){
    if (obj){
      data.push({
        'name': obj.name, 
        'itemStyle': {
          color: 'orange'
        },
        'attibute': obj.attribute,
        'symbolSize': [5, 5]
      })  
      if (obj.children){
        obj.children.forEach(element => {
          links.push({
            'target': element.name,
            'source': obj.name,
            'category': element.attribute,
            'value': Math.abs(1 / element.attribute) 
          })
          traverseJsonTree(element)
        });
      }
    }
    addAttriToData(data)
    // addAttriToLinks(links)
    return {data, links}
  }

  function addAttriToData(data){
    data.forEach(item => {
      if (item.name.includes('node') || item.name === 'root'){
        item.symbolSize = 1.5
        item.itemStyle = {color: '#ddd'}
      }
    });
  }

  function addAttriToLinks(links){
    links.forEach(item => {
      if (item.target.includes('node') && item.target.includes('node')){
        item.value = item.value * 1000
      }
    })
  }

  // const dataJson = traverseJsonTree(renameNode(jsonTree.json))
  // console.log('in wd data:', dataJson)   
  return traverseJsonTree(renameNode(jsonTree.json))
}

export default writeData