//
// import React, {useState} from 'react';
// import {ModalContent} from "./Styles.jsx";
//
// const EditAdminAssetModalContent = ({isOpen, onClose, onCreate, onSave}) => {
//
//     const [formData, setFormData] = useState({
//         id: '',
//         name: '',
//         amount: '',
//         price: '',
//         logoName: 'bitcoin.svg',
//     });
//
//     const handleInputChange = (e) => {
//         const {name, value} = e.target;
//         setFormData({...formData, [name]: value});
//     };
//
//     const handleSave = async () => {
//         try {
//             const accessToken = localStorage.getItem('accessToken');
//             const response = await fetch('https://highdardata.xyz/office/v1/assets/update', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${accessToken}`,
//                 },
//                 body: JSON.stringify(formData),
//             });
//
//             if (response.ok) {
//                 onCreate(formData);
//                 console.log('Asset created successfully!-00');
//
//                 onSave();
//                 console.log('after create onSave fetchData')
//                 onClose();
//             } else {
//                 console.error('Помилка при відправці даних на сервер');
//             }
//         } catch (error) {
//             console.error('Помилка:', error);
//         }
//     };
//
//     if (!isOpen) {
//         return null;
//     }
//
//     return (
//         <ModalContent>
//             <div className="modal-content">
//                 <div className="create-assets-modal-fields">
//                     <div>
//                         <label>Name:</label>
//                         <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
//                     </div>
//                     <div>
//                         <label>Amount:</label>
//                         <input type="text" name="amount" value={formData.amount} onChange={handleInputChange}/>
//                     </div>
//                     <div>
//                         <label>Price:</label>
//                         <input type="text" name="price" value={formData.price} onChange={handleInputChange}/>
//                     </div>
//                     <div>
//                         <label>Logo:</label>
//                         {/*<input type="text" name="logoName" value={formData.logoName} onChange={handleInputChange}/>*/}
//                         <select name="logoName" value={formData.logoName} onChange={handleInputChange}>
//                             <option value="bitcoin.svg"> Bitcoin</option>
//                             <option value="usdt.svg">Tether</option>
//                             <option value="ethereum.svg">Ethereum</option>
//                             <option value="litecoin.svg">Litecoin</option>
//                         </select>
//                     </div>
//                 </div>
//                 <button onClick={handleSave}>Save</button>
//             </div>
//
//
//         </ModalContent>
//     );
// };
//
// export default EditAdminAssetModalContent;
//
//


// EditAdminAssetModalContent.jsx

import React, { useState } from "react";
import { ModalContent } from "./Styles.jsx";

const EditAdminAssetModalContent = ({ onSave, onClose, onCreate, editAssetData }) => {
    const [formData, setFormData] = useState({
        // Initialize form data with existing asset data
        id: editAssetData?.id,
        name: editAssetData?.name || "",
        amount: editAssetData?.amount || "",
        price: editAssetData?.price || "",
        logoName: editAssetData?.logoName || "",
        // Add other form fields as needed
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
            const response = await fetch("https://highdardata.xyz/office/v1/assets/update", {
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
                        <label>Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Amount:</label>
                        <input
                            type="text"
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Price:</label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Logo:</label>
                        <select name="logoName" id="logoName" value={formData.logoName} onChange={handleChange}>
                            <option value="bitcoin.svg"> Bitcoin</option>
                            <option value="usdt.svg">Tether</option>
                            <option value="ethereum.svg">Ethereum</option>
                            <option value="litecoin.svg">Litecoin</option>
                        </select>
                    </div>
                </div>
                <button onClick={handleSave}>Save</button>
            </div>
        </ModalContent>
    );
};

export default EditAdminAssetModalContent;

