import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigationbar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark" variant='dark' sticky='top'>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav variant="underline text-danger" >
              <Nav.Item className='mx-3'>
                <Nav.Link as={Link} to="/"><b>ALL</b></Nav.Link>
              </Nav.Item>
              <Nav.Item className='mx-3'>
                <Nav.Link as={Link} to="/full-stack-development"><b>FULL STACK DEVELOPMENT</b></Nav.Link>
              </Nav.Item>
              <Nav.Item className='mx-3'>
                <Nav.Link as={Link} to="/data-science"><b>DATA SCIENCE</b></Nav.Link>
              </Nav.Item>
              <Nav.Item className='mx-3'>
                <Nav.Link as={Link} to="/cyber-security"><b>CYBER SECURITY</b></Nav.Link>
              </Nav.Item>
              <Nav.Item className='mx-3'>
                <Nav.Link as={Link} to="/career"><b>CAREER</b></Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigationbar