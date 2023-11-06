import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from "../../../components/LoginForm/LoginForm.jsx";
import imageBg from "../../../assets/images/thank-you_bg.webp";
import { LoginSection } from "./Styles.jsx";

const Login = ({ setUserRole }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); // Додайте стан для відстеження статусу завантаження

    useEffect(() => {
        const checkAccessToken = async () => {
            const accessToken = localStorage.getItem('accessToken');
            if (accessToken) {
                try {
                    const response = await fetch('https://highdardata.xyz/office/v1/account/me', {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${accessToken}`,
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setUserRole(data.role);
                        if (data.role === 'Admin') {
                            navigate('/admin/dashboard');
                        } else if (data.role === 'Customer') {
                            navigate('/customer/dashboard');
                        }
                    } else {
                        console.error('Помилка при отриманні ролі:', response.status);
                    }
                } catch (error) {
                    console.error('Помилка при отриманні ролі:', error);
                } finally {
                    setLoading(false); // Встановлюємо loading в false, коли завершено перевірку accessToken
                }
            } else {
                setLoading(false); // Встановлюємо loading в false, коли accessToken не існує
            }
        };

        checkAccessToken();
    }, [setUserRole, navigate]);

    if (loading) {
        return <div>Loading...</div>; // Показати "Loading..." поки триває перевірка accessToken
    }

    return (
        <LoginSection>
            <div className="content">
                <div className="login-form">
                    <h2 className={"title"}>Login</h2>
                    <LoginForm setUserRole={setUserRole} />
                </div>
                <div className="image">
                    <img src={imageBg} alt="img" />
                </div>
            </div>
        </LoginSection>
    );
};

export default Login;
