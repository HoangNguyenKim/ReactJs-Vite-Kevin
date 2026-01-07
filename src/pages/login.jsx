import React, { useContext, useState } from 'react';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Row, Flex, Form, Input, Typography, notification, message, Divider } from 'antd';

import { Link, useNavigate } from 'react-router-dom';
import { loginAPI } from '../services/api.service';
import { AuthContext } from '../components/context/auth.context';


const { Title } = Typography;

const LoginPage = () => {
    let navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const { setUser } = useContext(AuthContext);
    const onFinish = async (values) => {
        if (loading) return;
        setLoading(true);
        try {
            const resLogin = await loginAPI(values.username, values.password);
            if (resLogin.data) {

                message.success(
                    "Dang nhap thanh cong"
                )
                localStorage.setItem("access_token", resLogin.data.access_token);
                setUser(resLogin.data.user);


                navigate('/');
            }
            else {
                notification.error({
                    message: "Login",
                    description: resLogin.message
                })
            }
        }
        catch {
            notification.error({
                message: "Login",
                description: "ERORR SERVER"
            })

        }
        finally {
            setLoading(false);
        }
    }


    return (
        <>
            <Row
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
                        form={form}
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
                            <Input.Password onKeyDown={(e) => {
                                if (e.key == "Enter") {
                                    form.submit();
                                }
                            }} prefix={<LockOutlined />} placeholder="Password" />
                        </Form.Item>


                        <Form.Item>
                            <Flex justify="space-between" align="center">
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Link to={"/"}>Return Homepage</Link>
                            </Flex>
                        </Form.Item>

                        <Divider size="small" />

                        <Form.Item>
                            <Button block
                                type="primary"
                                onClick={() => form.submit()}
                                loading={loading}

                            >
                                Log in
                            </Button>
                            or
                            <Link to="/register"> Register now!</Link>

                        </Form.Item>





                    </Form>

                </Col>
            </Row >

        </>
    );
}

export default LoginPage;