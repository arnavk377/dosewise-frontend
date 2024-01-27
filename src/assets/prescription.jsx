import Navbar from './navbar.jsx';

function Prescription() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const drugName = urlParams.get('name');
    const drugManufacturer = urlParams.get('manufacturer');
    console.log(drugName + " " + drugManufacturer);

    return (
        <>
            <Navbar />
            <form className="p-5 container bg-white rounded">
                
                <h1 className="text-center">Prescription information</h1>
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
                        <div className="text-dark text-end questrial">Taken every</div>
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
                <input type="submit" value="Submit" className="btn btn-primary mt-3 bstyle" />
            </form>
        </>
    )
}

export default Prescription