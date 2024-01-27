import Navbar from './navbar.jsx';

function PrescriptionTable() {
    
}

function getPrescriptionInfo(username) {
    // API request to get drug info
    const url = 'http://localhost:8080/api/v1/lookup?name=' + drugName; //http://localhost:8080/api/v1/get_medicines_for_user?username=jdoe
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
        alert(err.message);
      });
  }