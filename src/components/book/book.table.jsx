import React, { useState } from 'react';
import { Flex, Space, Table, Tag, Drawer } from 'antd';
import { DeleteOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import BookDrawer from './book.drawer';
const BookTable = (props) => {
    const [open, setOpen] = useState(false);
    const [dataDetail, setDataDetail] = useState({});
    const { bookList, setBookList, current, setCurrent, pageSize, setPageSize, total, setTotal, loadBookData } = props;
    const onChange = (pagination) => {
        if (pagination && pagination.current) {
            if (+pagination.current !== +current) {
                setCurrent(pagination.current);
            }
        }
        if (pagination && pagination.pageSize) {
            if (+pagination.pageSize !== +pageSize) {
                setPageSize(pagination.pageSize);
            }
        }
    }
    const columns = [
        {
            title: 'NO',
            key: 'no',
            render: (_, record, index) => {
                return (
                    <>
                        {index + 1}
                    </>
                )
            }
        },
        {
            title: 'Id',
            dataIndex: '_id',
            key: '_id',
            render: (_, record, index) => {
                return (
                    <>
                        <a
                            onClick={() => {
                                setOpen(true);
                                setDataDetail(record);


                            }}
                        >
                            {record._id}
                        </a>
                    </>
                )

            }
        },
        {
            title: 'Name',
            dataIndex: 'mainText',
            key: 'mainText',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Author',
            dataIndex: 'author',
            key: 'author',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div
                    style={{
                        display: 'flex',
                        gap: '20px'
                    }}
                >
                    <DeleteOutlined
                        style={{
                            color: 'red'
                        }}
                    />
                    <EditOutlined
                        style={{
                            color: 'orange'
                        }}
                    />
                </div>
            ),
        },
    ];

    return (
        <>
            <Table
                rowKey={'_id'}
                columns={columns}
                dataSource={bookList}
                pagination={{
                    current: current,
                    pageSize: pageSize,
                    showSizeChanger: true,
                    total: total,
                    showTotal: (total, range) => { return (<div>{range[0]}-{range[1]} trên {total} rows </div>) }
                }}
                onChange={onChange}
            />
            <BookDrawer
                open={open}
                setOpen={setOpen}
                bookList={bookList}
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
                loadBookData={loadBookData}
            />
        </>
    );
}
export default BookTable;