// import {useEffect, useState} from "react";
//
// const apiUrl = 'https://highdardata.xyz/office/v1/adminCustomers/getAll';
//
// const useFetchCustomers = (accessToken) => {
//     const [customers, setCustomers] = useState([]);
//     const [pageSize, setPageSize] = useState(10);
//
//     const fetchCustomers = async () => {
//         try {
//             const accessToken = localStorage.getItem('accessToken');
//             const response = await fetch(apiUrl, {
//                 headers: {
//                     Authorization: `Bearer ${accessToken}`,
//                 },
//             });
//             const data = await response.json();
//             setCustomers(data);
//         } catch (error) {
//             console.error('Error fetching customers:', error);
//         }
//     };
//
//     useEffect(() => {
//         setPageSize(10);
//         fetchCustomers();
//     }, [accessToken]);
//
//     return { customers, pageSize, setPageSize, fetchCustomers };
// };
//
// export default useFetchCustomers;

import {useEffect, useState} from "react";

const apiUrl = 'https://highdardata.xyz/office/v1/adminCustomers/getAll';

const useFetchCustomers = (accessToken) => {
    const [customers, setCustomers] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchCustomers = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = await response.json();
            if (data && data.length > 0) {
                setCustomers(data);
                setTotalPages(Math.ceil(data.length / pageSize));
            } else {
                console.error('Отримані порожні дані або масив.');
            }
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    useEffect(() => {
        setPageSize(10);
        fetchCustomers();
    }, [accessToken]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return {
        customers,
        pageSize,
        setPageSize,
        currentPage,
        setCurrentPage,
        totalPages,
        handlePageChange,
        fetchCustomers,
    };
};

export default useFetchCustomers;