import React from 'react';
import Navbar from './navbar.jsx';
import "./navbar.css";
import "./signup.css"; 

function SignUp() {
    return (
        <>
        <Navbar />
        <div className='signup-container'>
            <form>
            <h1>Sign Up</h1>
                <div className='signup-box'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' className='signup-box input' />
                </div>
                <div className='signup-box'>
                    <label htmlFor='password'>Password</label>
                    <input type='text' id='password' className='signup-box input' /> 
                </div>
                <div className='signup-box'>
                    <label htmlFor='fullname'>Full Name</label>
                    <input type='text' id='fullname' className='signup-box input' /> 
                </div>
                <input type='submit' className='submit-button' /> 
            </form>
        </div>
        </>
    )
}

export default SignUp