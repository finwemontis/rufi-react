import React, {} from 'react';
import { useNavigate } from 'react-router-dom'
import { Menu } from 'antd';
import { NavLink } from "react-router-dom";
// import home from "../../../pages/Home";


const items = [
  {
    label: 'Home',
    key: '../../../pages/Home',
    // icon: <MailOutlined />,
  },
  {
    label: <NavLink to='/jbrowse'>Jbrowse</NavLink>,
    key: 'jbrowse',
  },
  {
    label: 'Variations',
    key: 'variations',
  },
  {
    label: 'Ortholog',
    key: 'ortholog',
    children: [
      {
        label: <NavLink to='/orthExpres'>Ortholog Expression</NavLink>,
        key: 'orthExpres',
      },
      {
        label: <NavLink to='/orthSeq'>Ortholog Sequences</NavLink>,
        key: 'orthSeq',
      },
    ],
  },
  {
    label: <NavLink to='/expressMatrix'>Express Matrix</NavLink>,
    key: 'expressMatrix',
  },
  {
    label: 'Tools',
    key: 'tools',
    children: [
      {
        label: <NavLink to='/blast'>Blast</NavLink>,
        key: 'blast'
      },
      {
        label: <NavLink to='/blat'>Blat</NavLink>,
        key: 'blat'
      },
    ]
  },
  {
    label: <NavLink to='/download'>Download</NavLink>,
    key: 'download',
  },
  {
    label: <NavLink to='/introduction'>Introduction</NavLink>,
    key: 'introduction',
  },
  // {
  //   label: (
  //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //       Navigation Four - Link
  //     </a>
  //   ),
  //   key: 'alipay',
  // },
];


const Navbar = () => {
 
  const navigate = useNavigate()

  const onClick = ({key})=>{
    console.log('click', key)
    navigate(key)
  }

  return <Menu onClick={onClick} defaultSelectedKeys={['home']} mode="horizontal" items={items} theme='dark'>
  </Menu>;
  // return <Menu onClick={onClick} selectedKeys={[current]} defaultSelectedKeys={['home']} mode="horizontal" items={items} />;
  // return <Menu theme='dark' mode='horizontal' items={items}></Menu>
};
export default Navbar;