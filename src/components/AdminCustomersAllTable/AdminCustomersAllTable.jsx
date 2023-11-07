import React from 'react';
import { CustomersAllContent } from "./Styles.jsx";
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import edit from './../../assets/images/edit.svg';
import useFetchCustomersAll from "../../hooks/useFetchCustomersAll.jsx";

const AdminCustomersAllTable = ({ accessToken }) => {
    const {
        customers,
        pageSize,
        setPageSize,
        currentPage,
        setCurrentPage,
        totalPages,
        searchTerm,
        setSearchTerm,
        handlePageChange,
        selectedDate,
        handleDateChange,
    } = useFetchCustomersAll(accessToken);

    return (
        <CustomersAllContent>
            <div className="table-control">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Пошук за ім'ям, електронною поштою, телефоном тощо"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="date-filter">
                    <ReactDatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd.MM.yyyy"
                    />
                </div>
            </div>


            <select value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <table>
                <thead>
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
                </thead>
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
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        disabled={page === currentPage}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </CustomersAllContent>
    );
};

export default AdminCustomersAllTable;
