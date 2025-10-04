import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart, FaUser, FaUserShield, FaHeart } from 'react-icons/fa';
import { Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import BASE_URL from '../config';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { FaUserEdit } from "react-icons/fa";

const Header = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shopData , setShopData] = useState([])
  const navigate = useNavigate();
  const Product = useSelector((state) => state.mycart.cart);
  const ProLength = Product.length;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let api = `${BASE_URL}/admin/adminlogin`;
      let res = await axios.post(api, { email, password });
      toast("Logged in");
      console.log(res.data);
      setShow(false);
      navigate("/admindash");
      localStorage.setItem("name", res.data.name);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("adminid", res.data._id);
    } catch (error) {
      toast(error.message);
    }
  };
  

  return (
    <>
      <Navbar style={{ backgroundColor: 'pink' }} expand="lg" className="header-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            <img src="https://i.pinimg.com/736x/73/9d/92/739d92f600c0f710912013c15c58bf3b.jpg" width="50px" alt="" />Digital Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search items here"
                  className="me-2 search-input"
                  aria-label="Search"
                  style={{ backgroundColor: 'grey', color: 'white' }}
                />
                <Button variant="outline-dark" className="search-btn">Search</Button>
              </Form>
            </Nav>
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link as={Link} to="register" className="text-dark icon-link">
                <FaUserEdit size={20} />
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className="text-dark icon-link position-relative">
                <FaShoppingCart size={20}  />
                  <span className="badge rounded-circle bg-danger text-white position-absolute top-0 start-100 translate-middle">
                    {ProLength}
                  </span>
              </Nav.Link>
              <Nav.Link as={Link} to="login" className="text-dark icon-link">
                <FaUser size={20} />
              </Nav.Link>
              <Nav.Link href="#admin" className="text-dark icon-link">
                <FaUserShield size={20} onClick={handleShow} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default Header;
