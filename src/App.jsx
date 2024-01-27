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
    return (
      <>
      <h1>MATCHED DRUG: {drugInfo}</h1>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <h1>Welcome to DoseWise!</h1>
      <form className='input-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='data'>Drug Name</label>
          <input type='text' id='data' 
          value={data || ""}
          onChange={(e) => setData(e.target.value)}
          />
        </div>
        <input type="submit"/>
      </form>
      <p id="drugInfo">DRUG INFO</p>
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
    .then(response => response.json())
    .then(data => {
      console.log(data);

      // change html element to display drug info
      document.getElementById("drugInfo").innerHTML = data.results[0].active_ingredients[0].name;

      return;
    })
    .catch(err => console.log(err));
}

