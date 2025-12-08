import { Input, message } from 'antd';
import { useState } from "react";
import { createUserAPI } from '../../services/api.service';
import { Button, notification, Space, Modal } from 'antd';
const UserForm = (props) => {
    const { loadUserList } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fullName, setFullName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");

    // const handleCancel = () => {
    //     setIsModalOpen(false);
    // };
    const resetAndCloseModal = () => {
        setEmail("");
        setFullName("");
        setPassword("");
        setPhoneNumber("");
        setIsModalOpen(false);
    }
    const handleCreate = async () => {
        const res = await createUserAPI(fullName, Email, Password, PhoneNumber);

        if (res.data) {
            notification.success({
                message: "Create User",
                description: "Tao moi thanh cong"
            })
            resetAndCloseModal();
            await loadUserList();

        }
        else {
            notification.error({
                message: "Create User",
                description: JSON.stringify(res.message)
            })
        }

    }
    return (
        <div className='user-form'
            style={{
                margin: "20px 10px",
                padding: "10px"
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "5px"
                }}
            >
                <h2>Table User</h2>
                <Button type="primary"
                    onClick={() => setIsModalOpen(true)}
                >
                    Create User
                </Button>
            </div>
            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleCreate}
                onCancel={() => {
                    setIsModalOpen(false);
                }}
                maskClosable={false}
                okText="Create"
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
                            placeholder="Nguyen Van A"
                            value={fullName}
                            onChange={(event) => { setFullName(event.target.value) }}
                        />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input
                            placeholder="abc@gmail.com"
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
                            placeholder="0314344234234"
                            value={PhoneNumber}
                            onChange={(event) => { setPhoneNumber(event.target.value) }}
                        />
                    </div>
                </div>
            </Modal>
        </div>

    )
}
export default UserForm;