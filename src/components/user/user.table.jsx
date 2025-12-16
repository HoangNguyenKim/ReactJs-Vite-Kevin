import { Table, notification, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.modal';
import { useState } from 'react';
import DetailUser from './user.drawer';
import { deleteUserAPI } from '../../services/api.service';
const UserTable = (props) => {

    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const { useDataList, loadUserList, currentPage, pageSize, totalPage,
        setCurrentPage, setPageSize, setTotalPage } = props;

    const [dataUpdate, setDataUpdate] = useState(null);
    const [isDetailUserOpen, setIsDetailUserOpen] = useState(false);
    const [dataDrawer, setDataDrawer] = useState(null);
    const [modal, contextHolder] = Modal.useModal();

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
    const onChange = async (pagination, filters, sorter, extra) => {
        console.log("pagination", pagination);
        // console.log("filters", filters);
        // console.log("sorter", sorter);
        // console.log("extra", extra);
        // debugger
        await setCurrentPage(pagination.current);
        await setPageSize(pagination.pageSize);
        console.log(currentPage);
        console.log(pageSize);
        await loadUserList();


        // await loadUserList();
    }
    const columns = [
        {
            title: 'N.O',
            render: (_, record, index) => {
                return (
                    index + 1
                )
            }

        },
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
                rowKey={"_id"}
                pagination={{
                    current: currentPage,
                    pageSize: pageSize,
                    showSizeChanger: true,
                    total: totalPage,
                    showTotal: (total, range) => { return (<div>{range[0]}-{range[1]} trên {total} rows </div>) }
                }}
                onChange={onChange}
            />

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