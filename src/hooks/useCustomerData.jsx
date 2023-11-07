import { useState, useEffect } from 'react';

const useCustomerData = () => {
    const [customerData, setCustomerData] = useState(null);
    const [error, setError] = useState(null);

    const apiUrl = 'https://highdardata.xyz/office/v1/account/customerData';

    useEffect(() => {
        const fetchCustomerData = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const response = await fetch(apiUrl, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setCustomerData(data);
                } else {
                    setError('Failed to fetch customer data');
                }
            } catch (error) {
                console.error('An error occurred while fetching customer data:', error);
                setError('An error occurred while fetching customer data');
            }
        };

        fetchCustomerData();
    }, []);

    return { customerData, error };
};

export default useCustomerData;
