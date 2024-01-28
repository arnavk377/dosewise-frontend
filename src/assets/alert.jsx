import React, { useState, useEffect } from 'react';
import Navbar from './navbar.jsx';

function Alert() {
    const [alerts, setAlerts] = useState(null);
    useEffect(() => {
        var url = 'http://localhost:8080/api/v1/get_interactions_for_user?username=' + localStorage.getItem('username');
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
                setAlerts(res);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <div>hi</div>
    )
}

export default Alert;