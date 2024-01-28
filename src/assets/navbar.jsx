import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
import dosewiseLogo from './dosewiselogo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function navbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-dark">
      <Container className="px-1 mx-3">
        <img src={dosewiseLogo} alt="DoseWise Logo" className="logo" /> 
        <Navbar.Brand href="/" className="text-white px-2 popUp questrial">Dosewise</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav navbar-dark">
          <Nav className="me-auto navbar-light">
            <Nav.Link href="/signup"className="text-white px-2 popUp questrial text-center">Sign Up</Nav.Link>
            <Nav.Link href="/login"className="text-white px-2 popUp questrial text-center">Login</Nav.Link>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;