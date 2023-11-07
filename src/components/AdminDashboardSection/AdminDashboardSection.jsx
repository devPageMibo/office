import {AdminDashboardContent} from "./Style.jsx";
import React from "react";
import AdminCustomersAllTable from "../AdminCustomersAllTable/AdminCustomersAllTable.jsx";

export const AdminDashboardSection = () => {
    return (
     <AdminDashboardContent>
         <h1>Admin Dashboard</h1>
            <AdminCustomersAllTable/>
     </AdminDashboardContent>
    )
}