import React from 'react';
import Navbar from './navbar.jsx';
import "./navbar.css";
import "./signup.css"; // Importing the signup.css file

function SignUp() {
    return (
        <>
        <Navbar />
        <div className='signup-container'>
            <form>
                <div className='signup-box'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' className='signup-box input' />
                </div>
                <div className='signup-box'>
                    <label htmlFor='password'>Password</label>
                    <input type='text' id='password' className='signup-box input' /> 
                </div>
                <div className='signup-box'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' className='signup-box input' /> 
                </div>
                <div className='signup-box'>
                    <label htmlFor='age'>Age</label>
                    <input type='text' id='age' className='signup-box input' /> 
                </div>
                <div className='signup-box'>
                    <label htmlFor='weight'>Weight</label>
                    <input type='text' id='weight' className='signup-box input' />
                </div>
                <div className='signup-box'>
                    <label htmlFor='gender'>Gender</label>
                    <input type='text' id='gender' className='signup-box input' /> 
                </div>
                <input type='submit' className='submit-button' /> 
            </form>
        </div>
        </>
    )
}

export default SignUp