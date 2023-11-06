import React from 'react';
import { AuthProvider } from './contexts/AuthContext.jsx';
import App from './App';

const Root = () => {
    return (
        <AuthProvider>
            <App  />
        </AuthProvider>
    );
};

export default Root;
