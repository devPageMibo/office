import {useEffect, useState} from "react";

const apiUrl = 'https://highdardata.xyz/office/v1/customers/getAll';

const useCustomerDataAll = (accessToken) => {
    const [customersAll, setCustomersAll] = useState([]);
    const [pageSize, setPageSize] = useState(10);

    const fetchCustomers = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = await response.json();
            setCustomersAll(data);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    useEffect(() => {
        setPageSize(10);
        fetchCustomers();
    }, [accessToken]);

    return { customersAll, pageSize, setPageSize };
};

export default useCustomerDataAll;