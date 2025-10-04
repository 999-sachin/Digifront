import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaTruckPickup, FaBox, FaTag, FaSync, FaRupeeSign } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import BASE_URL from '../config';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addtoCart } from '../cartSlice';

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = async () => {
    let api = `${BASE_URL}/admin/displayProduct`;
    try {
      let res = await axios.get(api);
      setApiData(res?.data);
      // console.log("res data", res?.data);
    } catch (error) {
      console.log(error);
    }
  };
console.log(apiData);




  const customerAunthenticate = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        let api = `${BASE_URL}/customer/userauthenticate`;
        const res = await axios.get(api, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(res.data);
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.clear();
          navigate('/login');
        }
      }
    }
  };

  useEffect(() => {
    loadData();
    customerAunthenticate();
  }, []);

  return (
    <>
      <video
        src="./headvideo.mp4"
        autoPlay
        muted
        loop
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '450px',
          objectFit: 'cover',
        }}
      />
      <br />
      <div id="headimg" className="d-flex justify-content-center flex-wrap gap-2">
        <img src="./mainone.avif" alt="Main One" className="responsive-img" style={{ maxWidth: '100%', height: 'auto' }} />
        <img src="./maintwo.avif" alt="Main Two" className="responsive-img" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <br />
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px 0' }}>
        <Container>
          <Row className="text-center justify-content-center">
            <Col xs={6} md={3} className="d-flex flex-column align-items-center my-2">
              <FaTruckPickup size={40} color="#6C63FF" />
              <h5>Curb-side pickup</h5>
            </Col>
            <Col xs={6} md={3} className="d-flex flex-column align-items-center my-2">
              <FaBox size={40} color="#6C63FF" />
              <h5>Free shipping on orders over $50</h5>
            </Col>
            <Col xs={6} md={3} className="d-flex flex-column align-items-center my-2">
              <FaTag size={40} color="#6C63FF" />
              <h5>Low prices guaranteed</h5>
            </Col>
            <Col xs={6} md={3} className="d-flex flex-column align-items-center my-2">
              <FaSync size={40} color="#6C63FF" />
              <h5>Available to you 24/7</h5>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <Container className="py-4">
        <h1 align="center">Shop By Category</h1>
        <br />
        <Row xs={2} md={4} className="g-4 text-center">
          <Col><a href="#computers" className="icon-link d-block">Computers</a></Col>
          <Col><a href="#mobile" className="icon-link d-block">Mobile</a></Col>
          <Col><a href="#drones" className="icon-link d-block">Drones & Cameras</a></Col>
          <Col><a href="#sale" className="icon-link d-block">Sale</a></Col>
          <Col><a href="#tablets" className="icon-link d-block">Tablets</a></Col>
          <Col><a href="#bestsellers" className="icon-link d-block">Best Sellers</a></Col>
          <Col><a href="#tv" className="icon-link d-block">TV & Home Cinema</a></Col>
          <Col><a href="#wearable" className="icon-link d-block">Wearable Tech</a></Col>
        </Row>
      </Container>
      <br />

      <Container fluid>
        <h2 className="text-center mb-4">Featured Products</h2>
        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '1rem',
            padding: '1rem',
            scrollSnapType: 'x mandatory',
          }}
        >
          {apiData.length >0  && apiData?.map((e, index) => (
            <div
              key={index}
              style={{
                flex: '0 0 auto',
                scrollSnapAlign: 'start',
                minWidth: '250px',
                maxWidth: '300px',
              }}
            >
              <Card
                style={{
                  border: 'none',
                  borderRadius: '10px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  background: 'linear-gradient(135deg, #2980b9, #16a085)',
                  color: 'white',
                  height: '100%',
                }}
              >
                <Card.Img
                  variant="top"
                  src={`${BASE_URL}/${e.defaultImage}`}
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{e.name}</Card.Title>
                  <h6>{e.brand}</h6>
                  <Card.Text>{e.description}</Card.Text>
                  <h6 style={{ fontWeight: 'bold' }}><FaRupeeSign />{e.price}</h6>
                  <Button
                    onClick={() =>
                      dispatch(
                        addtoCart({
                          id: e._id,
                          name: e.name,
                          description: e.description,
                          brand: e.brand,
                          category: e.category,
                          price: e.price,
                          defaultImage: e.defaultImage,
                          image: e.image,
                        })
                      )
                    }
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
      <br />

      <div style={{ backgroundColor: '#7a00ff', padding: '50px 0', color: '#fff' }}>
        <Container className="text-center">
          <h2 style={{ fontWeight: 'bold' }}>Newsletter</h2>
          <p>Sign up to receive updates on new arrivals and special offers</p>
          <Form>
            <Row className="justify-content-center">
              <Col xs={10} md={6} className="d-flex">
                <Form.Control
                  type="email"
                  placeholder="Email *"
                  required
                  className="me-2 rounded-pill"
                  style={{ padding: '0.75rem', borderColor: '#fff', color: '#000' }}
                />
                <Button type="submit" variant="dark" className="rounded-pill">Subscribe</Button>
              </Col>
            </Row>
            <Row className="justify-content-center mt-3">
              <Col xs={10} md={6} className="text-start">
                <Form.Check type="checkbox" label="Yes, subscribe me to your newsletter. *" />
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default Home;
