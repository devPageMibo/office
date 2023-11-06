import React from 'react';
import {Sidebar} from "../../components/Sidebar/Sidebar.jsx";
import {AdminHeader} from "../../components/AdminHeader/AdminHeader.jsx";
import {AdminLayoutContent} from "./Styles.jsx";

const AdminLayout = ({children, setUserRole}) => {
    return (
        <AdminLayoutContent>
            <AdminHeader/>
            <div className="page_content">
                <Sidebar setUserRole={setUserRole}/>
                {children}
            </div>
        </AdminLayoutContent>
    );
};

export default AdminLayout;
