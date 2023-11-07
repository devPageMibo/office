import React from 'react';
import {CustomerCustomersContent} from "./Styles.jsx";
import useFetchCustomers from "../../hooks/useFetchCustomers.jsx";
import edit from "../../assets/images/edit.svg";
import bin from "../../assets/images/bin.svg";
import add from "../../assets/images/add.svg";


const CustomerCustomersTable = ({accessToken}) => {
    const {
        customers,
        pageSize,
        setPageSize,
        currentPage,
        setCurrentPage,
        totalPages,
        handlePageChange,
        fetchCustomers
    } = useFetchCustomers(accessToken);
    const userRole = localStorage.getItem('userRole');
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

    const handleDeleteCustomer = async (customerId) => {
        console.log(customerId)
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(`https://highdardata.xyz/office/v1/adminCustomers/delete?id=${customerId}`, {

                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });


            if (response.ok) {
                fetchCustomers();
            } else {
                console.error('Помилка при видаленні покупця');
            }
        } catch (error) {
            console.error('Помилка при видаленні покупця', error);
        }
    };

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
                    {userRole === 'Admin' && (<td></td>)}
                    {userRole === 'Admin' && (<td><img className="add" src={add} alt="icon"/></td>)}
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
                        {userRole === 'Admin' && (
                            <td>
                                <img className="edit" src={edit} alt="icon"/>
                            </td>
                        )}
                        {userRole === 'Admin' && (
                            <td>
                                <img className="bin" src={bin} alt="icon"
                                     onClick={() => handleDeleteCustomer(customer.id)}/>
                            </td>
                        )}

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
            {/*    /!* Умовний рендерінг кнопки для наступної сторінки *!/*/}
            {/*    {customers.length >= pageSize && currentPage < totalPages && (*/}
            {/*        <button*/}
            {/*            onClick={() => handlePageChange(currentPage + 1)}*/}
            {/*        >*/}

            {/*        </button>*/}
            {/*    )}*/}
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


        </CustomerCustomersContent>
    );
};

export default CustomerCustomersTable;

