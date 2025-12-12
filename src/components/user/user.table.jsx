import { Table, notification, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.modal';
import { useState } from 'react';
import DetailUser from './user.drawer';
import { deleteUserAPI } from '../../services/api.service';
const UserTable = (props) => {

    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const { useDataList, loadUserList } = props;

    const [dataUpdate, setDataUpdate] = useState(null);
    const [isDetailUserOpen, setIsDetailUserOpen] = useState(false);
    const [dataDrawer, setDataDrawer] = useState(null);
    const [modal, contextHolder] = Modal.useModal();
    const [confirmDelete, setConfirmDelete] = useState(false);

    const deleteUser = async (id) => {
        modal.confirm({
            title: 'Confirm Delete User',
            icon: <ExclamationCircleOutlined />,
            content: 'Bạn có chắc chắn muốn xoá người dùng này không',
            okText: 'CONFIRM',
            cancelText: 'Cancel',
            onOk: async () => {
                const res = await deleteUserAPI(id);

                if (res.data) {
                    notification.success({
                        message: "Delete User",
                        description: "Xoá người dùng thành công"
                    })

                    await loadUserList();

                }
            },

        });



    }
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
                        onClick={() => {
                            deleteUser(record._id)
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
                loadUserList={loadUserList}
            />

            {contextHolder}
        </>
    );
}
export default UserTable;