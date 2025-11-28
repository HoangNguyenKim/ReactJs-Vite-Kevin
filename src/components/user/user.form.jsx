import { Input } from 'antd';
import { Button } from 'antd';
const UserForm = () => {
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
                    <Input placeholder="Nguyen Van A" />
                </div>
                <div>
                    <span>Email</span>
                    <Input placeholder="abc@gmail.com" />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password placeholder="" />
                </div>
                <div>
                    <span>Phone Number</span>
                    <Input placeholder="0314344234234" />
                </div>
            </div>
            <Button type="primary" style={{
                marginTop: "5px",
                display: "flex",
                float: "right",
                padding: "20px"
            }} >
                Primary
            </Button>
        </div>
    )
}
export default UserForm;