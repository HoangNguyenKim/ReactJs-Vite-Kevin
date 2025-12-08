import { Input, message } from 'antd';
import { useState } from "react";
import { Button, notification, Space, Modal } from 'antd';
const UpdateUserModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [fullName, setFullName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const resetAndCloseModal = () => {
        setEmail("");
        setFullName("");
        setPassword("");
        setPhoneNumber("");
        setIsModalOpen(false);
    }
    const handleEdit = () => {
        resetAndCloseModal();
    }
    return (
        <>

            <Modal
                title="Edit User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleEdit}
                onCancel={() => {
                    setIsModalOpen(false);
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
                        <span>Full Name</span>
                        <Input
                            placeholder=""
                            value={fullName}
                            onChange={(event) => { setFullName(event.target.value) }}
                        />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input
                            placeholder=""
                            value={Email}
                            onChange={(event) => { setEmail(event.target.value) }}
                        />
                    </div>
                    <div>
                        <span>Password</span>
                        <Input.Password
                            placeholder=""
                            value={Password}
                            onChange={(event) => { setPassword(event.target.value) }}
                        />
                    </div>
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