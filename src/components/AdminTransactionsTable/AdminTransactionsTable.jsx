import React, {useEffect, useState} from 'react';
import {TransactionsTableContent} from "./Styles.jsx";
import edit from "../../assets/images/edit.svg";
import bin from "../../assets/images/bin.svg";
import Modal from "../Modal/Modal.jsx";
import EditAdminAssetModalContent from "../EditAdminAssetModalContent/EditAdminAssetModalContent.jsx";
import EditAdminTransactionModalContent from "../EditAdminTransactionModalContent/EditAdminTransactionModalContent.jsx";

const useSingleCustomer = (id) => {
    const [customerData, setCustomerData] = useState(null);

    const fetchData = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(`https://highdardata.xyz/office/v1/customers/getSingle?id=${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setCustomerData(data);
            } else {
                console.error('Error fetching customer data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching customer data:', error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchData();
            console.log("дані оновлено")
        }

        return () => {
            // Очищення даних або виконання інших дій, які потрібно зробити при видаленні компонента
        };
    }, [id]);

    return {customerData, fetchData};
};

const AdminTransactionsTable = ({}) => {
    // if (!customerData || !customerData.transactions) {
    //     // return null; // Повертаємо null або інший компонент-завантажувач, якщо transactions є невизначеною
    //     return <div>Loading...</div>;
    // }

    const userRole = localStorage.getItem('userRole');

    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');

    const {customerData, fetchData} = useSingleCustomer(id);

    const transactions = customerData?.transactions || [];

    //del transaction from table

    const [error, setError] = useState(null);
    const handleDeleteTransactionTable = async (transactionId) => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(`https://highdardata.xyz/office/v1/transactions/delete?id=${transactionId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            if (response.ok) {
                console.log("Deleted successfully Transaction")
                await fetchData();
                console.log("Deleted successfully Transaction")
            } else {
                setError('Error deleting Transaction');
            }
        } catch (error) {
            setError('Error deleting Transaction');
        }
    };

    //edit
    const [isTransactionEditModalOpen, setIsTransactionEditModalOpen] = useState(false);
    const [editTransactionData, setEditTransactionData] = useState(null);

    const openEditTransactionModal = () => {
        setIsTransactionEditModalOpen(true);
    };

    const closeTransactionAssetModal = () => {
        setIsTransactionEditModalOpen(false);
    };

    const handleSetEditTransactionData = (data) => {
        setEditTransactionData(data);
    };

    const handleEditTransaction = (transactionId) => {
        const selectedAsset = transactions.find(transactions => transactions.id === transactionId);
        handleSetEditTransactionData(selectedAsset);
        setIsTransactionEditModalOpen(true);
    };
    const statusIconPath = '/src/assets/images/status/';
    // import success from "../../assets/images/status/success.svg";
    // import fail from "../../assets/images/status/fail.svg";
    // import inprogress from "../../assets/images/status/inprogress.svg";
    // import block from "../../assets/images/status/block.svg";

    return (
        <TransactionsTableContent>
            <div className="control">
                <h2>All Transactions </h2>
                <button
                    // onClick={handleSaveCustomers}
                >
                    Create
                </button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Transaction ID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Description</th>
                    <th>Country</th>
                    <th>Recovered Amount</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td>{transaction.numericId}</td>
                        <td>{transaction.name}</td>
                        <td>
                            {/*{transaction.statusFormatted}*/}
                            <img className="coin-icon" src={`${statusIconPath}${transaction.statusFormatted}.svg`} alt="" />
                        </td>
                        <td>{transaction.description}</td>
                        <td>{transaction.country}</td>
                        <td>{transaction.recoveredAmount}</td>
                        <td>{transaction.date}</td>
                        {userRole === 'Admin' && (
                            <td>
                                <img
                                    className="edit"
                                    src={edit}
                                    alt="icon"
                                    onClick={() => {
                                        handleEditTransaction(transaction.id);
                                    }}
                                />
                            </td>
                        )}
                        {userRole === 'Admin' && (
                            <td>
                                <img className="bin"
                                     src={bin}
                                     alt="icon"
                                     onClick={() => handleDeleteTransactionTable(transaction.id)}/>
                            </td>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>
            {isTransactionEditModalOpen && (
                <Modal isOpen={setIsTransactionEditModalOpen} onClose={() => setIsTransactionEditModalOpen(false)}>
                    <EditAdminTransactionModalContent
                        onSave={fetchData}
                        isOpen={isTransactionEditModalOpen}
                        onClose={closeTransactionAssetModal}
                        onCreate={handleEditTransaction}
                        editTransactionData={editTransactionData}
                    />
                </Modal>
            )}
        </TransactionsTableContent>
    );
};

export default AdminTransactionsTable;
