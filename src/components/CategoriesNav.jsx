import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router-dom';

const CategoriesNav = () => {
  let name = localStorage.getItem("name");
  let email = localStorage.getItem("email");
  let navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <Navbar className="navbar-custom-gradient" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Digital Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/product" style={{ fontSize: '0.9rem' }}>Shop All</Nav.Link>
              <Nav.Link as={Link} to="computer" style={{ fontSize: '0.9rem' }}>Computers</Nav.Link>
              <Nav.Link as={Link} to="tablet" style={{ fontSize: '0.9rem' }}>Tablets</Nav.Link>
              <Nav.Link as={Link} to="drone"style={{ fontSize: '0.9rem' }}>Drones & Cameras</Nav.Link>
              <Nav.Link as={Link} to="audio"style={{ fontSize: '0.9rem' }}>Headphones & Speakers</Nav.Link>
              <Nav.Link as={Link} to="mobile" style={{ fontSize: '0.9rem' }}>Mobile</Nav.Link>
              <Nav.Link as={Link} to="tv" style={{ fontSize: '0.9rem' }}>T.V.</Nav.Link>
              <Nav.Link as={Link} to="wearable" style={{ fontSize: '0.9rem' }}>Wearable Tech</Nav.Link>
              <Nav.Link as={Link} to="sale" style={{ fontSize: '0.9rem' }}>Sale</Nav.Link>
            </Nav>
            <Dropdown align="end">
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ fontSize: '0.9rem' }}>
                User Information
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item disabled>Welcome: {name}</Dropdown.Item>
                <Dropdown.Item disabled>Email: {email}</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CategoriesNav;
