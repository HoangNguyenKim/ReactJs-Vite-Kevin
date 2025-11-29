import { Input } from 'antd';
import { Button } from 'antd';
import { useState } from "react";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const addNewUser = () => {
        alert("them moi user");
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