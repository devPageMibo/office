import React, {useState} from 'react';
import {CustomerCustomersContent} from './Styles.jsx';
import useFetchCustomers from '../../hooks/useFetchCustomers.jsx';
import useAdminCustomerLocalDelete from '../../hooks/useAdminCustomerLocalDelete.jsx';
import Modal from "../Modal/Modal.jsx";
import EditCustomerModalContent from "../EditCustomerModalСontent/EditCustomerModalcontent.jsx";
import useAdminCustomerLocalUpdate from "../../hooks/useAdminCustomerLocalUpdate.jsx";
import AddCustomerModalContent from "../AddCustomerModalContent/AddCustomerModalContent.jsx";
import useAdminCustomerLocalAdd from "../../hooks/useAdminCustomerAdd.jsx";
import edit from '../../assets/images/edit.svg';
import bin from '../../assets/images/bin.svg';
import add from '../../assets/images/add.svg';

const CustomerCustomersTable = ({accessToken}) => {
    const {
        customers,
        pageSize,
        setPageSize,
        currentPage,
        setCurrentPage,
        totalPages,
        handlePageChange,
        fetchCustomers,
    } = useFetchCustomers(accessToken);

    const {handleDeleteCustomer, error} = useAdminCustomerLocalDelete(fetchCustomers);

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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null); // Define selectedCustomer here

    const handleEditCustomer = (customer) => {
        setIsModalOpen(true);
        setSelectedCustomer(customer);
    };

    const {handleUpdateCustomer, error: updateError} = useAdminCustomerLocalUpdate(fetchCustomers);

    const handleSaveEditedCustomer = async (editedCustomer) => {
        await handleUpdateCustomer(editedCustomer);
        setIsModalOpen(false);
    };

    const {handleAddCustomer} = useAdminCustomerLocalAdd(fetchCustomers)


    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const openAddModal = () => {
        setIsAddModalOpen(true);
    };

    const closeAddModal = () => {
        setIsAddModalOpen(false);
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
                    {userRole === 'Admin' && (
                        <td>
                            <img
                                className="add"
                                src={add}
                                alt="icon"
                                onClick={openAddModal}
                                // onClick={() => {
                                //     handleAddNewCustomer();
                                // }}
                            />
                        </td>
                    )}
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
                                <img
                                    className="edit"
                                    src={edit}
                                    alt="icon"
                                    onClick={() => {
                                        handleEditCustomer(customer);
                                    }}
                                />
                            </td>
                        )}
                        {userRole === 'Admin' && (
                            <td>
                                <img className="bin"
                                     src={bin}
                                     alt="icon"
                                     onClick={() => handleDeleteCustomer(customer.id)}/>
                            </td>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>
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
            {isModalOpen && selectedCustomer && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <EditCustomerModalContent customer={selectedCustomer} onSave={handleSaveEditedCustomer}/>
                </Modal>
            )}
            {isAddModalOpen && (
                <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
                    <AddCustomerModalContent customer={selectedCustomer} onSave={handleSaveEditedCustomer} onClose={closeAddModal}/>
                </Modal>
            )}
        </CustomerCustomersContent>
    );
};

export default CustomerCustomersTable;
