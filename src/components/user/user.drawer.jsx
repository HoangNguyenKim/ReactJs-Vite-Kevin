import { Button, Drawer, Timeline, Descriptions, notification } from 'antd';
import { useState, useEffect } from 'react';
import { updateAvatarAPI, upLoadFile } from '../../services/api.service';

const DetailUser = (props) => {

    const { isDetailUserOpen, setIsDetailUserOpen, dataDrawer, setDataDrawer, loadUserList } = props;
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectURL = URL.createObjectURL(selectedFile);
        setPreview(objectURL);
        return () => {
            URL.revokeObjectURL(objectURL);
        }

    }, [selectedFile])
    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length == 0) {
            setSelectedFile(undefined);
            return;
        }
        setSelectedFile(e.target.files[0]);
    }
    const handleSaveNewAvatar = async () => {
        const resUploadFile = await upLoadFile(selectedFile, "avatar");
        if (resUploadFile.data) {
            const newAvatar = resUploadFile.data.fileUploaded;

            const resUpdateNewAvatar = await updateAvatarAPI(newAvatar, dataDrawer._id, dataDrawer.phone, dataDrawer.fullName);
            if (resUpdateNewAvatar.data) {
                notification.success({
                    message: "Upload New Avatar",
                    description: "Thay doi avatar thanh cong"
                })
                setIsDetailUserOpen(false);
                setSelectedFile(undefined);
                await loadUserList();

            }
            else {
                notification.error({
                    message: "Upload New Avatar",
                    description: JSON.stringify(resUpdateNewAvatar.message)
                })
            }
        }
        else {
            notification.error({
                message: "Upload New Avatar",
                description: JSON.stringify(resUploadFile.message)
            })
        }



    }


    const onClose = () => {
        setIsDetailUserOpen(false);
    };
    return (
        <>

            <Drawer
                title="Detail Information"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onClose}
                open={isDetailUserOpen}
                width="40vw"

                style={{
                    padding: '10px',

                }}

            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around"
                    }}
                >
                    <img src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDrawer?.avatar}`}
                        alt=""
                        style={{
                            height: "150px",
                            width: '150px',
                            border: "2px solid #ccc",
                            borderRadius: "10px"
                        }} />
                    <div

                    >
                        <p>Full Name :{dataDrawer?.fullName}</p>
                        <br />
                        <p>Email :{dataDrawer?.email}</p>
                        <br />

                        <p>Phone Number :{dataDrawer?.phone}</p>
                        <br />
                        <p>Role :{dataDrawer?.role}</p>
                    </div>
                </div>
                <div
                    style={{
                        marginTop: "20px",
                        transform: "translate(95px, 0px)"
                    }}
                >
                    <label htmlFor='btnUploadImg'
                        style={{
                            backgroundColor: "orange",
                            padding: "10px 5px",
                            borderRadius: "10px",
                            color: "white"
                        }}
                    >UpLoad IMG</label>
                    <input type="file" onChange={onSelectFile} id='btnUploadImg' hidden />

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
                                    transform: "translate(-37px, 0px)"
                                }}
                            />
                            <button
                                style={{
                                    backgroundColor: "blue",
                                    color: "white",
                                    border: "none",
                                    padding: '10px',
                                    borderRadius: "10px",
                                    transform: "translate(15px, 0px)",
                                    marginTop: "10px"

                                }}
                                onClick={() => {
                                    handleSaveNewAvatar()

                                }}
                            >

                                SAVE
                            </button>
                        </>
                    }

                </div>
            </Drawer >


        </>


    );
}
export default DetailUser;