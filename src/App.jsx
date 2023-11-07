import React, {useState} from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Login from "./pages/Auth/Login/Login.jsx";
import CustomerDashboard from "./pages/Dashboard/CustomerDashboard/CustomerDashboard.jsx";
import AdminDashboard from "./pages/Dashboard/AdminDashboard/AdminDashboard.jsx";
import LoginLayout from "./layouts/LoginLayout/LoginLayout.jsx";
import CustomerLayout from "./layouts/CustomerLayout/CustomerLayout.jsx";
import AdminLayout from "./layouts/AdminLayout/AdminLayout.jsx";
import CustomerTransactions from "./pages/Dashboard/CustomerTransactions/CustomerTransactions.jsx";
import CustomerCustomers from "./pages/Dashboard/CustomerCustomers/CustomerCustomers.jsx";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage.jsx";
import AdminCustomers from "./pages/Dashboard/AdminСustomers/AdminСustomers.jsx";

const App = () => {
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
                           {<CustomerLayout setUserRole={setUserRole} >
                               <CustomerDashboard/>
                           </CustomerLayout>}
                />
                <Route path="/customer/transactions"
                       element=
                           {<CustomerLayout setUserRole={setUserRole} >
                               <CustomerTransactions/>
                           </CustomerLayout>}
                />
                <Route path="/customer/customers"
                       element=
                           {<CustomerLayout setUserRole={setUserRole} >
                               <CustomerCustomers/>
                           </CustomerLayout>}
                />
                <Route path="/admin/accounts"
                       element=
                           {<AdminLayout >
                               <AdminDashboard/>
                           </AdminLayout>}/>
                <Route path="/admin/customers"
                       element=
                           {<AdminLayout >
                               <AdminCustomers/>
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
