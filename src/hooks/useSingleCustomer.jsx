import { useState, useEffect } from 'react';

const useSingleCustomer = (id) => {
    const [customerData, setCustomerData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const response = await fetch(`https://highdardata.xyz/office/v1/customers/getSingle?id=${id}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setCustomerData(data);
                } else {
                    console.error('Error fetching customer data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching customer data:', error);
            }
        };

        if (id) {
            fetchData();
        }

        // Функція для очищення ефектів
        return () => {
            // Очищення даних або виконання інших дій, які потрібно зробити при видаленні компонента
        };
    }, [id]);

    return customerData;
};

export default useSingleCustomer;
