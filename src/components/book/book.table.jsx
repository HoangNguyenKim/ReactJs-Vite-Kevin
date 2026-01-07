import React from 'react';
import { Flex, Space, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
const BookTable = (props) => {
    const { bookList, setBookList, current, setCurrent, pageSize, setPageSize, total, setTotal } = props;
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
                <div>
                    <DeleteOutlined />
                    <EditOutlined />
                </div>
            ),
        },
    ];

    return (
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
    );
}
export default BookTable;