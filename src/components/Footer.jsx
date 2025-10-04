import React from 'react';
import { Container, Row, Col, Nav, NavDropdown } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BsPaypal } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', paddingTop: '30px', paddingBottom: '30px' }} className="navbar-custom-gradient">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Store Location</h5>
            <p>500 Terry Francine Street</p>
            <p>San Francisco, CA 94158</p>
            <p>info@mysite.com</p>
            <p>123-456-7890</p>
            <div>
              <FaFacebook size={20} style={{ marginRight: '10px' }} />
              <FaInstagram size={20} style={{ marginRight: '10px' }} />
              <FaTwitter size={20} style={{ marginRight: '10px' }} />
              <FaYoutube size={20} />
            </div>
          </Col>

          <Col md={3}>
            <h5>Shop</h5>
            <Nav className="flex-column" >
              <Nav.Link href="#home" style={{color : "black", fontSize : '10px'}}>Shop All</Nav.Link>
              <Nav.Link href="#computers" style={{color : "black" , fontSize : '10px'}}>Computers</Nav.Link>
              <Nav.Link href="#tablets" style={{color : "black" , fontSize : '10px'}}>Tablets</Nav.Link>
              <Nav.Link href="#drones" style={{color : "black" , fontSize : '10px'}}>Drones & Cameras</Nav.Link>
              <NavDropdown title="Audio" id="audio-dropdown" style={{color : "black" , fontSize : '10px'}}>
                <NavDropdown.Item href="#headphones" style={{color : "black" , fontSize : '10px'}} >Headphones</NavDropdown.Item>
                <NavDropdown.Item href="#speakers" style={{color : "black" , fontSize : '10px'}}>Speakers</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#mobile" style={{color : "black" , fontSize : '10px'}}>Mobile</Nav.Link>
              <Nav.Link href="#tv" style={{color : "black" , fontSize : '10px'}}>T.V. & Home Cinema</Nav.Link>
              <Nav.Link href="#wearables" style={{color : "black" , fontSize : '10px'}}>Wearable Tech</Nav.Link>
              <Nav.Link href="#sale" style={{color : "black" , fontSize : '10px'}}>Sale</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Customer Support</h5>
            <Nav className="flex-column">
              <Nav.Link href="#contact" style={{color : "black" , fontSize : '10px'}}>Contact Us</Nav.Link>
              <Nav.Link href="#help" style={{color : "black" , fontSize : '10px'}}>Help Center</Nav.Link>
              <Nav.Link href="#about" style={{color : "black" , fontSize : '10px'}}>About Us</Nav.Link>
              <Nav.Link href="#careers" style={{color : "black" , fontSize : '10px'}}>Careers</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Policy</h5>
            <Nav className="flex-column">
              <Nav.Link href="#shipping" style={{color : "black" , fontSize : '10px'}}>Shipping & Returns</Nav.Link>
              <Nav.Link href="#terms" style={{color : "black" , fontSize : '10px'}}>Terms & Conditions</Nav.Link>
              <Nav.Link href="#payment" style={{color : "black" , fontSize : '10px'}}>Payment Methods</Nav.Link>
              <Nav.Link href="#faq" style={{color : "black" , fontSize : '10px'}}>FAQ</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col className="text-center" style={{ marginTop: '20px' }}>
            <p>We accept the following paying methods:</p>
            <div style={{ display: 'inline-block' }}>
              <img src="./Visa.avif" alt="Visa" style={{ width: '50px', marginRight: '10px' }} />
              <img src="master.avif" alt="MasterCard" style={{ width: '50px', marginRight: '10px' }} />
              <img src="american.avif" alt="American Express" style={{ width: '50px', marginRight: '10px' }} />
              <img src="pay1.avif" alt="UnionPay" style={{ width: '50px', marginRight: '10px' }} />
              <img src="jcb.avif" alt="JCB" style={{ width: '50px', marginRight: '10px' }} />
              <img src="./discover.avif" alt="Discover" style={{ width: '50px', marginRight: '10px' }} />
              <img src="./paypal.avif" alt="Discover" style={{ width: '50px', marginRight: '10px' }} />
              
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
