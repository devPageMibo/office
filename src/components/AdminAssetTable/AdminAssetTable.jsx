import {AdminAssetTableContent} from "./Styles.jsx";
import edit from "../../assets/images/edit.svg";
import bin from "../../assets/images/bin.svg";
import React, {useEffect, useState} from "react";

export const AdminAssetTable = ({assets}) => {
    const [error, setError] = useState(null);

    const cryptoIconPath = '/src/assets/images/cryptoIcon/'

    //delete asset
    const handleDeleteAsset = async (assetId) => {
        console.log(assetId);
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(`https://highdardata.xyz/office/v1/assets/delete?id=${assetId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            if (response.ok) {
                console.log("Asset successfully deleted");
                // Update assets state after successful deletion

            } else {
                setError('Error deleting asset');
            }
        } catch (error) {
            setError('Error deleting asset');
        }
    };


    return (
        <AdminAssetTableContent>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Price</th>
                    <th>Logo</th>
                    <th>Action</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {assets.map((asset) => (
                    <tr key={asset.id}>
                        <td>{asset.name}</td>
                        <td>{asset.amount}</td>
                        <td>{asset.price}</td>
                        <td>
                            <img className="coin-icon" src={`${cryptoIconPath}${asset.logoName}`} alt=""/>
                        </td>
                        <td>
                            <img
                                className="edit"
                                src={edit}
                                alt="icon"
                                // onClick={() => {
                                //     handleEditCustomer(customer);
                                // }}
                            />
                        </td>
                        <td>
                            <img className="bin"
                                 src={bin}
                                 alt="icon"
                                 onClick={() => handleDeleteAsset(asset.id)}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </AdminAssetTableContent>
    )
}

