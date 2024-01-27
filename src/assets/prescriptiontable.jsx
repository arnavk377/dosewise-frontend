import Navbar from './navbar.jsx';

function PrescriptionTable() {
    const handleLoad = (event) => {
        event.preventDefault();
        // get drug name from API request
        const table = {data}
        console.log(table.data);
        // get drug info from API request
        // display drug info
        return;
      }
    return (
        <>
            <Navbar />
            <div>
                <table>
                    <tr>
                    <th>Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Dosage Frequency Unit</th>
                    <th>Dosage Frequency</th>
                    <th>Dosage Number</th>
                    <th></th>
                    <th></th>
                    </tr>
                </table>
            </div>
        </>
    )
}

function getPrescriptionInfo() {
    // API request to get drug info
    const username = 'jdoe';
    const url = 'http://localhost:8080/api/v1/get_medicines_for_user?username=' + username; //http://localhost:8080/api/v1/get_medicines_for_user?username=jdoe
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
        return;
      })
      .catch(err => {
        alert(err.message);
      });
  }

export default PrescriptionTable