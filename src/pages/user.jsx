import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUser } from "../services/api.service";
const UserPage = () => {
    const [useDataList, setUseDataList] = useState([]);
    useEffect(() => {
        loadUserList();
    }, []);
    const loadUserList = async () => {
        const res = await fetchAllUser();
        setUseDataList(res.data);

    }
    return (
        <div style={{ padding: "20px" }}>
            <UserForm
                loadUserList={loadUserList}
            />
            <UserTable
                useDataList={useDataList}
                loadUserList={loadUserList}
            />
        </div>
    );
}
export default UserPage;