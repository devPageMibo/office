import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext.jsx";
import AdminDashboard from "../../pages/Dashboard/AdminDashboard/AdminDashboard.jsx";
import CustomerDashboard from "../../pages/Dashboard/CustomerDashboard/CustomerDashboard.jsx";
import {FormWrap} from "./Styles.jsx";

export const LoginForm = ({ setUserRole }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [role, setRole] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (accessToken) => {
        setAccessToken(accessToken);
        try {
            const response = await fetch('https://highdardata.xyz/office/v1/account/me', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setRole(data.role);
                // setUserRole(data.role);
                localStorage.setItem('userRole', data.role);
                console.log('LoginForm add userRole', data.role)

            } else {
                console.error('Failed to fetch user role');
            }
        } catch (error) {
            console.error('An error occurred while fetching user role:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://highdardata.xyz/office/v1/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    client_type: 'ServiceManagerApi',
                    grant_type: 'password',
                    client_secret: 'j3h24j5hf67eiu34y572hrj',
                    username: email,
                    password: password,
                    expires_in: 1209600,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                handleLogin(data.access_token);
                login(data.access_token);
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setError('An error occurred while trying to log in');
        }
    };

    useEffect(() => {
        if (role && accessToken) {
            const redirectUrl = role === 'Admin' ? '/admin/accounts' : '/customer/dashboard';
            navigate(redirectUrl);
        }
    }, [role, accessToken]);

    return (
        <FormWrap>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        autoComplete="email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                        autoComplete="current-password"
                    />
                </div>
                {error && <div className="error-message">{error}</div>}
                <button className={"btn"} type="submit">Login</button>
            </form>
            {role && <div>User Role: {role}</div>}
        </FormWrap>
    );
};
