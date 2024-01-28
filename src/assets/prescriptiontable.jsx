import React, { useState, useEffect } from 'react';
import Navbar from './navbar.jsx';
import Alert from './alert.jsx';

function PrescriptionTable() {
    const [data, setData] = useState(null);
    useEffect(() => {
        var url = 'http://localhost:8080/api/v1/get_medicines_for_user?username=' + localStorage.getItem('username');
        url += '&hash=' + localStorage.getItem('hash');
        const options = {
            method: 'GET'
        }
        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(res => {
                // console.log(res)
                setData(res);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const deleteMedicine = (id) => {
        console.log("Deleting: " + id);
        return;
    }


    return (
        <>
            <Navbar />
            <Alert />
            <div className="container p-4 bg-white rounded">
                <h1 className="text-center questrial">Current Medications</h1>
                <table className="table questrial">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Frequency</th>
                            <th>Doses Remaining</th>
                            <th>Take Dose</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map(data => (
                                <tr key={data[0]}>
                                    <td>{data[1]}</td>
                                    <td>{data[3]}</td>
                                    <td>{data[4]}</td>
                                    <td>{data[6]} every {data[5]}</td>
                                    <td>
                                        {data[7]}
                                    </td>
                                    <td>
                                        <button className="btn btn-primary"><i className="fa-solid fa-pills"></i> Intake</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => deleteMedicine(data[0])}><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}


export default PrescriptionTable;
