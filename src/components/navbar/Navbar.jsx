import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css'

import {Logo} from '../logo/Logo'


export const Navigation = () => {
	return (
		<Navbar bg="light" variant="light" expand="lg" id='main-navigation'>
      <Container>
      	<Navbar.Brand href="#home">
					<Logo />
				</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
						<Nav.Item>
							<Nav.Link href="/">Home</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#products">Products</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#luxury">Luxury</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#luxury">Designs</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#luxury">Contact</Nav.Link>
						</Nav.Item>
            <NavDropdown title="Planning" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                More News
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Events</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                More Events
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
					<Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	)
}
