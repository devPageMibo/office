import React, {useState} from 'react';
import {CreateCustomerModalContent} from "./Styles.jsx";

const CreateCustomerModal = ({isOpen, onClose, onCreate, fetchCustomers}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        phone: '',
        numericId: '',
        firstName: '',
        lastName: '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSave = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch('https://highdardata.xyz/office/v1/customers/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                onCreate(formData);
                console.log('Customer created successfully!');
                onClose();
                fetchCustomers()
            } else {
                console.error('Помилка при відправці даних на сервер');
            }
        } catch (error) {
            console.error('Помилка:', error);
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <CreateCustomerModalContent>
            <div className="modal-content">
                <div className="create-customer-modal-fields">
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>ID:</label>
                        <input type="text" name="numericId" value={formData.numericId} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>First Name:</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange}/>
                    </div>
                </div>
                <button onClick={handleSave}>Save</button>
            </div>
        </CreateCustomerModalContent>
    );
};

export default CreateCustomerModal;


