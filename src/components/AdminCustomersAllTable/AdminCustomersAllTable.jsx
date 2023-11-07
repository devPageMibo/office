import React, {useState} from 'react';
import {CustomersAllContent} from "./Styles.jsx";
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import edit from './../../assets/images/edit.svg';
import useFetchCustomersAll from "../../hooks/useFetchCustomersAll.jsx";
import CreateCustomerModal from "../CreateCustomerModal/CreateCustomerModal.jsx";


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
        fetchCustomers,

    } = useFetchCustomersAll(accessToken);

    const startIndex = (currentPage - 1) * pageSize + 1;
    const endIndex = Math.min(startIndex + pageSize - 1, customers.length);
    const totalEntries = customers.length;

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCreateCustomer = (formData) => {
    };

    // const today = new Date();
    // const formattedDate = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;

    const getCurrentDate = () => {
        const now = new Date();
        return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    };

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
                        selected={selectedDate || getCurrentDate()}
                        onChange={handleDateChange}
                        dateFormat="dd.MM.yyyy"
                    />
                </div>
                <div className="create-new">
                    <button onClick={openModal}>Create</button>
                </div>
                <CreateCustomerModal isOpen={isModalOpen} onClose={closeModal} onCreate={handleCreateCustomer} />
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
            {/*<div>*/}
            {/*    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (*/}
            {/*        <button*/}
            {/*            key={page}*/}
            {/*            onClick={() => handlePageChange(page)}*/}
            {/*            disabled={page === currentPage}*/}
            {/*        >*/}
            {/*            {page}*/}
            {/*        </button>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <div>
                <p>
                    Showing {startIndex} to {endIndex} of {totalEntries} entries
                </p>
                {totalPages > 1 && (
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        {'<'}
                    </button>
                )}
                <span>{currentPage}</span>
                {totalPages > 1 && (
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        {'>'}
                    </button>
                )}
            </div>
        </CustomersAllContent>
    );
};

export default AdminCustomersAllTable;

