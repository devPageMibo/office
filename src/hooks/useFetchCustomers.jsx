import {useEffect, useState} from "react";

const apiUrl = 'https://highdardata.xyz/office/v1/adminCustomers/getAll';

const useFetchCustomers = (accessToken) => {
    const [customers, setCustomers] = useState([]);
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
            setCustomers(data);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    useEffect(() => {
        setPageSize(10);
        fetchCustomers();
    }, [accessToken]);

    return { customers, pageSize, setPageSize };
};

export default useFetchCustomers;