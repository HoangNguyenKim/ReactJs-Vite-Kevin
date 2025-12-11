import { Button, Drawer, Timeline, Descriptions } from 'antd';
import { useState, useEffect } from 'react';

const DetailUser = (props) => {
    const { isDetailUserOpen, setIsDetailUserOpen, dataDrawer, setDataDrawer } = props;
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

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
    // const items = [
    //     {
    //         label: 'UserName',
    //         children: 'Zhou Maomao',
    //     },
    //     {
    //         label: 'Live',
    //         span: 'filled', // span = 2
    //         children: 'Hangzhou, Zhejiang',
    //     },
    //     {
    //         label: 'Remark',
    //         span: 'filled', // span = 3
    //         children: 'empty',
    //     },
    //     {
    //         label: 'Address',
    //         span: 1, // span will be 3 and warning for span is not align to the end
    //         children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    //     },
    // ];

    // Source - https://stackoverflow.com/a/57781164
    // Posted by Jay Wick
    // Retrieved 2025-12-11, License - CC BY-SA 4.0



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

                    {selectedFile && <img
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
                    />}

                </div>
            </Drawer >


        </>


    );
}
export default DetailUser;