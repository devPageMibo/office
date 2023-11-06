
import React, { useState, useEffect } from 'react';
import {CustomersAllContent} from "./Styles.jsx";
import edit from './../../assets/images/edit.svg'

const apiUrl = 'https://highdardata.xyz/office/v1/customers/getAll';

const useFetchCustomersAll = (accessToken) => {
    const [customers, setCustomers] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchCustomers = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = await response.json();
            setCustomers(data);
            setTotalPages(Math.ceil(data.length / pageSize));
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, [accessToken]);

    const paginatedCustomers = customers.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return {
        customers: paginatedCustomers,
        pageSize,
        setPageSize,
        currentPage,
        setCurrentPage,
        totalPages,
    };
};

const AdminCustomersAllTable = ({ accessToken }) => {
    const {
        customers,
        pageSize,
        setPageSize,
        currentPage,
        setCurrentPage,
        totalPages,
    } = useFetchCustomersAll(accessToken);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <CustomersAllContent>
            <select value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <table>
                <tr>
                    <th> ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Case Number</th>
                    <th>Recovered Amount</th>
                    <th>Date</th>
                    <th></th>
                </tr>
                <tbody>
                {customers.map((customer) => (
                    <tr key={customer.id}>
                        <td>{customer.numericId}</td>
                        <td>{customer.firstName} {customer.lastName}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.caseNumber}</td>
                        <td>{customer.totalWorth}</td>
                        <td>{customer.caseStarted}</td>
                        <td><img src={edit} alt="icon"/></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                {/* Навігація між сторінками */}
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                    (page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            disabled={page === currentPage}
                        >
                            {page}
                        </button>
                    )
                )}
            </div>
        </CustomersAllContent>
    );
};

export default AdminCustomersAllTable;
