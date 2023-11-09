import React, {useState} from "react";
import {DashboardContent} from "./Styles.jsx";
import {ChartsLine} from "../ChartsLine/ChartsLine.jsx";

export const SingleCustomerDashboardInfo = ({...customerData}) => {
    const [formData, setFormData] = useState({...customerData});


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSaveClick = async () => {
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

            } else {
                console.error('Error saving customer data:', response.statusText);
            }
        } catch (error) {
            console.error('Error saving customer data:', error);
        }
    };
    return (
        <DashboardContent>
            <div className="control">
                <h2>Dashboard</h2>
                <button onClick={handleSaveClick}>
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
                    <h3>Graph1</h3>
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
                    <div className="chart-line" style="height: 116px">
                        <ChartsLine {...customerData}/>
                    </div>

                </div>
            </div>
        </DashboardContent>
    )
}