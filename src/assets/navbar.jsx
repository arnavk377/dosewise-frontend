import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
import dosewiseLogo from './dosewiselogo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function navbar() {

  // check if logged in and change the section in the navbar accordingly
  // change only the small snippet and then inject it into the navbar
  var navbarSnippet = (<></>);
  var userStatement = (<>DoseWise</>);

  const logOut = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('hash');

    window.location.href = '/';
  }

  if(localStorage.getItem('username') === null || localStorage.getItem('hash') === null) {
    navbarSnippet = (
      <>
        <Nav.Link href="/signup"className="text-white px-2 popUp questrial text-center">Sign Up</Nav.Link>
        <Nav.Link href="/login"className="text-white px-2 popUp questrial text-center">Login</Nav.Link>
      </>
    );
  } else {
    navbarSnippet = (
      <>
        <Nav.Link onClick={logOut} className="text-white px-2 popUp questrial text-center">Logout</Nav.Link>
      </>
    );
    userStatement = (<>
      <div className="greenc">{localStorage.getItem('username')}'s DoseWise</div>
      </>
    )

  }

  // put navbar snippet into the return statement with the entire navbar


  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-dark">
      <Container className="px-1 mx-3">
        <img src={dosewiseLogo} alt="DoseWise Logo" className="logo" /> 
        <Navbar.Brand href="/" className="text-white px-2 popUp questrial">{userStatement}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav navbar-dark">
          <Nav className="me-auto navbar-light">

            <Nav.Link href="/prescriptiontable"className="text-white px-2 popUp questrial text-center">Current Medications</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="px-1 questrial text-center">
              <NavDropdown.Item >Action</NavDropdown.Item>
              <NavDropdown.Item >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

            {navbarSnippet}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;