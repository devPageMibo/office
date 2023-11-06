import React from 'react';
import {TransactionsTableContent} from "./Styles.jsx";

const TransactionsTable = ({ ...customerData }) => {
    if (!customerData || !customerData.transactions) {
        // return null; // Повертаємо null або інший компонент-завантажувач, якщо transactions є невизначеною
        return <div>Loading...</div>;
    }

    return (
        <TransactionsTableContent>
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
            {customerData.transactions.map(transaction => (
                <tr key={transaction.id}>
                    <td>{transaction.numericId}</td>
                    <td>{transaction.name}</td>
                    <td>{transaction.statusFormatted}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.country}</td>
                    <td>{transaction.recoveredAmount}</td>
                    <td>{transaction.date}</td>
                </tr>
            ))}
            </tbody>
            </table>
        </TransactionsTableContent>
    );
};

export default TransactionsTable;
