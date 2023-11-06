// import React, { useEffect, useState } from 'react';
// import { Sidebar } from '../../../components/Sidebar/Sidebar.jsx';
// import { Dashboard } from '../../../components/Dashboard/Dashboard.jsx';
// import { useAuth } from '../../../contexts/AuthContext.jsx';
// import { CustomerDashboardContent } from './Styles.jsx';
// import { User } from '../../../components/User/User.jsx';
// import { useNavigate } from "react-router-dom";
// import ROUTES from "../../../router/routes.jsx";
//
//
//
// const CustomerDashboard = ({ setUserRole }) => {
//     const { userRole } = useAuth();
//     const [customerData, setCustomerData] = useState(null);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();
//
//
//
//     useEffect(() => {
//         const accessToken = localStorage.getItem("accessToken");
//         if (!accessToken) {
//             navigate("/login");
//         }
//     }, [navigate]);
//
//     useEffect(() => {
//         const fetchCustomerData = async () => {
//             try {
//                 const accessToken = localStorage.getItem('accessToken');
//                 const response = await fetch('https://highdardata.xyz/office/v1/account/customerData', {
//                     headers: {
//                         Authorization: `Bearer ${accessToken}`,
//                     },
//                 });
//
//                 if (response.ok) {
//                     const data = await response.json();
//                     setCustomerData(data);
//                 } else {
//                     setError('Failed to fetch customer data');
//                 }
//             } catch (error) {
//                 console.error('An error occurred while fetching customer data:', error);
//                 setError('An error occurred while fetching customer data');
//             }
//         };
//
//         fetchCustomerData();
//     }, []);
//
//
//     return (
//         <CustomerDashboardContent>
//             <div className="page_content">
//                 <User {...customerData}/>
//                 <div className="dashboard_content">
//                     <Sidebar  setUserRole={setUserRole} />
//                     <Dashboard {...customerData}/>
//                 </div>
//             </div>
//             {error && <div className="error-message">{error}</div>}
//             {/*{customerData && <pre>CustomerLayout Data: {JSON.stringify(customerData)}</pre>}*/}
//         </CustomerDashboardContent>
//     );
// };
//
// export default CustomerDashboard;


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
