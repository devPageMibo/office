import {AdminCustomersContent} from "./Styles.jsx";import React from "react";
import {AdminCustomersSection} from "../../../components/AdminCustomersSection/AdminCustomersSection.jsx";

export const AdminCustomers = () => {

    return (
        <AdminCustomersContent>
            <div className="customers_content">
               <AdminCustomersSection/>
            </div>
        </AdminCustomersContent>
    )
}

export default AdminCustomers;