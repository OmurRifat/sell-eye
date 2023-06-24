/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('/ordersInfo.json')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const authInfo = {
        orders,
        setOrders
    };
    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;