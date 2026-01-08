import { useEffect, useState } from "react";
import BookTable from "../components/book/book.table";
import { fetchAllBook } from "../services/api.service";
import { Pagination } from 'antd';

const BookPage = () => {
    const [bookList, setBookList] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        loadBookData();
    }, [current, pageSize])
    const loadBookData = async () => {
        const res = await fetchAllBook(current, pageSize);
        if (res && res.data) {
            setBookList(res.data.result);
            setTotal(res.data.meta.total);

        }

    }
    return (
        <>
            <BookTable
                bookList={bookList}
                setBookList={setBookList}
                current={current}
                setCurrent={setCurrent}
                pageSize={pageSize}
                setPageSize={setPageSize}
                total={total}
                setTotal={setTotal}
                loadBookData={loadBookData}


            />
        </>
    );
}
export default BookPage;