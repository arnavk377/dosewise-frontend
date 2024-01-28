import React, { useState, useEffect } from 'react';
import Navbar from './navbar.jsx';

function Alert() {
    const [alerts, setAlerts] = useState(null);

    const runConflictCheck = (event) => {
        console.log("Checking for conflicts");
        var cbutton = document.getElementById("conflictcheck");
        cbutton.innerHTML = "Checking for conflicts...";
        cbutton.disabled = true;

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
                setAlerts(res);
                console.log("ALERTS");
                console.log(res);
                if (Array.isArray(res) && res.length) {
                    res.forEach(item =>
                        {
                            const newAlert = document.createAttribute("alert_new");
                            newAlert.value = "true";
                            const alertDiv = document.createElement("div");
                            alertDiv.setAttributeNode(newAlert);
                            alertDiv.setAttribute("class", "alert");
                            alertDiv.setAttribute("role", "alert");
                            alertDiv.innerHTML = item;
                            document.getElementById("alertsdiv").appendChild(alertDiv);
                        })
                    cbutton.className = "btn btn-warning b100";
                    cbutton.innerHTML = "Conflicts found";
                }
                else {
                    cbutton.className = "btn btn-success b100";
                    cbutton.innerHTML = "No conflicts found";
                }
            })
            .catch(err => {
                console.log(err);
                cbutton.className = "btn btn-danger b100";
                cbutton.innerHTML = "Error checking for conflicts";
                document.getElementById("alertsdiv").innerHTML = "Error checking for conflicts. This is likely due to a rate limit, please try again later."
            });
    }

    return (
        <>
            <div className="container bg-white p-4 my-5 rounded">
                <h1 className="text-center">Medication Conflicts</h1>
                <button className="btn btn-warning b100" onClick={runConflictCheck} id='conflictcheck'>Check for medication conflicts</button>
                <div className="text-center" id="alertsdiv"></div>
            </div>
        </>
    )
}

export default Alert;