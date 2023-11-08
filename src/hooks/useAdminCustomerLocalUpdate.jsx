import { useState } from 'react';

const useAdminCustomerLocalUpdate = (fetchCustomers) => {
    const [error, setError] = useState(null);

    const handleUpdateCustomer = async (editedCustomer) => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(`https://highdardata.xyz/office/v1/adminCustomers/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(editedCustomer),
            });

            if (response.ok) {
                // The data has been successfully updated on the server
                // You can handle the success here if needed
                console.log('Customer data updated successfully!');
                fetchCustomers();
            } else {
                // Handle errors from the server response
                setError('Error updating customer data. Please try again later.');
            }
        } catch (error) {
            // Handle network errors or other exceptions
            setError('Error updating customer data. Please try again later.');
        }
    };

    return { handleUpdateCustomer, error };
};

export default useAdminCustomerLocalUpdate;
