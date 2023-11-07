import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext.jsx';
import useCustomerData from './../../../hooks/useCustomerData.jsx';
import { CustomerDashboardContent } from './Styles.jsx';
import {Dashboard} from "../../../components/Dashboard/Dashboard.jsx";

const CustomerDashboard = ({ setUserRole }) => {
    const { userRole } = useAuth();
    const navigate = useNavigate();
    const { customerData, error } = useCustomerData();


    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <CustomerDashboardContent>
            <div className="dashboard_content">
                <Dashboard {...customerData}/>
            </div>
            {error && <div className="error-message">{error}</div>}
        </CustomerDashboardContent>
    );
};

export default CustomerDashboard;
