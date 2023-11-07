import React from "react";
import logo from "./../../assets/images/logo.svg"
import accountsIcon from "./../../assets/images/accounts.svg"
import customersIcon from "./../../assets/images/customers.svg"
import dashboardIcon from "./../../assets/images/dashboard.svg"
import transactionsIcon from "./../../assets/images/transactions.svg"
import ROUTES from "./../../router/routes.jsx"
import {SidebarLeft} from "./Styles.jsx";
import {Link} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext.jsx";


// const UserRoles = {
//     customer: "CustomerLayout", admin: "Admin",
// }

const ADMIN_MENUS = [
    {
        name: 'accounts', path: '/admin/accounts', icon: accountsIcon,
    },
    {
        name: 'customers', path: '/admin/customers', icon: customersIcon,
    },
];

const CUSTOMER_MENUS = [
    {
        name: 'dashboard', path: '/customer/dashboard', icon: dashboardIcon,
    },
    {
        name: 'transactions', path: '/customer/transactions', icon: transactionsIcon,
    },
    {
        name: 'customers', path: '/customer/customers', icon: customersIcon,
    },
];


export const Sidebar = ({setUserRole}) => {
    const userRole = localStorage.getItem('userRole')
    // console.log('Sidebar userRole', userRole)
    const menus = userRole === "Customer" ? CUSTOMER_MENUS : ADMIN_MENUS ;
    // const menus = userRole === "CustomerLayout" ? ADMIN_MENUS : CUSTOMER_MENUS ;


    return (
        <SidebarLeft>
            <div className="header-sidebar">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <ul className="sidebar-list">
                    {menus.map((item) => (
                        <li key={item.name}>
                            <Link to={item.path}>
                                <img src={item.icon} alt={item.name} />
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="coin-price">
                <ul>
                    <li>
                        <span>
                            Buy
                        </span>
                        <span>
                            EUR
                        </span>
                    </li>
                    <li>
                        <span>1 BTC</span>
                        <span>0000.00</span>
                    </li>
                    <li>
                        <span>1 ETH</span>
                        <span>0000.00</span>
                    </li>
                    <li>
                        <span>1 LTC</span>
                        <span>0000.00</span>
                    </li>
                    <li>
                        <span>1 USDT</span>
                        <span>0000.00</span>
                    </li>

                </ul>
            </div>
        </SidebarLeft>);
};
