
import React, {useState} from 'react';
import {ModalContent} from "./Styles.jsx";

const EditAdminAssetModalContent = ({isOpen, onClose, onCreate}) => {

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        amount: '',
        price: '',
        logoName: 'bitcoin.svg',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSave = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch('https://highdardata.xyz/office/v1/assets/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                onCreate(formData);
                console.log('Asset created successfully!');
                onClose();

            } else {
                console.error('Помилка при відправці даних на сервер');
            }
        } catch (error) {
            console.error('Помилка:', error);
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <ModalContent>
            <div className="modal-content">
                <div className="create-assets-modal-fields">
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Amount:</label>
                        <input type="text" name="amount" value={formData.amount} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Price:</label>
                        <input type="text" name="price" value={formData.price} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Logo:</label>
                        {/*<input type="text" name="logoName" value={formData.logoName} onChange={handleInputChange}/>*/}
                        <select name="logoName" value={formData.logoName} onChange={handleInputChange}>
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


