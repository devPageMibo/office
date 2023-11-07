import { useEffect, useState } from "react";

const apiUrl = 'https://highdardata.xyz/office/v1/customers/getAll';

const useFetchCustomersAll = (accessToken) => {
    const [customers, setCustomers] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [filteredCustomers, setFilteredCustomers] = useState([]);

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
            console.error('Помилка отримання даних:', error);
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, [accessToken]);

    useEffect(() => {
        setFilteredCustomers(customers);
    }, [customers]);

    const parseDateString = (dateString) => {
        if (dateString) {
            const parts = dateString.split('.');
            if (parts.length === 3) {
                const [day, month, year] = parts;
                return new Date(year, month - 1, day);
            }
        }
        return null; // Return null for invalid or null date strings
    };


    useEffect(() => {
        // console.log("Raw customers data:", customers);
        // console.log("Selected Date:", selectedDate);
        if (selectedDate) {
            const formattedSelectedDate = selectedDate.toISOString().split('T')[0];
            // console.log("Formatted Selected Date:", formattedSelectedDate);
            const filteredData = customers.filter((customer) => {
                const caseStartedDate = parseDateString(customer.caseStarted);
                // console.log("Parsed Case Started Date:", caseStartedDate);
                if (caseStartedDate) {
                    const caseStartedDateString = caseStartedDate.toISOString().split('T')[0];
                    return caseStartedDateString === formattedSelectedDate;
                }
                return false; // Filter out invalid dates
            });
            // console.log('Відфільтровані дані за датою:', filteredData);
            setFilteredCustomers(filteredData);
        } else {
            setFilteredCustomers(customers);
        }
    }, [selectedDate, customers]);

    const paginatedCustomers = filteredCustomers
        .filter((customer) => {
            const fullName = `${customer.firstName} ${customer.lastName}`.toLowerCase();
            const email = customer.email ? customer.email.toLowerCase() : '';
            const phone = customer.phone ? customer.phone.toLowerCase() : '';
            const caseNumber = customer.caseNumber ? customer.caseNumber.toString().toLowerCase() : '';
            const recoveredAmount = customer.totalWorth ? customer.totalWorth.toString().toLowerCase() : '';

            return (
                customer.numericId.toString().includes(searchTerm) ||
                fullName.includes(searchTerm.toLowerCase()) ||
                email.includes(searchTerm.toLowerCase()) ||
                phone.includes(searchTerm.toLowerCase()) ||
                caseNumber.includes(searchTerm.toLowerCase()) ||
                recoveredAmount.includes(searchTerm.toLowerCase())
            );
        })
        .slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    return {
        customers: paginatedCustomers,
        pageSize,
        setPageSize,
        currentPage,
        setCurrentPage,
        totalPages,
        searchTerm,
        setSearchTerm,
        handlePageChange,
        selectedDate,
        handleDateChange,
    };
};

export default useFetchCustomersAll;

