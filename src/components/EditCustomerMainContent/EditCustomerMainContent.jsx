import React, { useState, useEffect } from 'react';

const EditCustomerMainContent = ({ customer, onSave }) => {
    const [inputValue, setInputValue] = useState('');

    const [editedData, setEditedData] = useState({
        numericId: customer.numericId || '',
        name: customer.name || '',
        status: customer.status || '',
        country: customer.country || '',
        recoveredAmount: customer.recoveredAmount || '',
        date: customer.date || '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = () => {
        onSave({ ...editedData, id: customer.id });
    };

    return (
        <div className="edit-customer-modal">
            <input type="text" name="numericId" value={editedData.numericId} onChange={handleInputChange} />
            <input type="text" name="name" value={editedData.name} onChange={handleInputChange} />
            <input type="text" name="status" value={editedData.status} onChange={handleInputChange} />
            <input type="text" name="country" value={editedData.country} onChange={handleInputChange} />
            <input type="text" name="recoveredAmount" value={editedData.recoveredAmount} onChange={handleInputChange} />
            <input type="text" name="date" value={editedData.date} onChange={handleInputChange} />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default EditCustomerMainContent;

