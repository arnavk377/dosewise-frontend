import React from 'react';
import "./navbar.css";
import Navbar from './navbar.jsx';
import "./signup.css";

function LogIn() {
    return (
        <>
        <Navbar />
        <div className='signup-container'>
            <form>
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