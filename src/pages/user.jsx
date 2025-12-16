import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUser } from "../services/api.service";
const UserPage = () => {
    const [useDataList, setUseDataList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPage, setTotalPage] = useState(0);
    useEffect(() => {
        loadUserList();
    }, [pageSize, currentPage])
    const loadUserList = async () => {
        const res = await fetchAllUser(currentPage, pageSize);
        setUseDataList(res.data.result);
        setTotalPage(res.data.meta.total);


    }
    return (
        <div style={{ padding: "20px" }}>
            <UserForm
                loadUserList={loadUserList}
            />
            <UserTable
                useDataList={useDataList}
                loadUserList={loadUserList}
                currentPage={currentPage}
                pageSize={pageSize}
                totalPage={totalPage}
                setCurrentPage={setCurrentPage}
                setPageSize={setPageSize}
                setTotalPage={setTotalPage}
            />
        </div>
    );
}
export default UserPage;