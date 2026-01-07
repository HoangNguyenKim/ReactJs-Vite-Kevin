// import './header.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { HomeOutlined, UserOutlined, BookOutlined, MoreOutlined, LoginOutlined, LogoutOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Menu, message } from 'antd';
import { AuthContext } from '../context/auth.context';
const Header = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = e => {
        // console.log('click ', e);
        setCurrent(e.key);
    };
    const { user, setUser } = useContext(AuthContext);
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('access_token');
        navigate('/login');

        message.success(
            "Dang xuat thanh cong"
        );
        setUser({
            id: "",
            email: "",
            phone: "",
            fullName: "",
            role: "",
            avatar: ""
        });

    }
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
        ...(user.fullName == "" ? [{

            label: <Link to={'/login'}>Login</Link>,
            key: 'login',
            icon: <LoginOutlined />,

        }] : [{
            label: `Welcome ${user.fullName}`,
            key: 'SubMenu',
            icon: <CaretDownOutlined />,
            children: [
                {
                    // type: 'group',
                    label: <span onClick={handleLogout}>Logout</span>,
                    icon: <LogoutOutlined />

                },

            ],
        }]),

        // ...(user.fullName !== "" ? [{
        //     label: `Welcome ${user.fullName}`,
        //     key: 'SubMenu',
        //     icon: <CaretDownOutlined />,
        //     children: [
        //         {
        //             // type: 'group',
        //             label: <Link to={'/login'}>Logout</Link>,
        //             icon: <LogoutOutlined />

        //         },

        //     ],
        // }] : [{}])


    ];

    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    );
}
export default Header;  