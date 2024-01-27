import { useState } from 'react'
import Navbar from './assets/navbar.jsx'

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

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center">
      <h1 className="text-white main-title">Welcome to Dosewise!</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center">
      <form className='input-form' onSubmit={handleSubmit}>
        <div className="text-center">
          <label htmlFor='data' className="fs-4 text-white">Drug Name</label>
          <input type='text' 
          className='form-control mt-2'
          id='data' 
          value={data || ""}
          onChange={(e) => setData(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <input className="btn btn-dark mt-3 bstyle" type="submit"/>
        </div>
      </form>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5">
      <p id="drugInfo" className="text-white">DRUG INFO</p>
      </div>
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
        var dconf = confirm("Drug found: " + drugResult + " by manufacturer: " + drugManufacturer + ". Click OK if this is accurate. If not, please cancel and try searching again.");
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
      alert(err.message);
    });
}

