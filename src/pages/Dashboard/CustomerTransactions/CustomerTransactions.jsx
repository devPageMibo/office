import React, {useEffect} from "react";
import {CustomerTransactionsContent} from "./Styles.jsx";
import {useNavigate} from "react-router-dom";
import useCustomerData from "../../../hooks/useCustomerData.jsx";
import CustomerTransactionsSection
    from "../../../components/CustomerTransactionsSection/CustomerTransactionsSection.jsx";


const CustomerTransactions = ({setUserRole}) => {

    // const navigate = useNavigate();
    const {customerData, error} = useCustomerData();

    const navigate = useNavigate();
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            navigate('/');
        }
    }, [navigate]);


    return (
        <CustomerTransactionsContent>
            <div className="transactions_content">
                <CustomerTransactionsSection {...customerData}/>
            </div>
            {error && <div className="error-message">{error}</div>}
        </CustomerTransactionsContent>
    )
}

export default CustomerTransactions;