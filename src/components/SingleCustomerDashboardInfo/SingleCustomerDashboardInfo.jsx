import React, {useState} from "react";
import {DashboardContent} from "./Styles.jsx";
import {ChartsLine} from "../ChartsLine/ChartsLine.jsx";
import {ChartsLine13} from "../ChartsLine13/ChartsLine13.jsx";
import {AdminAssetTable} from "../AdminAssetTable/AdminAssetTable.jsx";
import TransactionsTable from "../TransactionsTable/TransactionsTable.jsx";
import AdminTransactionsTable from "../AdminTransactionsTable/AdminTransactionsTable.jsx";

export const SingleCustomerDashboardInfo = ({...customerData}) => {

    const [formData, setFormData] = useState({...customerData});
    // console.log('Customer id', id)
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };


    const handleSaveDashboard = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch('https://highdardata.xyz/office/v1/customers/setDashboard', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Data saved successfully!');

                const updatedChartData = {
                    mainGraph1: formData.mainGraph1,
                    mainGraph2: formData.mainGraph2,
                    mainGraph3: formData.mainGraph3,
                    mainGraph4: formData.mainGraph4,
                    mainGraph5: formData.mainGraph5,
                    mainGraph6: formData.mainGraph6,
                };
                setChartData(updatedChartData);

                const updatedChartData13 = {
                    secondaryGraph1: formData.secondaryGraph1,
                    secondaryGraph2: formData.secondaryGraph2,
                    secondaryGraph3: formData.secondaryGraph3,
                    secondaryGraph4: formData.secondaryGraph4,
                    secondaryGraph5: formData.secondaryGraph5,
                    secondaryGraph6: formData.secondaryGraph6,
                    secondaryGraph7: formData.secondaryGraph7,
                    secondaryGraph8: formData.secondaryGraph8,
                    secondaryGraph9: formData.secondaryGraph9,
                    secondaryGraph10: formData.secondaryGraph10,
                    secondaryGraph11: formData.secondaryGraph11,
                    secondaryGraph13: formData.secondaryGraph12,
                    secondaryGraph12: formData.secondaryGraph13,
                };
                setChartData13(updatedChartData13);

            } else {
                console.error('Error saving customer data:', response.statusText);
            }
        } catch (error) {
            console.error('Error saving customer data:', error);
        }
    };

    const [chartData, setChartData] = useState({
        mainGraph1: customerData.mainGraph1,
        mainGraph2: customerData.mainGraph2,
        mainGraph3: customerData.mainGraph3,
        mainGraph4: customerData.mainGraph4,
        mainGraph5: customerData.mainGraph5,
        mainGraph6: customerData.mainGraph6,
    });
    const [chartData13, setChartData13] = useState({
        secondaryGraph1: customerData.secondaryGraph1,
        secondaryGraph2: customerData.secondaryGraph2,
        secondaryGraph3: customerData.secondaryGraph3,
        secondaryGraph4: customerData.secondaryGraph4,
        secondaryGraph5: customerData.secondaryGraph5,
        secondaryGraph6: customerData.secondaryGraph6,
        secondaryGraph7: customerData.secondaryGraph7,
        secondaryGraph8: customerData.secondaryGraph8,
        secondaryGraph9: customerData.secondaryGraph9,
        secondaryGraph10: customerData.secondaryGraph10,
        secondaryGraph11: customerData.secondaryGraph11,
        secondaryGraph12: customerData.secondaryGraph12,
        secondaryGraph13: customerData.secondaryGraph13,
    });

    const handleSaveTransactions = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch('https://highdardata.xyz/office/v1/customers/setTransactions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Data saved successfully!');
            } else {
                console.error('Error saving customer data:', response.statusText);
            }
        } catch (error) {
            console.error('Error saving customer data:', error);
        }
    };

    const handleSaveCustomers = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch('https://highdardata.xyz/office/v1/customers/setCustomers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Data saved successfully!');
            } else {
                console.error('Error saving customer data:', response.statusText);
            }
        } catch (error) {
            console.error('Error saving customer data:', error);
        }
    };

    //Create asset
    const [isAssetCreateModalOpen, setIsAssetCreateModalOpen] = useState(false);


    const openCreateAssetModal = () => {
        setIsAssetCreateModalOpen(true);
    };
    const closeCreateAssetModal = () => {
        setIsAssetCreateModalOpen(false);
    };

    const handleCreateAsset = (formData) => {

    };


    return (
        <DashboardContent>
            <div className="control">
                <h2>Dashboard</h2>
                <button onClick={handleSaveDashboard}>
                    Save
                </button>
            </div>
            <div className="dashboard-info-content">
                <div className="dashboard-info">
                    <div className="dashboard-info-group">
                        <div>
                            Total Worth:
                            <input type="text" name="totalWorth" value={formData.totalWorth}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            Difference:
                            <input type="text" name="differenceAmount" value={formData.differenceAmount}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            Different in percent:
                            <input type="text" name="differencePercent" value={formData.differencePercent}
                                   onChange={handleInputChange}/>
                        </div>
                    </div>
                </div>
                <div className="dashboard-info-group main-graph">
                    <h3>Graph 1</h3>
                    <div className="items">
                        <div>
                            <input type="text" name="mainGraph1" value={formData.mainGraph1}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="mainGraph2" value={formData.mainGraph2}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="mainGraph3" value={formData.mainGraph3}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="mainGraph4" value={formData.mainGraph4}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="mainGraph5" value={formData.mainGraph5}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="mainGraph6" value={formData.mainGraph6}
                                   onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className="chart-line" style={{height: '116px'}}>
                        <ChartsLine {...chartData} />
                    </div>
                </div>
                <div className="dashboard-info-group main-graph second-graph">
                    <h3>Graph 2</h3>
                    <div className="items">
                        <div>
                            <input type="text" name="secondaryGraph1" value={formData.secondaryGraph1}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph2" value={formData.secondaryGraph2}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph3" value={formData.secondaryGraph3}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph4" value={formData.secondaryGraph4}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph5" value={formData.secondaryGraph5}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph6" value={formData.secondaryGraph6}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph7" value={formData.secondaryGraph7}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph8" value={formData.secondaryGraph8}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph9" value={formData.secondaryGraph9}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph10" value={formData.secondaryGraph10}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph11" value={formData.secondaryGraph11}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph12" value={formData.secondaryGraph12}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph13" value={formData.secondaryGraph13}
                                   onChange={handleInputChange}/>
                        </div>

                    </div>
                    <div className="chart-line" style={{height: '369px', width: '100%'}}>
                        <ChartsLine13
                            {...chartData13}
                        />
                    </div>
                </div>
            </div>
            <div className="assets-info-content">
                <div className="control">
                    <h2>Asset</h2>
                    <button
                        onClick={openCreateAssetModal}
                    >

                        Create
                    </button>
                </div>
                <div className="asset-info-group">
                    {/*<AdminAssetTable onCreate={openCreateAssetModal} {...customerData} />*/}
                    <AdminAssetTable
                        isAssetCreateModalOpen={isAssetCreateModalOpen}
                        setIsAssetCreateModalOpen={setIsAssetCreateModalOpen}
                        {...customerData}
                    />
                </div>
                {/*{isAssetCreateModalOpen && (*/}
                {/*    <Modal isOpen={setIsAssetCreateModalOpen} onClose={() => setIsAssetCreateModalOpen(false)}>*/}
                {/*        <CreateAdminAssetModalContent isOpen={isAssetCreateModalOpen} onClose={closeCreateAssetModal} onCreate={handleCreateAsset} />*/}
                {/*    </Modal>*/}
                {/*)}*/}
            </div>
            <div className="transactions-info-content">
                <div className="control">
                    <h2>Transactions</h2>
                    <button onClick={handleSaveTransactions}>
                        Save
                    </button>
                </div>
                <div className="transactions-info-group">
                    <div>
                        Total Loss:
                        <input type="text" name="totalLoss" value={formData.totalLoss}
                               onChange={handleInputChange}/>
                    </div>
                    <div>
                        Total Recovered:
                        <input type="text" name="totalRecovered" value={formData.totalRecovered}
                               onChange={handleInputChange}/>
                    </div>

                    <div>
                        Payment Method:
                        <input type="text" name="paymentMethod" value={formData.paymentMethod}
                               onChange={handleInputChange}/>
                    </div>

                    <div>
                        Wallet:
                        <input type="text" name="wallet" value={formData.wallet}
                               onChange={handleInputChange}/>
                    </div>

                    <div>
                        Smart Contract ID:
                        <input type="text" name="smartContractId" value={formData.smartContractId}
                               onChange={handleInputChange}/>
                    </div>

                    <div>
                        Scammed By:
                        <input type="text" name="scammedBy" value={formData.scammedBy}
                               onChange={handleInputChange}/>
                    </div>
                </div>
            </div>
            <div className="customers-info-content">
                <div className="control">
                    <h2>Customers</h2>
                    <button onClick={handleSaveCustomers}>
                        Save
                    </button>
                </div>
                <div className="customers-info-group">
                    <div>
                        Total Clients:
                        <input type="text" name="totalClients" value={formData.totalClients}
                               onChange={handleInputChange}/>
                    </div>
                    <div>
                        Successful Cases:
                        <input type="text" name="successfulCases" value={formData.successfulCases}
                               onChange={handleInputChange}/>
                    </div>

                    <div>
                        Amount recovered:
                        <input type="text" name="amountRecovered" value={formData.amountRecovered}
                               onChange={handleInputChange}/>
                    </div>

                    <div>
                        Personal Manager:
                        <input type="text" name="personalManager" value={formData.personalManager}
                               onChange={handleInputChange}/>
                    </div>
                </div>

            </div>
            <div className="customers-table-info-content">
                <AdminTransactionsTable />
            </div>

        </DashboardContent>
    );
};
