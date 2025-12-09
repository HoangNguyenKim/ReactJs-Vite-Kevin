import { Input, message } from 'antd';
import { useEffect, useState } from "react";
import { Button, notification, Space, Modal } from 'antd';
const UpdateUserModal = (props) => {
    const { isUpdateModalOpen, setIsUpdateModalOpen, dataUpdate, setDataUpdate } = props;
    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Password, setPassword] = useState("");
    const [Email, setEmail] = useState("");
    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhoneNumber(dataUpdate.phone);
        }
    }, [dataUpdate])
    const resetAndCloseModal = () => {
        setId("");
        setFullName("");
        setPhoneNumber("");
        setIsUpdateModalOpen(false);
        setDataUpdate(null);
    }
    const handleEdit = () => {
        resetAndCloseModal();
    }


    return (
        <>

            <Modal
                title="Edit User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isUpdateModalOpen}
                onOk={handleEdit}
                onCancel={() => {
                    resetAndCloseModal();

                }}
                maskClosable={false}
                okText="SAVE"
                cancelText="Cancel"
            >
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        flexDirection: "column",
                    }}
                >
                    <div>
                        <span>ID</span>
                        <Input
                            placeholder=""
                            value={id}
                            // onChange={(event) => { setId(event.target.value) }}
                            disabled
                        />
                    </div>
                    <div>
                        <span>Full Name</span>
                        <Input
                            placeholder=""
                            value={fullName}
                            onChange={(event) => { setFullName(event.target.value) }}
                        />
                    </div>
                    {/* <div>
                        <span>Password</span>
                        <Input.Password
                            placeholder=""
                            value={Password}
                            onChange={(event) => { setPassword(event.target.value) }}
                        />
                    </div> */}
                    <div>
                        <span>Phone Number</span>
                        <Input
                            placeholder=""
                            value={PhoneNumber}
                            onChange={(event) => { setPhoneNumber(event.target.value) }}
                        />
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default UpdateUserModal;