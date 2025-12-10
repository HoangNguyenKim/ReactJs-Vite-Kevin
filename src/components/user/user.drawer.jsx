import { Button, Drawer, Timeline, Descriptions } from 'antd';

const DetailUser = (props) => {
    const { isDetailUserOpen, setIsDetailUserOpen, dataDrawer, setDataDrawer } = props;
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
                    <input type="file" id='btnUploadImg' hidden />

                </div>
            </Drawer >
        </>


    );
}
export default DetailUser;