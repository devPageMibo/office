// import React, { createContext, useContext, useState } from 'react';
//
// const AuthContext = createContext();
//
// export const AuthProvider = ({ children }) => {
//     const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || null);
//
//     const login = (token) => {
//         setAccessToken(token);
//         localStorage.setItem('accessToken', token);
//     };
//
//     const logout = () => {
//         setAccessToken(null);
//         localStorage.removeItem('accessToken');
//     };
//
//     return (
//         <AuthContext.Provider value={{ accessToken, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
//
// export const useAuth = () => {
//     return useContext(AuthContext);
// };

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || null);
    const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || null);

    const login = (token, role) => {
        setAccessToken(token);
        setUserRole(role);
        localStorage.setItem('accessToken', token);
        localStorage.setItem('userRole', role);
    };

    const logout = () => {
        setAccessToken(null);
        setUserRole(null); // Очистити роль при виході
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userRole'); // Видалити роль з локального сховища при виході
    };

    return (
        <AuthContext.Provider value={{ accessToken, userRole, login, logout }}> {/* Додано userRole до значень, переданих контекстом */}
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

