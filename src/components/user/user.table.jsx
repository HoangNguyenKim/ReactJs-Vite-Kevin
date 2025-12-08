import { Space, Table, Tag } from 'antd';

const UserTable = (props) => {

    const { useDataList } = props;

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',

        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',
        },

    ];

    return (
        <Table columns={columns}
            dataSource={useDataList}
            rowKey={"_id"} />
    );
}
export default UserTable;