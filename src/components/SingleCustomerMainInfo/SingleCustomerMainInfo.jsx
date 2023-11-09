import React, {useState} from 'react';
import {MainContent} from './Styles.jsx';

export const SingleCustomerMainInfo = ({...customerData}) => {
    const [formData, setFormData] = useState({...customerData});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSaveClick = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch('https://highdardata.xyz/office/v1/customers/setMain', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Data saved successfully!');
            } else {
                console.error('Error saving customer data:', response.statusText);
            }
        } catch (error) {
            console.error('Error saving customer data:', error);
        }
    };

    return (
        <MainContent>
            <div className="control">
                <h2>Main</h2>
                <button onClick={handleSaveClick}>Save</button>
            </div>
            <div className="main-info">
                <div className="main-info-group">
                    <div>
                        Email:
                        <input type="text" name="email" value={formData.email} onChange={handleInputChange}/>
                    </div>
                    <div>
                        Password:
                        <input type="password" name="password" value={formData.password} onChange={handleInputChange}/>
                    </div>
                    <div>
                        Phone Number:
                        <input type="text" name="phone" value={formData.phone} onChange={handleInputChange}/>
                    </div>
                    <div>
                        ID: {formData.numericId}
                        <input type="text" name="numericId" value={formData.numericId} onChange={handleInputChange}/>
                    </div>
                    <div>
                        First Name:
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange}/>
                    </div>
                    <div>
                        Last Name:
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="main-info-group">
                    <div>
                        Case number:
                        <input type="text" name="caseNumber" value={formData.caseNumber} onChange={handleInputChange}/>
                    </div>
                    <div>
                        Case Started:
                        <input type="text" name="caseStarted" value={formData.caseStarted}
                               onChange={handleInputChange}/>
                    </div>
                    <div>
                        Description:
                        <input type="text" name="description" value={formData.description}
                               onChange={handleInputChange}/>
                    </div>
                    <div>
                        Currency symbol:
                        <input type="text" name="currencySymbol" value={formData.currencySymbol}
                               onChange={handleInputChange}/>
                    </div>
                    <div>
                        KYC status:
                        <input type="text" name="kycStatus" value={formData.kycStatus} onChange={handleInputChange}/>
                    </div>
                    <div>
                        Customer status:
                        <input type="text" name="customerStatus" value={formData.customerStatus}
                               onChange={handleInputChange}/>
                    </div>
                </div>
            </div>
        </MainContent>
    );
};
