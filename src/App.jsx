import { useState } from 'react'
import Navbar from './assets/navbar.jsx'
import example1 from './assets/dw_example_1.png'

export default function App() {
  const [data, setData] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    // get drug name from API request
    const drugName = {data}
    console.log(drugName.data);
    // get drug info from API request
    const drugInfo = getDrugInfo(drugName.data);
    // display drug info
    return;
  }

  // check if there is a username and hash stored in local storage.
  // if not, redirect to login page
  if (localStorage.getItem('username') === null || localStorage.getItem('hash') === null) {
    return (
      <>
        <Navbar />
        <div className="backgroundimage-div"><div className="backgroundimage-overlay">
          <div className="d-flex justify-content-center align-items-center">
            <h1 className="text-white main-title">Welcome to DoseWise!</h1>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <h3 className="text-white questrial">Please <a className="noul" href="/login">log in</a> or <a className="noul" href="/signup">sign up</a> to get started!</h3>
          </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="backgroundimage-div"><div className="backgroundimage-overlay">
      <div className="d-flex justify-content-center align-items-center">
      <h1 className="text-white main-title">Welcome to DoseWise!</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center">
      <form className='input-form w-50' onSubmit={handleSubmit}>
        <div className="text-center">
          <label htmlFor='data' className="fs-4 text-dark questrial">Enter a medication name</label>
          <div className="input-group mb-3">
          <input type='text' 
          className='form-control'
          id='data' 
          value={data || ""}
          onChange={(e) => setData(e.target.value)}
          />
          <div className="input-group-append">
            <input className="btn btn-dark bstyle" type="submit"/>
          </div>
          </div>
        </div>

        <label className="fs-3 text-dark questrial text-center">OR</label>

        <div className="text-center">
          <button className="btn btn-dark bstyle b100" type="button" onClick={() => window.location.href = '/prescriptiontable'}>View your prescriptions</button>
        </div>
      </form>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5">
      <p id="drugInfo" className="text-white invisible" >DRUG INFO</p>
      </div>
      </div></div>
    </>
  )
}

function getDrugInfo(drugName) {
  // API request to get drug info
  const url = 'http://localhost:8080/api/v1/lookup?name=' + drugName; //http://localhost:8080/api/v1/lookup?name=
  // no-cors mode to allow cross-origin requests
  const options = {
    method: 'GET'
  };
  // fetch data and return the name of the drug
  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response unsuccessful.');
      }
      return response;
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);

      // change html element to display drug info
      const drugResult = data.results[0].active_ingredients[0].name;
      const drugManufacturer = data.results[0].openfda.manufacturer_name[0];
      if (drugResult == undefined) {
        alert("Drug not found!")
      }
      else {
        document.getElementById("drugInfo").innerHTML = drugResult;
        var dconf = confirm("Drug found: " + drugResult + "\nManufacturer: " + drugManufacturer + "\nClick OK if this is accurate. If not, please cancel and try searching again.");
        if (dconf == true) {
          window.location.href = '/prescription' + '?name=' + drugResult + '&manufacturer=' + drugManufacturer;
        }
        else {
          window.location.href = '/';
        }
      }

      return;
    })
    .catch(err => {
      alert("Drug not found. Try using a different name or checking the spelling.");
    });
}

