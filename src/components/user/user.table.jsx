import { Space, Table, Tag } from 'antd';
import { fetchAllUser } from '../../services/api.service';
import { useEffect, useState } from 'react';
const UserTable = () => {

    const [useDataList, setUseDataList] = useState([]);
    useEffect(() => {
        loadUserList();
    }, []);
    const loadUserList = async () => {
        const res = await fetchAllUser();
        setUseDataList(res.data);


    }
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