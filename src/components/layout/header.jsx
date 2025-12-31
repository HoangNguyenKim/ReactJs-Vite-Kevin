// import './header.css';
import { Link, NavLink } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { HomeOutlined, UserOutlined, BookOutlined, MoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { AuthContext } from '../context/auth.context';
const Header = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const { user } = useContext(AuthContext);
    console.log(user);
    const items = [
        {
            label: <Link to={'/'}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={'/user'}>User</Link>,
            key: 'user',
            icon: <UserOutlined />,
        },
        {
            label: <Link to={'/book'}>Book</Link>,
            key: 'book',
            icon: <BookOutlined />,
        },
        {
            label: 'Options',
            key: 'SubMenu',
            icon: <MoreOutlined />,
            children: [
                {
                    type: 'group',
                    label: <Link to={'/login'}>Login</Link>,

                },
                {
                    type: 'group',
                    label: <Link to={'/register'}>Register</Link>,

                },
            ],
        },

    ];

    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    );
}
export default Header;  