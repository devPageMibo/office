// import { AdminAssetTableContent } from "./Styles.jsx";
// import edit from "../../assets/images/edit.svg";
// import bin from "../../assets/images/bin.svg";
// import React, { useEffect, useState } from "react";
// import Modal from "../Modal/Modal.jsx";
// import EditAdminAssetModalContent from "../EditAdminAssetModalContent/EditAdminAssetModalContent.jsx";
// import CreateAdminAssetModalContent from "../CreateAdminAssetModalContent/CreateAdminAssetModalContent.jsx";
//
// const useSingleCustomer = (id) => {
//     const [customerData, setCustomerData] = useState(null);
//
//     const fetchData = async () => {
//         try {
//             const accessToken = localStorage.getItem('accessToken');
//             const response = await fetch(`https://highdardata.xyz/office/v1/customers/getSingle?id=${id}`, {
//                 headers: {
//                     Authorization: `Bearer ${accessToken}`,
//                 },
//             });
//
//             if (response.ok) {
//                 const data = await response.json();
//                 setCustomerData(data);
//             } else {
//                 console.error('Error fetching customer data:', response.statusText);
//             }
//         } catch (error) {
//             console.error('Error fetching customer data:', error);
//         }
//     };
//
//     useEffect(() => {
//         if (id) {
//             fetchData();
//             console.log("дані оновлено")
//         }
//
//         return () => {
//             // Очищення даних або виконання інших дій, які потрібно зробити при видаленні компонента
//         };
//     }, [id]);
//
//     return { customerData, fetchData };
// };
//
// export const AdminAssetTable = ({ isAssetCreateModalOpen, setIsAssetCreateModalOpen, onCreate }) => {
//     const [error, setError] = useState(null);
//     const cryptoIconPath = '/src/assets/images/cryptoIcon/';
//
//
//     const searchParams = new URLSearchParams(window.location.search);
//     const id = searchParams.get('id');
//
//     const { customerData, fetchData } = useSingleCustomer(id);
//
//     const assets = customerData?.assets || [];
//
//     const handleDeleteAsset = async (assetId) => {
//         console.log(assetId);
//         try {
//             const accessToken = localStorage.getItem('accessToken');
//             const response = await fetch(`https://highdardata.xyz/office/v1/assets/delete?id=${assetId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${accessToken}`
//                 }
//             });
//
//             if (response.ok) {
//                 console.log("Asset successfully deleted");
//                 await fetchData();
//                 console.log("after fetchData")
//             } else {
//                 setError('Error deleting asset');
//             }
//         } catch (error) {
//             setError('Error deleting asset');
//         }
//     };
//
//     const [isAssetEditModalOpen, setIsAssetEditModalOpen] = useState(false);
//
//     const openEditAssetModal = () => {
//         setIsAssetEditModalOpen(true);
//     };
//
//     const closeEditAssetModal = () => {
//         setIsAssetEditModalOpen(false);
//     };
//
//     const handleEditAsset = (formData) => {
//         openEditAssetModal()
//     };
//
//     const handleCreateAsset = (formData) => {
//          fetchData();
//         setIsAssetCreateModalOpen(false);
//     };
//
//     return (
//         <AdminAssetTableContent>
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Amount</th>
//                     <th>Price</th>
//                     <th>Logo</th>
//                     <th>Action</th>
//                     <th></th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {assets.map((asset) => (
//                     <tr key={asset.id}>
//                         <td>{asset.name}</td>
//                         <td>{asset.amount}</td>
//                         <td>{asset.price}</td>
//                         <td>
//                             <img className="coin-icon" src={`${cryptoIconPath}${asset.logoName}`} alt="" />
//                         </td>
//                         <td>
//                             <img
//                                 className="edit"
//                                 src={edit}
//                                 alt="icon"
//                                 onClick={() => {
//                                     handleEditAsset(asset.id);
//                                 }}
//                             />
//                         </td>
//                         <td>
//                             <img className="bin"
//                                  src={bin}
//                                  alt="icon"
//                                  onClick={() => handleDeleteAsset(asset.id)}
//                             />
//                         </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//             {isAssetEditModalOpen &&  (
//                 <Modal isOpen={setIsAssetEditModalOpen} onClose={() => setIsAssetEditModalOpen(false)}>
//                     <EditAdminAssetModalContent onSave={fetchData} isOpen={isAssetEditModalOpen} onClose={closeEditAssetModal} onCreate={handleEditAsset} />
//                 </Modal>
//             )}
//             {isAssetCreateModalOpen && (
//                 <Modal isOpen={setIsAssetCreateModalOpen} onClose={() => setIsAssetCreateModalOpen(false)}>
//                     <CreateAdminAssetModalContent
//                         isOpen={isAssetCreateModalOpen}
//                         onClose={() => setIsAssetCreateModalOpen(false)}
//                         onCreate={handleCreateAsset}
//                     />
//                 </Modal>
//             )}
//         </AdminAssetTableContent>
//     )
// }
//
//
//


import { AdminAssetTableContent } from "./Styles.jsx";
import edit from "../../assets/images/edit.svg";
import bin from "../../assets/images/bin.svg";
import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal.jsx";
import EditAdminAssetModalContent from "../EditAdminAssetModalContent/EditAdminAssetModalContent.jsx";
import CreateAdminAssetModalContent from "../CreateAdminAssetModalContent/CreateAdminAssetModalContent.jsx";

const useSingleCustomer = (id) => {
    const [customerData, setCustomerData] = useState(null);

    const fetchData = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(`https://highdardata.xyz/office/v1/customers/getSingle?id=${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setCustomerData(data);
            } else {
                console.error('Error fetching customer data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching customer data:', error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchData();
            console.log("дані оновлено")
        }

        return () => {
            // Очищення даних або виконання інших дій, які потрібно зробити при видаленні компонента
        };
    }, [id]);

    return { customerData, fetchData };
};

export const AdminAssetTable = ({ isAssetCreateModalOpen, setIsAssetCreateModalOpen, onCreate }) => {
    const [error, setError] = useState(null);
    const cryptoIconPath = '/src/assets/images/cryptoIcon/';

    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');

    const { customerData, fetchData } = useSingleCustomer(id);

    const assets = customerData?.assets || [];

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
                await fetchData();
                console.log("after fetchData")
            } else {
                setError('Error deleting asset');
            }
        } catch (error) {
            setError('Error deleting asset');
        }
    };

    const [isAssetEditModalOpen, setIsAssetEditModalOpen] = useState(false);
    const [editAssetData, setEditAssetData] = useState(null);

    const openEditAssetModal = () => {
        setIsAssetEditModalOpen(true);
    };

    const closeEditAssetModal = () => {
        setIsAssetEditModalOpen(false);
    };

    const handleSetEditAssetData = (data) => {
        setEditAssetData(data);
    };

    const handleEditAsset = (assetId) => {
        const selectedAsset = assets.find(asset => asset.id === assetId);
        handleSetEditAssetData(selectedAsset);
        setIsAssetEditModalOpen(true);
    };

    const handleCreateAsset = (formData) => {
        fetchData();
        setIsAssetCreateModalOpen(false);
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
                            <img className="coin-icon" src={`${cryptoIconPath}${asset.logoName}`} alt="" />
                        </td>
                        <td>
                            <img
                                className="edit"
                                src={edit}
                                alt="icon"
                                onClick={() => {
                                    handleEditAsset(asset.id);
                                }}
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
            {isAssetEditModalOpen && (
                <Modal isOpen={setIsAssetEditModalOpen} onClose={() => setIsAssetEditModalOpen(false)}>
                    <EditAdminAssetModalContent
                        onSave={fetchData}
                        isOpen={isAssetEditModalOpen}
                        onClose={closeEditAssetModal}
                        onCreate={handleEditAsset}
                        editAssetData={editAssetData}
                    />
                </Modal>
            )}
            {isAssetCreateModalOpen && (
                <Modal isOpen={setIsAssetCreateModalOpen} onClose={() => setIsAssetCreateModalOpen(false)}>
                    <CreateAdminAssetModalContent
                        isOpen={isAssetCreateModalOpen}
                        onClose={() => setIsAssetCreateModalOpen(false)}
                        onCreate={handleCreateAsset}
                    />
                </Modal>
            )}
        </AdminAssetTableContent>
    );
};

