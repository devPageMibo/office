import React from 'react';
import {CustomerCustomersContent} from "./Styles.jsx";
import useFetchCustomers from "../../hooks/useFetchCustomers.jsx";



const CustomerCustomersTable = ({ accessToken }) => {
    const { customers, pageSize, setPageSize } = useFetchCustomers(accessToken);

    return (
        <CustomerCustomersContent>
            <select value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
                <option value="10">10</option>
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

