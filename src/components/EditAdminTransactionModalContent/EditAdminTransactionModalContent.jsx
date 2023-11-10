import React, { useState } from "react";
import { ModalContent } from "./Styles.jsx";

const EditAdminTransactionModalContent = ({ onSave, onClose, onCreate, editTransactionData }) => {
    const [formData, setFormData] = useState({
        id: editTransactionData?.id,
        numericId: editTransactionData?.numericId,
        name: editTransactionData?.name || "",
        status: editTransactionData?.status || "1",
        description: editTransactionData?.description || "",
        country: editTransactionData?.country || "",
        recoveredAmount: editTransactionData?.recoveredAmount || "",
        date: editTransactionData?.date || "",

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch("https://highdardata.xyz/office/v1/transactions/update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Asset successfully updated");
                // Call onSave function if needed
                onSave();
                // Close the modal
                onClose();
            } else {
                console.error("Error updating asset:", response.statusText);
            }
        } catch (error) {
            console.error("Error updating asset:", error);
        }
    };

    const handleCreate = () => {
        // Perform create operation with formData
        // Call onCreate function if needed
        onCreate(formData);
        // Close the modal
        onClose();
    };

    return (
        <ModalContent>
            <div className="modal-content">
                <div className="create-assets-modal-fields">
                    <div>
                        <label>Transaction ID:</label>
                        <input
                            type="text"
                            id="numericId"
                            name="numericId"
                            value={formData.numericId}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    {/*<div>*/}
                    {/*    <label>Status:</label>*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        id="statusFormatted"*/}
                    {/*        name="statusFormatted"*/}
                    {/*        value={formData.statusFormatted}*/}
                    {/*        onChange={handleChange}*/}
                    {/*    />*/}
                    {/*</div>*/}

                    <div>
                        <label>Status:</label>
                        <select name="status" id="status" value={formData.status} onChange={handleChange}>
                            <option value="1"> InProgress</option>
                            <option value="2">Success</option>
                            <option value="3">Fail</option>
                            <option value="4">New</option>
                        </select>
                    </div>

                    <div>
                        <label>Description:</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Country:</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Recovered Amount:</label>
                        <input
                            type="text"
                            id="recoveredAmount"
                            name="recoveredAmount"
                            value={formData.recoveredAmount}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Date:</label>
                        <input
                            type="text"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button onClick={handleSave}>Save</button>
            </div>
        </ModalContent>
    );
};

export default EditAdminTransactionModalContent;