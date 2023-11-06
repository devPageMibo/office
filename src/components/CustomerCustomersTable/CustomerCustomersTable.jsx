// import React from 'react';
// import { TransactionsTableContent } from "../CustomerTransactionsSection/Styles.jsx";
//
// const CustomerCustomersTable = ({ ...customerData }) => {
//
//
//     return (
//         <TransactionsTableContent>
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Transaction ID</th>
//                     <th>Name</th>
//                     <th>Status</th>
//                     <th>Description</th>
//                     <th>Country</th>
//                     <th>Recovered Amount</th>
//                     <th>Date</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//
//                     <tr key={}>
//                         <td>{}</td>
//                         <td>{}</td>
//                         <td>{}</td>
//                         <td>{}</td>
//                         <td>{}</td>
//                         <td>{}</td>
//                         <td>{}</td>
//                     </tr>
//
//                 </tbody>
//             </table>
//         </TransactionsTableContent>
//     );
// };
//
// export default TransactionsTable;

import React, { useState, useEffect } from 'react';
import useFetchCustomers from "../../hooks/useFetchCustomers.jsx";
import {CustomerCustomersContent} from "./Styles.jsx";

// const apiUrl = 'https://highdardata.xyz/office/v1/adminCustomers/getAll';
//
// const useFetchCustomers = (accessToken) => {
//     const [customers, setCustomers] = useState([]);
//     const [pageSize, setPageSize] = useState(10);
//
//     const fetchCustomers = async () => {
//         try {
//             const accessToken = localStorage.getItem('accessToken');
//             const response = await fetch(apiUrl, {
//                 headers: {
//                     Authorization: `Bearer ${accessToken}`,
//                 },
//             });
//             const data = await response.json();
//             setCustomers(data);
//         } catch (error) {
//             console.error('Error fetching customers:', error);
//         }
//     };
//
//     useEffect(() => {
//         setPageSize(10);
//         fetchCustomers();
//     }, [accessToken]);
//
//     return { customers, pageSize, setPageSize };
// };

const CustomerCustomersTable = ({ accessToken }) => {
    const { customers, pageSize, setPageSize } = useFetchCustomers(accessToken);

    return (
        <CustomerCustomersContent>
            <select value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
                <option value="1">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Country</th>
                    <th>Recovered amount</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {customers.slice(0, pageSize).map((customer) => (
                    <tr key={customer.id}>
                        <td>{customer.numericId}</td>
                        <td>{customer.name}</td>
                        <td>{customer.status}</td>
                        <td>{customer.country}</td>
                        <td>{customer.recoveredAmount}</td>
                        <td>{customer.date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </CustomerCustomersContent>
    );
};

export default CustomerCustomersTable;

