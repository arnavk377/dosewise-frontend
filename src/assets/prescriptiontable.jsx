import React, { useState, useEffect } from 'react';
import Navbar from './navbar.jsx';

function PrescriptionTable() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/api/v1/get_medicines_for_user?username=jdoe')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []); // <-- Fixed the misplaced comma here


    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <>
            <Navbar />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Dosage Frequency Unit</th>
                            <th>Dosage Frequency</th>
                            <th>Dosage Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map(data => (
                                <tr key={data[0]}>
                                    <td>{data[0]}</td>
                                    <td>{data[1]}</td>
                                    <td>{data[2]}</td>
                                    <td>{data[3]}</td>
                                    <td>{data[4]}</td>
                                    <td>
                                        {data[7]} every {data[6]}
                                    </td>
                                    <td>{data[8]}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default PrescriptionTable;
