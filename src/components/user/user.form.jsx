import { Input, message } from 'antd';
import { useState } from "react";
import { createUserAPI } from '../../services/api.service';
import { Button, notification, Space } from 'antd';
const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const addNewUser = async () => {
        const res = await createUserAPI(fullName, Email, Password, PhoneNumber);

        if (res.data) {
            notification.success({
                message: "Create User",
                description: "Tao moi thanh cong"
            })
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
            <Button type="primary" style={{
                marginTop: "5px",
                display: "flex",
                float: "right",
                padding: "20px"
            }}
                onClick={() => { addNewUser() }}
            >
                Primary
            </Button>
        </div>
    )
}
export default UserForm;