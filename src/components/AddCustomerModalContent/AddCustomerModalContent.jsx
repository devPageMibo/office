import React, {useState} from 'react';
import {ModalContent} from "./Styles.jsx";


const AddCustomerModalContent = ({onSave, onClose}) => {
    const [formData, setFormData] = useState({
        numericId: '',
        name: '',
        status: '',
        country: '',
        recoveredAmount: '',
        date: '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSave = () => {
        onSave({ ...formData, });
        onClose();
    };

    return (
        <ModalContent className="edit-customer-modal">
            <div className="edit-customer-modal-fields">
                <div>
                    <label htmlFor="numericId">ID</label>
                    <input type="text" name="numericId" value={formData.numericId} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="status">Status</label>
                    <input type="text" name="status" value={formData.status} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input type="text" name="country" value={formData.country} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="recoveredAmount">Recovered Amount</label>
                    <input type="text" name="recoveredAmount" value={formData.recoveredAmount}
                           onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="text" name="date" value={formData.date} onChange={handleInputChange}/>
                </div>
            </div>
            <button onClick={handleSave}>Save</button>
        </ModalContent>
    );
};

export default AddCustomerModalContent;
