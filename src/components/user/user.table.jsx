import { Space, Table, Tag } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './user.editModal';
const UserTable = (props) => {

    const { useDataList } = props;

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

            <UpdateUserModal />
        </>
    );
}
export default UserTable;