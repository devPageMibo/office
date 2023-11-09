import { useState } from 'react';

const useAdminCustomerUpdate = (fetchCustomers) => {
    const [error, setError] = useState(null);

    const handleUpdateCustomer = async (editedCustomer) => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(`https://highdardata.xyz/office/v1/customers/setMain`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(editedCustomer),
            });

            if (response.ok) {
                console.log('Customer data updated successfully!');
                fetchCustomers();
            } else {
                setError('Error updating customer data. Please try again later.');
            }
        } catch (error) {
            setError('Error updating customer data. Please try again later.');
        }
    };

    return { handleUpdateCustomer, error };
};

export default useAdminCustomerUpdate;
