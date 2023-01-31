import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'Home',
    key: '/home',
  },
  {
    label: 'Jbrowse',
    key: '/jbrowse',
  },
  {
    label: 'Variations',
    key: '/variations',
  },
  {
    label: 'Ortholog',
    children: [
      {
        label: 'Ortholog Expression',
        key: '/orthExpress',
      },
      {
        label: 'Ortholog Sequenses',
        key: 'orthSeq',
      },
    ],
  },
  {
    label: 'Expression Matrix',
    key: '/expressMatrix',
  },
  {
    label: 'Tools',
    key: '/tools',
  },
  {
    label: 'Download',
    key: '/download',
  },
  {
    label: 'Introduction',
    key: '/introduction',
  },
];
const Navbar = () => {
  const [current, setCurrent] = useState('mail');
  const navigate = useNavigate()
  const onClick = (e) => {
    console.log('click ', e.key);
    navigate(e.key)
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Navbar;