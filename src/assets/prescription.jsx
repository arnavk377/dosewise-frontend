import { useState } from 'react'
import Navbar from './navbar.jsx';

function Prescription() {
    const [data, setData] = useState(null)
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const drugName = urlParams.get('name');
    const drugManufacturer = urlParams.get('manufacturer');
    console.log(drugName + " " + drugManufacturer);

    const handleSubmit = (event) => {
        event.preventDefault();

        // get all form data
        const data = new FormData(event.target);
        console.log(data);

        // log all values in the FormData object
        for (var pair of data.entries()) {
            console.log(pair[0]+ ', '+ pair[1]); 
        }

        // create a JS fetch get request, append all data to the url
        var url = 'http://localhost:8080/api/v1/add';
        url += '?name=' + drugName;
        url += '&manufacturer_name=' + drugManufacturer
        url += '&dosage_start_date=' + data.get('startdate');
        url += '&dosage_end_date=' + data.get('enddate');
        url += '&dosage_frequency=' + data.get('dosagecount');
        url += '&dosage_frequency_unit=' + data.get('dosagefreq')
        url += '&dosage_number=' + data.get('dosage');
        url += '*time_until_next_dose=' + "0";
        const options = {
            method: 'GET'
        };

        // fetch data and confirm success
        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response unsuccessful.');
                }
                return response;
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });

        return;
    }


    return (
        <>
            <Navbar />
            <form className="p-5 container bg-white rounded" onSubmit={handleSubmit}>
                
                <h1 className="text-center">Prescription Information</h1>
                <label htmlFor="drugname">Drug Name</label>
                <input className="form-control locked-form" type="text" id="drugname" name="drugname" value={drugName} disabled/>
                <label htmlFor="drugmanufacturer">Drug Manufacturer</label>
                <input className="form-control locked-form" type="text" id="drugmanufacturer" name="drugmanufacturer" value={drugManufacturer} disabled/>
                <div className="row my-2">
                    <div className="col">
                        <label htmlFor="startdate">Start Date</label>
                        <input className="form-control" type="date" id="startdate" name="startdate" />
                    </div>
                    <div className="col">
                        <label htmlFor="enddate">End Date</label>
                        <input className="form-control"type="date" id="enddate" name="enddate" />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-2 align-bottom">
                        <h4 className="text-dark text-end questrial">Taken every</h4>
                    </div>
                    <div className="col">
                    <label htmlFor="dosagecount">Count</label>
                        <input className="form-control" type="number" id="dosagecount" name="dosagecount" placeholder="2" />
                    </div>
                    <div className="col">
                    <label htmlFor="dosagefreq">Frequency</label>
                    <select className="form-select" id="dosagefreq" name="dosagefreq">
                        <option value="hourly">Hours</option>
                        <option value="daily">Days</option>
                        <option value="weekly">Weeks</option>
                    </select>
                    </div>
                </div>
                <label htmlFor="dosage">Dosage</label>
                <input className="form-control" type="text" id="dosage" name="dosage" placeholder="100mg" />
                {/* <label htmlFor="firstdose">First Dose</label>
                <div className="row my-2">
                    <div className="col">
                        <input className="form-control" type="date" id="firstdose" name="firstdose" />
                    </div>
                    <div className="col">
                        <input className="form-control" type="time" id="firstdose" name="firstdose" />
                    </div>
                </div>
                <label htmlFor="notes">Notes</label>
                <textarea className="form-control" id="notes" name="notes" rows="3" placeholder="Take with food"></textarea>
                */}
                <input type="submit" value="Submit" className="btn btn-primary mt-3 bstyle b100"/>
            </form>
        </>
    )
}

export default Prescription