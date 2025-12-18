import { Button, Input, Form, notification, Grid, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

import { registerUserAPI } from "../services/api.service";

const RegisterPage = () => {
    let navigate = useNavigate();
    const onFinish = async (values) => {

        console.log(values);
        const resRegister = await registerUserAPI(
            values.fullName,
            values.email,
            values.password,
            values.phone

        );

        if (resRegister.data) {
            notification.success({
                message: 'Register User',
                description: 'Dang ky thanh cong'
            })
            navigate('/login');

        }
        else {
            {
                notification.error({
                    message: 'Register User',
                    description: resRegister.message
                })

            }
        }



    };

    // const onFinishFailed = errorInfo => {
    //     console.log('Failed:', errorInfo);
    // };
    const [form] = Form.useForm();
    return (
        <>
            {/* <Row
                style={{
                    marginTop: "20px",
                    width: '100%'
                }}
                justify={'center'}>
                <Col>
                    <Title>Login</Title>
                </Col>
            </Row>
            <Row
                style={{
                    marginTop: "15px",
                    width: '100%'
                }}
                justify={'center'}
            >
                <Col
                    xs={24} md={12} lg={8}

                >
                    <Form
                        name="login"
                        initialValues={{ remember: true }}
                        style={{
                            border: 'solid 2px #ccc',
                            borderRadius: '10px',
                            padding: '20px',

                        }}

                        onFinish={onFinish}
                    >


                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email!'
                                },
                                {

                                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Unvalid  format'
                                }
                            ]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Email" />
                        </Form.Item>



                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                        </Form.Item>


                        <Form.Item>
                            <Flex justify="space-between" align="center">
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <a href="">Forgot password</a>
                            </Flex>
                        </Form.Item>



                        <Form.Item>
                            <Button block type="primary" htmlType="submit">
                                Log in
                            </Button>
                            or
                            <Link to="/register"> Register now!</Link>

                        </Form.Item>





                    </Form>
                </Col>
            </Row > */}

            <Form
                form={form}
                name="basic"
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
                style={{
                    margin: "30px",

                }}
            >
                <Row
                    gutter={[0, 16]}
                    justify={"center"}
                >
                    <Col span={12}>
                        <Form.Item
                            label="Full Name"
                            name="fullName"
                            rules={[{
                                required: true,
                                message: 'Please input your full name!'
                            }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row
                    gutter={[0, 16]}
                    justify={"center"}
                >
                    <Col span={12}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email!'
                                },
                                {
                                    required: true,
                                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Unvalid Email Format'
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row
                    gutter={[0, 16]}
                    justify={"center"}
                >
                    <Col span={12}>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{
                                required: true,
                                message: 'Please input your password!'
                            }]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Col>
                </Row>
                <Row
                    gutter={[0, 16]}
                    justify={"center"}
                >
                    <Col span={12}>
                        <Form.Item
                            label="Phone Number"
                            name="phone"
                            rules={[
                                {

                                    required: true,
                                    message: 'Please input your password!'
                                },
                                {

                                    pattern: /^0\d{9}$/,
                                    message: 'Unvalid Format'
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item >
                    </Col>
                </Row>

                <Row
                    gutter={[10, 0]}
                    justify={"center"}
                >
                    <Col
                        span={4}
                    >
                        <Button type="primary"

                            onClick={() => {
                                form.submit()
                            }}
                        >
                            Register
                        </Button>
                        <Button
                            onClick={() => {
                                const name = form.getFieldValue("fullName");
                                form.setFieldsValue(
                                    {
                                        email: `${name}@gmail.com`
                                    }
                                );
                            }}
                        >
                            test
                        </Button>
                    </Col>

                </Row>

            </Form >

        </>
    );
}
export default RegisterPage;