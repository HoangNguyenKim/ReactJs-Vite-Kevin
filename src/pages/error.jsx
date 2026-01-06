import { Link, useRouteError } from "react-router-dom";
import { Button, Result } from 'antd';
import React from "react";
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <Result
            status="404"
            title="Oops!"
            subTitle={
                error.statusText || error.message

            }

            extra={<Button type="primary"><Link to="/">Back Home</Link></Button>}
        />
    );
}
