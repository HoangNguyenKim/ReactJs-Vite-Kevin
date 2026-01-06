import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { Navigate, Link } from "react-router-dom";
import React from 'react';
import { Button, Result } from 'antd';

const PrivateRoute = (props) => {
    const { user } = useContext(AuthContext)
    if (user && user.id) {
        return (
            <>
                {props.children}
            </>
        )
    }
    return (
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."

            extra={<Button type="primary"><Link to="/login">Login Now</Link></Button>}
        />
    );
}
export default PrivateRoute;