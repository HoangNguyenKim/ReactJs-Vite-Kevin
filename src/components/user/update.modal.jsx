import { Input, message } from 'antd';
import { useEffect, useState } from "react";
import { Button, notification, Space, Modal } from 'antd';
import { updateUserAPI } from '../../services/api.service';
const UpdateUserModal = (props) => {
    const { isUpdateModalOpen, setIsUpdateModalOpen, dataUpdate, setDataUpdate, loadUserList } = props;
    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
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
    const handleEdit = async () => {
        const res = await updateUserAPI(id, fullName, PhoneNumber);

        if (res.data) {
            notification.success({
                message: "Update User",
                description: "Cập nhật thành công"
            })
            resetAndCloseModal();
            await loadUserList();

        }
        else {
            notification.error({
                message: "Update User",
                description: JSON.stringify(res.message)
            })
        }
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