import React, {useState, useEffect} from 'react';
import {EditCustomerMainModalContent} from "./Styles.jsx";

const EditCustomerModalContent = ({customer, onSave}) => {
    const [inputValue, setInputValue] = useState('');

    const [editedData, setEditedData] = useState({
        numericId: customer.numericId || '',
        firstName: customer.firstName || '',
        lastName: customer.lastName || '',
        email: customer.email || '',
        phone: customer.phone || '',
        caseNumber: customer.caseNumber || '',
        totalWorth: customer.totalWorth || '',
        caseStarted: customer.caseStarted || '',
        password: customer.password
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEditedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = () => {
        onSave({...editedData, id: customer.id});
    };

    return (
        <EditCustomerMainModalContent className="edit-customer-modal">
            <div className="edit-customer-modal-fields">
                <div>
                    <label htmlFor="numericId">ID</label>
                    <input type="text" name="numericId" value={editedData.numericId} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" value={editedData.firstName} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" value={editedData.lastName} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={editedData.email} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" name="phone" value={editedData.phone} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="caseNumber">Case Number</label>
                    <input type="text" name="caseNumber" value={editedData.caseNumber} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="totalWorth">Recovered Amount</label>
                    <input type="text" name="totalWorth" value={editedData.totalWorth} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="caseStarted">Date</label>
                    <input type="text" name="caseStarted" value={editedData.caseStarted} onChange={handleInputChange}/>
                </div>
            </div>
            <button onClick={handleSave}>Save</button>
        </EditCustomerMainModalContent>
    );
};

export default EditCustomerModalContent;

