import { Space, Table, Tag } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.modal';
import { useState } from 'react';
const UserTable = (props) => {
    // console.log(">>>check prop in user table", props);
    // debugger
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const { useDataList, loadUserList } = props;
    // console.log(">>> load usẻr f", loadUserList);
    // debugger
    const [dataUpdate, setDataUpdate] = useState(null);

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <>
                        <a>{record._id}</a>
                    </>
                )
            }

        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div
                    style={{
                        display: "flex",
                        gap: "20px",
                    }}
                >
                    <EditOutlined
                        style={{
                            cursor: "pointer",
                            color: "orange"
                        }}
                        onClick={() => {
                            setIsUpdateModalOpen(true)
                            setDataUpdate(record)
                        }}
                    />
                    <DeleteOutlined
                        style={{
                            cursor: "pointer",
                            color: "red"
                        }}
                    />

                </div>
            ),
        },

    ];

    return (
        <>
            <Table columns={columns}
                dataSource={useDataList}
                rowKey={"_id"} />

            <UpdateUserModal
                isUpdateModalOpen={isUpdateModalOpen}
                setIsUpdateModalOpen={setIsUpdateModalOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUserList={loadUserList}
            />
        </>
    );
}
export default UserTable;