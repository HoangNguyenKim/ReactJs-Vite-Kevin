import { Space, Table, Tag } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.modal';
import { useState } from 'react';
import DetailUser from './user.drawer';
const UserTable = (props) => {

    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const { useDataList, loadUserList } = props;

    const [dataUpdate, setDataUpdate] = useState(null);
    const [isDetailUserOpen, setIsDetailUserOpen] = useState(false);
    const [dataDrawer, setDataDrawer] = useState(null);
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <>
                        <a
                            onClick={() => {
                                setDataDrawer(record)
                                setIsDetailUserOpen(true)
                            }}

                        >{record._id}</a>
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
            <DetailUser
                isDetailUserOpen={isDetailUserOpen}
                setIsDetailUserOpen={setIsDetailUserOpen}
                dataDrawer={dataDrawer}
                setDataDrawer={setDataDrawer}
            />
        </>
    );
}
export default UserTable;