import { Button, Drawer, Timeline, Descriptions } from 'antd';
import React, { useState } from 'react';

const DetailUser = (props) => {
    const { isDetailUserOpen, setIsDetailUserOpen, dataDrawer, setDataDrawer } = props;
    // const items = [
    //     {
    //         label: 'UserName',
    //         children: 'Zhou Maomao',
    //     },
    //     {
    //         label: 'Live',
    //         span: 'filled', // span = 2
    //         children: 'Hangzhou, Zhejiang',
    //     },
    //     {
    //         label: 'Remark',
    //         span: 'filled', // span = 3
    //         children: 'empty',
    //     },
    //     {
    //         label: 'Address',
    //         span: 1, // span will be 3 and warning for span is not align to the end
    //         children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    //     },
    // ];



    const onClose = () => {
        setIsDetailUserOpen(false);
    };
    return (
        <>

            <Drawer
                title="Detail Information"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onClose}
                open={isDetailUserOpen}
                style={{
                    padding: '10px',

                }}
            >
                <p>Full Name :{dataDrawer?.fullName}</p>
                <br />
                <p>Email :{dataDrawer?.email}</p>
                <br />

                <p>Phone Number :{dataDrawer?.phone}</p>
                <br />
                <p>Role :{dataDrawer?.role}</p>
                {/* <Descriptions bordered title="User Info" items={items} />; */}

            </Drawer>
        </>


    );
}
export default DetailUser;