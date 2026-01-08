import React, { useState, useEffect } from 'react';
import { Button, Drawer, notification } from 'antd';
import { upLoadFile, updateBookAPI } from '../../services/api.service';

const BookDrawer = (props) => {
    const { open, setOpen, dataDetail, setDataDetail, loadBookData } = props;
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile]);
    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }


    const resetAndCloseModal = () => {


        setSelectedFile(undefined);
        setOpen(false);

    }
    const onClose = () => {
        setOpen(false);
        setPreview(null);
        setSelectedFile(null);
    };
    const handleSaveNewThumbnail = async () => {
        // console.log(selectedFile);

        const res = await upLoadFile(selectedFile, "book");
        if (res && res.data && res.data.fileUploaded) {
            console.log(res);

            const newAVT = res.data.fileUploaded;
            const resUpdate = await updateBookAPI(dataDetail._id, newAVT, dataDetail.mainText, dataDetail.author, dataDetail.price, dataDetail.quantity, dataDetail.category);
            if (resUpdate && resUpdate.data) {

                notification.success({
                    message: "Update Book",
                    description: "Cập nhật thành công"
                })
                resetAndCloseModal();
                await loadBookData();

            }
            else {
                notification.error({
                    message: "Book User",
                    description: JSON.stringify(resUpdate.message)
                })
            }
        }
        else {
            notification.error({
                message: "Book User",
                description: JSON.stringify(res.message)
            })
        }

    }



    return (
        <>
            <Drawer
                title="Book Detail"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onClose}
                open={open}

            >
                <p>{`id:  ${dataDetail._id}`}</p>
                <br />
                <p>{`Name: ${dataDetail.mainText}`}</p>
                <br />
                <p>{`Author: ${dataDetail.author}`}</p>
                <br />
                <p>{`Category: ${dataDetail.category}`}</p>
                <br />
                <p>{`Price: ${dataDetail.price}`}</p>
                <br />
                <p>{`Quantity: ${dataDetail.quantity}`}</p>
                <br />
                <p>{`Thumbnail: `}</p>
                <br />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '20px'

                    }}
                >
                    <img src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${dataDetail?.thumbnail}`}
                        alt=""
                        style={{
                            height: "150px",
                            width: '150px',
                            border: "2px solid #ccc",
                            borderRadius: "10px"
                        }} />
                    <label
                        style={{
                            display: 'flex',
                            padding: '0px 8px',
                            height: '36px',
                            backgroundColor: '#2e55d4ff',
                            color: '#fff',
                            borderRadius: ' 5px',
                            cursor: 'pointer',
                            border: '1px solid #181616ff',
                            justifyContent: 'center',
                            alignItems: 'center'

                        }}

                        htmlFor="myfile">Change Avatar</label>
                    <input onChange={onSelectFile} hidden type="file" id="myfile" name="myfile"></input>
                    {selectedFile &&
                        <>
                            <img
                                src={preview}
                                style={{
                                    width: "150px",
                                    height: "150px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                    border: "2px solid #ccc",
                                    marginTop: "15px",
                                    display: "flex",
                                    float: 'top',
                                }}
                            />
                            <button
                                style={{
                                    backgroundColor: "blue",
                                    color: "white",
                                    border: "none",
                                    padding: '10px',
                                    borderRadius: "10px",
                                    marginTop: "10px",
                                    cursor: 'pointer'

                                }}
                                onClick={() => {
                                    handleSaveNewThumbnail()

                                }}
                            >

                                SAVE
                            </button>
                        </>
                    }
                </div>
            </Drawer>
        </>
    );
}
export default BookDrawer;