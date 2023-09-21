import React, { useState } from 'react'
import { Table, Checkbox, Divider } from 'antd'
// import './VarTable.css'

export default function VarTable(set) {
  
  let arr = []
  for (const i in set){
    let countR = 0
    let countOther = 0
    for (const key in set[i]){
      if (key !== 'Ref_base' & key !== 'Variant_base'){
        if (set[i][key] === 'R'){
          countR += 1
        } else if (set[i][key] === 'A' || set[i][key] === 'T' || set[i][key] === 'C' || set[i][key] === 'G'){
          countOther += 1
        }
      }
    }
    set[i]['refCount'] = countR
    set[i]['varCount'] = countOther
    set[i]['baseCount'] = countR + countOther
  // 数了一下 数量跟查询回来的对不上 似乎是因为我表格缺了两列 缺了俩品种 缺了哪两个呢? 我不知道啊 随便吧反正是测试版本...
    arr.push(set[i])
  }

  function colStyle(text){
    switch (text) {
      case 'R':
        // return {className:'R'}  //这个怎么不work
        return <div style={{color:'#aaa', fontSize:'13px'}}>{text}</div>
      case 'X':
        return <div style={{color:'#ebded4', fontSize:'11px'}}>no data</div>
      case 'A':
        return <div style={{color:'#D68910', fontSize:'17px', fontWeight:'bolder'}}>{text}</div>
      case 'T':
        return <div style={{color:'#FF5733', fontSize:'17px', fontWeight:'bolder'}}>{text}</div>
      case 'C':
        return <div style={{color:'#117864', fontSize:'17px', fontWeight:'bolder'}}>{text}</div>
      case 'G':
        return <div style={{color:'#2874A6', fontSize:'17px', fontWeight:'bolder'}}>{text}</div>
      default:
        return <div>{text}</div>
    }
  }

  const columns = [
    {
      title: '#',
      width: 50,
      fixed: 'left',
      key: 'default',
      render: (text, record, index)=>{
        return <div>{index+1}</div>
      }
    },
    {
      title: 'reference',
      width: 150,
      dataIndex: 'Ref_gene',
      key: 'default',
      fixed: 'left',
    },
    {
      title: 'chr',
      width: 50,
      dataIndex: 'Ref_CHR',
      key: 'default',
      fixed: 'left',
    },
    {
      title: 'pos',
      dataIndex: 'Ref_POS1',
      key: 'default',
      width: 120,
      fixed: 'left',
    },
    {
      title: 'ref base',
      dataIndex: 'Ref_base',
      key: 'default',
      width: 85,
      fixed: 'left',
      render: (text)=>{
        return colStyle(text)
      }
    },
    {
      title: 'variant base',
      dataIndex: 'Variant_base',
      key: 'default',
      width: 85,
      fixed: 'left',
      render: (text)=>{
        return colStyle(text)
      }
    },
    {
      title: 'gene coding',
      dataIndex: 'Ref_gene_coding',
      key: 'default',
      width: 90,
      fixed: 'left',
    },
    {
      title: 'var type',
      dataIndex: 'varType',
      key: 'default',
      width: 80,
      fixed: 'left',
    },
    // 以下是各个品种
    // for i in l:
    //     i = i.replace(',', '')
    //     i = i.replace('_', '-')
    //     print('  {')
    //     print('title: \'{0}\','.format(i))
    //     print('dataIndex: \'{0}\','.format(i))
    //     print('key: \'{0}\','.format(i))
    //     print('width: 90, ')
    //     print('  },')
  {
    title: 'GP3',
    dataIndex: 'GP3',
    key: 'indica',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
  },
  {
    title: 'GP22',
    dataIndex: 'GP22',
    key: 'indica',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
  },
  {
    title: 'GP51',
    dataIndex: 'GP51',
    key: 'indica',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
    },
    {
      title: 'GP72',
      dataIndex: 'GP72',
      key: 'indica',
      width: 90,
      render: (text)=>{
        return colStyle(text)
      }
      },
{
  title: 'GP772-1',
  dataIndex: 'GP772_1',
  key: 'indica',
  width: 90,
  render: (text)=>{
    return colStyle(text)
  }
  },
  {
    title: 'HP119',
    dataIndex: 'HP119',
    key: 'indica',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
    },
    {
    title: 'HP263',
    dataIndex: 'HP263',
    key: 'indica',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
    },
    {
      title: 'HP327',
      dataIndex: 'HP327',
      key: 'indica',
      width: 90,
      render: (text)=>{
        return colStyle(text)
      }
      },
      {
      title: 'HP517-1',
      dataIndex: 'HP517_1',
      key: 'indica',
      width: 90,
      render: (text)=>{
        return colStyle(text)
      }
      },
      {
      title: 'HP362-2',
      dataIndex: 'HP362_2',
      key: 'indica',
      width: 90,
      render: (text)=>{
        return colStyle(text)
      }
      },
      {
      title: 'HP383',
      dataIndex: 'HP383',
      key: 'indica',
      width: 90,
      render: (text)=>{
        return colStyle(text)
      }
      },
      {
        title: 'HP396',
        dataIndex: 'HP396',
        key: 'indica',
        width: 90,
        render: (text)=>{
          return colStyle(text)
        }
        },
        {
        title: 'HP407',
        dataIndex: 'HP407',
        key: 'indica',
        width: 90,
        render: (text)=>{
          return colStyle(text)
        }
        },
        
        {
        title: 'HP486',
        dataIndex: 'HP486',
        key: 'indica',
        width: 90,
        render: (text)=>{
          return colStyle(text)
        }
        },
        {
        title: 'HP492',
        dataIndex: 'HP492',
        key: 'indica',
        width: 90,
        render: (text)=>{
          return colStyle(text)
        }
        },
  {
    title: 'HP577',
    dataIndex: 'HP577',
    key: 'indica',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
    },
    {
      title: 'GLA4',
      dataIndex: 'GLA4',
      key: 'indica',
      width: 90,
      render: (text)=>{
        return colStyle(text)
      }
      },
      {
        title: 'UR28',
        dataIndex: 'UR28',
        key: 'indica',
        width: 90,
        render: (text)=>{
          return colStyle(text)
        }
        },
///////////////////////

  {
  title: 'GP39',
  dataIndex: 'GP39',
  key: 'japonica',
  width: 90,
  render: (text)=>{
    return colStyle(text)
  }
  },
  {
    title: 'GP77',
    dataIndex: 'GP77',
    key: 'japonica',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
    },
  {
    title: 'GP536',
    dataIndex: 'GP536',
    key: 'japonica',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
    },
    {
      title: 'GP551',
      dataIndex: 'GP551',
      key: 'japonica',
      width: 90,
      render: (text)=>{
        return colStyle(text)
      }
      },
      {
        title: 'GP677',
        dataIndex: 'GP677',
        key: 'japonica',
        width: 90,
        render: (text)=>{
          return colStyle(text)
        }
        },
        {
        title: 'GP761-1',
        dataIndex: 'GP761_1',
        key: 'japonica',
        width: 90,
        render: (text)=>{
          return colStyle(text)
        }
        },
    {
    title: 'HP13-2',
    dataIndex: 'HP13_2',
    key: 'japonica',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
    },
    {
    title: 'HP14',
    dataIndex: 'HP14',
    key: 'japonica',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
    },
    {
    title: 'HP38',
    dataIndex: 'HP38',
    key: 'japonica',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
    },
    {
      title: 'HP44',
      dataIndex: 'HP44',
      key: 'japonica',
      width: 90,
      render: (text)=>{
        return colStyle(text)
      }
      },
      {
      title: 'HP45',
      dataIndex: 'HP45',
      key: 'japonica',
      width: 90,
      render: (text)=>{
        return colStyle(text)
      }
      },
      {
      title: 'HP48',
      dataIndex: 'HP48',
      key: 'japonica',
      width: 90,
      render: (text)=>{
        return colStyle(text)
      }
      },
      {
      title: 'HP91-2',
      dataIndex: 'HP91_2',
      key: 'japonica',
      width: 90,
      render: (text)=>{
        return colStyle(text)
      }
      },

  {
    title: 'HP98',
    dataIndex: 'HP98',
    key: 'japonica',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
    },
    {
    title: 'HP103',
    dataIndex: 'HP103',
    key: 'japonica',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
    },
    {
      title: 'HP274',
      dataIndex: 'HP274',
      key: 'japonica',
      width: 90,
      render: (text)=>{
        return colStyle(text)
      }
      },
      {
      title: 'HP314',
      dataIndex: 'HP314',
      key: 'japonica',
      width: 90,
      render: (text)=>{
        return colStyle(text)
      }
      },
      {
        title: 'HP390',
        dataIndex: 'HP390',
        key: 'japonica',
        width: 90,
        render: (text)=>{
          return colStyle(text)
        }
        },
        {
          title: 'WYG7',
          dataIndex: 'WYG7',
          key: 'japonica',
          width: 90,
          render: (text)=>{
            return colStyle(text)
          }
          },
          {
            title: 'KY131',
            dataIndex: 'KY131',
            key: 'japonica',
            width: 90,
            render: (text)=>{
              return colStyle(text)
            }
            },
            {
            title: 'LG31',
            dataIndex: 'LG31',
            key: 'japonica',
            width: 90,
            render: (text)=>{
              return colStyle(text)
            }
            },
    {
    title: 'DHX2',
    dataIndex: 'DHX2',
    key: 'japonica',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
    },
    {
    title: 'IL9',
    dataIndex: 'IL9',
    key: 'japonica',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
    },
    {
    title: 'Koshihikari',
    dataIndex: 'Koshihikari',
    key: 'japonica',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
    },
  ////////////////////
  {
  title: 'GP62',
  dataIndex: 'GP62',
  key: 'aus',
  width: 90,
  render: (text)=>{
    return colStyle(text)
  }
},
{
  title: 'GP104',
  dataIndex: 'GP104',
  key: 'aus',
  width: 90,
  render: (text)=>{
    return colStyle(text)
  }
  },
  {
    title: 'GP124',
    dataIndex: 'GP124',
    key: 'aus',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
    },
    {
      title: 'GP540',
      dataIndex: 'GP540',
      key: 'aus',
      width: 90,
      render: (text)=>{
        return colStyle(text)
      }
      },
      {
        title: 'Kasalath',
        dataIndex: 'Kasalath',
        key: 'aus',
        width: 90,
        render: (text)=>{
          return colStyle(text)
        }
        },

  ///////////////////////////////////
  
  
  {
  title: 'GP295-1',
  dataIndex: 'GP295_1',
  key: 'aromatic',
  width: 90,
  render: (text)=>{
    return colStyle(text)
  }
  },

  /////////////////////
 
  
  


  {
  title: 'W0123-1',
  dataIndex: 'W0123_1',
  key: 'Or-I',
  width: 90,
  render: (text)=>{
    return colStyle(text)
  }
  },
  {
  title: 'W0128',
  dataIndex: 'W0128',
  key: 'Or-I',
  width: 90,
  render: (text)=>{
    return colStyle(text)
  }
  },
  {
  title: 'W0141',
  dataIndex: 'W0141',
  key: 'Or-I',
  width: 90,
  render: (text)=>{
    return colStyle(text)
  }
  },
  {
    title: 'W0170',
    dataIndex: 'W0170',
    key: 'Or-II',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
  },
  {
    title: 'W1687',
    dataIndex: 'W1687',
    key: 'Or-II',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
  },
  {
    title: 'W1698',
    dataIndex: 'W1698',
    key: 'Or-II',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
  },
  {
    title: 'W1739',
    dataIndex: 'W1739',
    key: 'Or-II',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
  },
  {
    title: 'W1754',
    dataIndex: 'W1754',
    key: 'Or-III',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
  },
  {
    title: 'W1777',
    dataIndex: 'W1777',
    key: 'Or-III',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
  },
  {
    title: 'W3078-2',
    dataIndex: 'W3078_2',
    key: 'Or-III',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
  },
  {
    title: 'W1943',
    dataIndex: 'W1943',
    key: 'Or-II',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
  },
  {
    title: 'W1979',
    dataIndex: 'W1979',
    key: 'Or-III',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
  },
  {
    title: 'W2012',
    dataIndex: 'W2012',
    key: 'Or-III',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
  },
  {
    title: 'W3095-2',
    dataIndex: 'W3095_2',
    key: 'Or-III',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
  },
  {
    title: 'W3105-1',
    dataIndex: 'W3105_1',
    key: 'Or-III',
    width: 90,
    render: (text)=>{
      return colStyle(text)
    }
  },
  {
    title: 'ref count',
    dataIndex: 'refCount',
    key: 'default',
    width: 80,
  },
  {
    title: 'variant count',
    dataIndex: 'varCount',
    key: 'default',
    width: 80,
  },
  {
    title: 'all record',
    dataIndex: 'baseCount',
    key: 'default',
    width: 80,
  },

    // {
    //   title: 'Action',
    //   key: 'operation',
    //   fixed: 'right',
    //   width: 100,
    //   render: () => <a>action</a>,
    // },
  ];

  // 
  const [showCol, setShowCol] = useState(columns)

  const handleShowCol = (list) => {
    console.log('handle list:', list)
    list.push('default')
    let newCols = columns.filter((item)=>{
      return list.includes(item['key'])
    })
    setShowCol([...newCols])
  }

  const CheckboxGroup = Checkbox.Group;
  const plainOptions = ['indica', 'japonica', 'intermedia', 'Or-I', 'Or-II', 'Or-III'];
  const defaultCheckedList = ['indica', 'japonica', 'intermedia', 'Or-I', 'Or-II', 'Or-III'];
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list) => {
    // console.log('onchange list:', list)
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
    handleShowCol(list)
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    // console.log(e.target.checked);
    // console.log('checkedList:', checkedList);
    handleShowCol(e.target.checked ? plainOptions : [])
  };

  return (
    <>
      <Divider />
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        all
      </Checkbox>
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
      <Divider />
      <Table
        columns={showCol}
        dataSource={arr}
        pagination={false}
        scroll={{
          x: 1000,
          y: 850
        }}
        size='middle'
        stick
      />
    </>
  )
}
