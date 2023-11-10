import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {AdminDashboardSection} from "../../../components/AdminDashboardSection/AdminDashboardSection.jsx";
import {AdminDashboardContent} from "./Styles.jsx";

const AdminDashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <AdminDashboardContent>
            <div className="dashboard_content">
                <AdminDashboardSection/>
            </div>
            {/*{error && <div className="error-message">{error}</div>}*/}
        </AdminDashboardContent>

    );
};

export default AdminDashboard;
