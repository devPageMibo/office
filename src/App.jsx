// import React, {useState} from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//
// import Login from "./pages/Auth/Login/Login.jsx";
// import CustomerLogin from "./pages/Auth/CustomerLogin.jsx";
// import AdminDashboard from "./pages/Dashboard/AdminDashboard/AdminDashboard.jsx";
// import CustomerDashboard from "./pages/Dashboard/CustomerDashboard/CustomerDashboard.jsx";
// import CustomerTransactions from "./pages/Dashboard/CustomerTransactions/CustomerTransactions.jsx";
// import './App.css'
// import "./assets/fonts/font-LiberationSans/font-LiberationSans.css"
// import CustomerCustomers from "./pages/Dashboard/CustomerCustomers/CustomerCustomers.jsx";
//
// const App = () => {
//     const [userRole, setUserRole] = useState(null);
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/admin/dashboard" element={<AdminDashboard setUserRole={setUserRole} />} />
//                 <Route path="/customer/dashboard" element={<CustomerDashboard setUserRole={setUserRole} />} />
//                 <Route path="/customer/transactions" element={<CustomerTransactions setUserRole={setUserRole} />} />
//                 <Route path="/customer/customers" element={<CustomerCustomers setUserRole={setUserRole} />} />
//                 <Route path="/login" element={<Login setUserRole={setUserRole} />} />
//             </Routes>
//         </Router>
//     );
// };
//
// export default App;


import React, {useState} from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Login from "./pages/Auth/Login/Login.jsx";
import CustomerDashboard from "./pages/Dashboard/CustomerDashboard/CustomerDashboard.jsx";
import AdminDashboard from "./pages/Dashboard/AdminDashboard/AdminDashboard.jsx";
import LoginLayout from "./layouts/LoginLayout/LoginLayout.jsx";
import CustomerLayout from "./layouts/CustomerLayout/CustomerLayout.jsx";
import AdminLayout from "./layouts/AdminLayout/AdminLayout.jsx";
import useCustomerData from "./hooks/useCustomerData.jsx";
import CustomerTransactions from "./pages/Dashboard/CustomerTransactions/CustomerTransactions.jsx";
import CustomerCustomers from "./pages/Dashboard/CustomerCustomers/CustomerCustomers.jsx";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage.jsx";

const App = () => {
    const { customerData, error } = useCustomerData();
    // const { setUserRole } = useAuth();
    const [userRole, setUserRole] = useState(null);
    return (
        <Router>
            <Routes>
                <Route path="/login"
                       element=
                           {<LoginLayout>
                               <Login setUserRole={setUserRole}/>
                           </LoginLayout>}
                />
                <Route path="/customer/dashboard"
                       element=
                           {<CustomerLayout setUserRole={setUserRole} customerData={customerData}>
                               <CustomerDashboard/>
                           </CustomerLayout>}
                />
                <Route path="/customer/transactions"
                       element=
                           {<CustomerLayout setUserRole={setUserRole} customerData={customerData}>
                               <CustomerTransactions/>
                           </CustomerLayout>}
                />
                <Route path="/customer/customers"
                       element=
                           {<CustomerLayout setUserRole={setUserRole} customerData={customerData}>
                               <CustomerCustomers/>
                           </CustomerLayout>}
                />
                <Route path="/admin/dashboard"
                       element=
                           {<AdminLayout>
                               <AdminDashboard/>
                           </AdminLayout>}/>
                <Route
                    path="*"
                    element={<Navigate to="/404" />}
                />
                <Route path="/404" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default App;
