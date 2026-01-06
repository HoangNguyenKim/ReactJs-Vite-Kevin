import React, { createContext, useState } from 'react'
import { Spin } from 'antd';
// Initiate Context
export const AuthContext = createContext({
    id: "",
    email: "",
    phone: "",
    fullName: "",
    role: "",
    avatar: ""
});

// Provide Context
export const AuthWrapper = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    const [user, setUser] = useState({
        id: "",
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: ""
    });
    return (
        <AuthContext.Provider value={{ user, setUser, setIsLoading, isLoading }}>
            {props.children}
        </AuthContext.Provider>
    )
}


