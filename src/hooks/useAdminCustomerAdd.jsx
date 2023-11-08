import { useState } from 'react';

const useAdminCustomerLocalAdd = (fetchCustomers) => {
    const [error, setError] = useState(null);

    const handleAddCustomer = async (addCustomer) => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(`https://highdardata.xyz/office/v1/adminCustomers/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(addCustomer),
            });

            if (response.ok) {
                console.log('Customer data added successfully!');
                fetchCustomers();
            } else {
                setError('Error adding customer data. Please try again later.');
            }
        } catch (error) {
            setError('Error adding customer data. Please try again later.');
        }
    };

    return { handleAddCustomer, error };
};

export default useAdminCustomerLocalAdd;
