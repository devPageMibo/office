import {AdminDashboardContent} from "./Style.jsx";
import React from "react";
import useCustomerDataAll from "../../hooks/useCustomerDataAll.jsx";
import AdminCustomersAllTable from "../AdminCustomersAllTable/AdminCustomersAllTable.jsx";

export const AdminDashboardSection = ({ accessToken }) => {
    // const { customersAll, pageSize, setPageSize } = useCustomerDataAll(accessToken);
    // console.log(customersAll)
    return (
     <AdminDashboardContent>
         <h1>Admin Dashboard</h1>
            <AdminCustomersAllTable/>
     </AdminDashboardContent>
    )
}