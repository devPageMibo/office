import React from "react";
import {PersonalInfoContent} from "./Styles.jsx";

export const CustomerPersonalInfo = ({...customerData}) => {
    return (
        <PersonalInfoContent className="personal-info">
            <h2>Personal Info</h2>
            <div className="case_content">
                <div className="case_field">
                    <span>Case number:</span>
                    <span>{customerData?.caseNumber}</span>
                </div>
                <div className="case_field">
                    <span>Case Started:</span>
                    <span>{customerData?.caseStarted}</span>
                </div>
                <div className="case_field">
                    <span>Email:</span>
                    <span>{customerData?.email}</span>
                </div>
                <div className="case_field">
                    <span>First Name:</span>
                    <span>{customerData?.firstName}</span>
                </div>
                <div className="case_field">
                    <span>Last Name:</span>
                    <span>{customerData?.lastName}</span>
                </div>
                <div className="case_field">
                    <span>Description:</span>
                    <span>{customerData?.description}</span>
                </div>
                <div className="case_field">
                    <span>Customer status:</span>
                    <span>{customerData?.customerStatus}</span>
                </div>
                <div className="case_field">
                    <span>KYC status:</span>
                    <span>{customerData?.kycStatus}</span>
                </div>
            </div>
        </PersonalInfoContent>
    )
}