import React, {useState} from 'react';
import {LoginForm} from "../../components/LoginForm/LoginForm.jsx";

const CustomerLogin = () => {

    return (
        <div className="login-form">
            <h2>Customer Login</h2>
            <LoginForm/>
        </div>
    );
};

export default CustomerLogin;
