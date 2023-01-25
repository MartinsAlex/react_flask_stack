import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Catalog from './component/Catalog';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
    <Navbar fixed={'top'} bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">IT Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="">Catalog</Nav.Link>
            <Nav.Link href="#link">Requests</Nav.Link>
            <NavDropdown title="Actions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Validate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <div className='main' >

    
      <Router>

        <Routes>

          <Route path="/"
            element={              
                <>
                  <Catalog />
                </>
            } />

        </Routes>

      </Router>

      </div>

    </>

  );
}

export default App;