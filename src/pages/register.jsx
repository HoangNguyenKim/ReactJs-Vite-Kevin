import { Button, Input, Form, notification, Grid, Typography, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;


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
            <Row
                style={{
                    marginTop: "20px",
                    width: '100%'
                }}
                justify={'center'}>
                <Col>
                    <Title>Register</Title>
                </Col>
            </Row>
            <Row
                style={{
                    marginTop: "15px",
                    width: "100%"
                }}
                justify={'center'}
            >
                <Col
                    xs={24} md={12} lg={8}

                >
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



                        <Button type="primary"

                            onClick={() => {
                                form.submit()
                            }}
                        >
                            Register
                        </Button>
                        {/* <Button
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
                        </Button> */}

                    </Form >

                </Col>

            </Row>



        </>
    );
}
export default RegisterPage;