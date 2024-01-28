import React from 'react';
import "./navbar.css";
import Navbar from './navbar.jsx';
import "./signup.css";
// import md5 hash
import md5 from "md5";


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
        var unhashed = data.get('password');
        console.log(unhashed);
        var hash = md5(unhashed);
        console.log(unhashed + " => " + hash);

        // create a JS fetch get request, append all data to the url
        var url = 'http://localhost:8080/api/v1/auth';
        url += '?username=' + data.get('username');
        url += '&hash=' + hash;
        const options = {
            method: 'GET'
        };

        // fetch data and confirm success
        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    document.getElementById('error').innerHTML = 'User does not exist!';
                    throw new Error('Network response unsuccessful.');
                }
                return response.text();  // read response body as text
            })
            .then(dg => {
                if (dg === 'true') {
                    console.log('Authentication successful');
                    localStorage.setItem('username', data.get('username'));
                    localStorage.setItem('hash', hash);
                    // redirect to home page
                    window.location.href = '/';
                } else {
                    console.log('Authentication failed');
                    //  give error messsage
                    document.getElementById('error').innerHTML = 'Incorrect username or password!';

                }
            })
            .catch(error => {
                document.getElementById('error').innerHTML = 'User does not exist!';
                console.log(error);
            });

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
                    <input type='text' id='username' name='username' className='signup-box input' />
                </div>
                <div className='signup-box'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' className='signup-box input' /> 
                </div>
                <div className='text-danger text-center'>
                    <p id='error'></p>
                </div>
                <input type='submit' className='submit-button' /> 
            </form>
        </div>
        </>
    )
}

export default LogIn