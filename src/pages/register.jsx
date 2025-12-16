import { Button, Input, Form } from "antd";

const RegisterPage = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const [form] = Form.useForm();
    return (
        <>
            <Form
                form={form}
                name="basic"
                layout="vertical"

                onFinish={onFinish}
                autoComplete="off"
                style={{
                    margin: "30px"
                }}
            >
                <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Phone Number"
                    name="phone"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Button type="primary"
                    style={{
                        marginLeft: '30px'
                    }}
                    onClick={() => {
                        form.submit()
                    }}
                >
                    Register
                </Button>


            </Form>


        </>
    );
}
export default RegisterPage;