import React from 'react';
import Navbar from './navbar.jsx';
import "./navbar.css";
import "./signup.css"; 
import md5 from "md5";

function SignUp() {

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // get all form data
        const data = new FormData(event.target);
        
        // log all values in the FormData object
        for (var pair of data.entries()) {
            console.log(pair[0]+ ', '+ pair[1]); 
        }

        // create a JS fetch get request, append all data to the url
        var url = 'http://localhost:8080/api/v1/adduser';
        url += '?username=' + data.get('username');
        var hashed = md5(data.get('password'));
        url += '&hash=' + hashed;
        url += '&full_name=' + data.get('fullname');
        const options = {
            method: 'GET'
        };

        // fetch data and confirm success
        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response unsuccessful.');
                }
                return response.text();  // read response body as text
            })
            .then(dg => {
                if (dg === 'true') {
                    console.log('Authentication successful');
                    // save username and hash to local storage
                    localStorage.setItem('username', data.get('username'));
                    localStorage.setItem('hash', hashed);
                    // redirect to home page
                    window.location.href = '/';
                } else {
                    console.log('Authentication failed');
                    //  give error messsage
                    alert('Username already exists.')
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
        <Navbar />
        <div className='signup-container'>
            <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
                <div className='signup-box'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' name='username' className='signup-box input' />
                </div>
                <div className='signup-box'>
                    <label htmlFor='password'>Password</label>
                    <input type='text' id='password' name='password' className='signup-box input' /> 
                </div>
                <div className='signup-box'>
                    <label htmlFor='fullname'>Full Name</label>
                    <input type='text' id='fullname' name='fullname' className='signup-box input' /> 
                </div>
                <input type='submit' className='submit-button' /> 
            </form>
        </div>
        </>
    )
}

export default SignUp