import React from 'react';
import "./navbar.css";
import Navbar from './navbar.jsx';
import "./signup.css";

function LogIn() {

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // get all form data
        const data = new FormData(event.target);
        
        // log all values in the FormData object
        for (var pair of data.entries()) {
            console.log(pair[0]+ ', '+ pair[1]); 
        }

        // hash password with mb5
        var hash = require('md5');
        var password = hash(data.get('password'));

        // create a JS fetch get request, append all data to the url
        var url = 'http://localhost:8080/api/v1/auth';
        url += '?username=' + data.get('username');
        url += '&password=' + password;
        const options = {
            method: 'GET'
        };

        // fetch data and confirm success
        const response = fetch(url, options);
        if (response.ok) {
            const responseData = response.text();
            if (responseData === 'true') {
                localStorage.setItem('username', username);
                localStorage.setItem('hash', password);
            } else {
                console.log('Authentication failed');
            }
        } else {
            console.log('Network response unsuccessful.');
        }

        return;
    }

    return (
        <>
        <Navbar />
        <div className='signup-container'>
            <form onSubmit={handleSubmit}>
            <h1>Login</h1>
                <div className='signup-box'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' className='signup-box input' />
                </div>
                <div className='signup-box'>
                    <label htmlFor='password'>Password</label>
                    <input type='text' id='password' className='signup-box input' /> 
                </div>
                <input type='submit' className='submit-button' /> 
            </form>
        </div>
        </>
    )
}

export default LogIn