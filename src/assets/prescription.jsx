import Navbar from './navbar.jsx';

function Prescription() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const paramValue = urlParams.get('name');
    console.log(paramValue);

    return (
        <>
            <Navbar />
            <form className="p-5 container bg-white rounded">
                
                <h1>Prescription information</h1>
                <label htmlFor="drugname"></label>
                <input className="form-control locked-form" type="text" id="drugname" name="drugname" value={paramValue} disabled/>
                <div className="row my-2">
                    <div className="col">
                        <label htmlFor="startdate"></label>
                        <input className="form-control" type="date" id="startdate" name="startdate" />
                    </div>
                    <div className="col">
                        <label htmlFor="enddate"></label>
                        <input className="form-control"type="date" id="enddate" name="enddate" />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <h4 className="text-dark text-center questrial">Taken every</h4>
                    </div>
                    <div className="col">
                        <input className="form-control" type="number" id="dosagecount" name="dosagecount" placeholder="2" />
                    </div>
                    <div className="col">
                    <select className="form-select" id="dosagefreq" name="dosagefreq">
                        <option value="hourly">Hours</option>
                        <option value="daily">Days</option>
                        <option value="weekly">Weeks</option>
                    </select>
                    </div>
                </div>
                <label htmlFor="dosagecount"></label>
                <input type="submit" value="Submit" className="btn btn-primary mt-3 bstyle" />
            </form>
        </>
    )
}

export default Prescription