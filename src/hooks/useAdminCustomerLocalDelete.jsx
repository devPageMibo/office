// Admin Видалення CustomerLocal
import { useState } from 'react';

const useAdminCustomerLocalDelete = (fetchCustomers) => {
    const [error, setError] = useState(null);
    const handleDeleteCustomer = async (customerId) => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(`https://highdardata.xyz/office/v1/adminCustomers/delete?id=${customerId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            if (response.ok) {
                console.log("Успішно видалено customer")
                fetchCustomers();
                console.log("Успішно оновлено customers")
            } else {
                setError('Помилка при видаленні покупця');
            }
        } catch (error) {
            setError('Помилка при видаленні покупця');
        }
    };

    return { handleDeleteCustomer, error };
};

export default useAdminCustomerLocalDelete;



