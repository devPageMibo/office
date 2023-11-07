import React, { useState } from 'react';

const CreateCustomerModal = ({ isOpen, onClose, onCreate }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        phone: '',
        numericId: '',
        firstName: '',
        lastName: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
                onClose();
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
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
                </div>
                <div>
                    <label>ID:</label>
                    <input type="text" name="numericId" value={formData.numericId} onChange={handleInputChange} />
                </div>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                </div>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default CreateCustomerModal;


