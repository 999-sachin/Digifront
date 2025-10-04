import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { HiDocumentCurrencyRupee } from "react-icons/hi2";
import axios from 'axios';
import BASE_URL from '../config';

const Checkout = () => {
  const id = localStorage.getItem("id");
  const [apidata, setApiData] = useState({});
  const [data, setData] = useState([]);
  const products = useSelector((state) => state.mycart.cart);
  const navigate = useNavigate();

  useEffect(() => {
    setData(products);
  }, [products]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const api = `${BASE_URL}/customer/checkout/?id=${id}`;
      const res = await axios.get(api);
      setApiData(res.data);
    } catch (error) {
      console.error("Failed to fetch customer data:", error);
    }
  };

  const totalAmount = data.reduce((acc, item) => acc + item.price * item.qnty, 0);
  const productsName = data.map(item => item.name).join(", ");

  const initPay = (data) => {
    const options = {
      key: "rzp_test_iT1m7z7AJPuXoA",
      amount: data.amount,
      currency: data.currency,
      name: "My E-Commerce Store",
      description: "Product Payment",
      image: "https://cdn-icons-png.flaticon.com/512/891/891419.png",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyURL = `${BASE_URL}/api/payment/verify`;
          await axios.post(verifyURL, response);
          alert("Payment Successful");
          navigate("/order-success");
        } catch (error) {
          console.error("Payment verification failed:", error);
        }
      },
      theme: {
        color: "#007bff",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePay = async () => {
    try {
      const orderURL = `${BASE_URL}/api/payment/orders`;
      const { data: resData } = await axios.post(orderURL, {
        amount: totalAmount,
        customername: apidata.name,
        address: apidata.address,
        contact: apidata.contact,
        email: apidata.email,
        proname: productsName,
      });
      initPay(resData.data);
    } catch (error) {
      console.error("Order creation failed:", error);
    }
  };

  return (
    <Container className="checkout-page py-4">
      <h2 className="text-center mb-4">Checkout</h2>

      <Row>
        <Col md={8}>
          <h5 className="mb-3">Your Cart</h5>
          {
            data.map((item, index) => (
              <Card className="mb-3 shadow-sm" key={index}>
                <Card.Body className="d-flex align-items-center">
                  <img
                    src={`${BASE_URL}/${item.defaultImage}`}
                    alt={item.name}
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px", marginRight: "15px" }}
                  />
                  <div style={{ flex: 1 }}>
                    <h6>{item.name}</h6>
                    <p className="mb-1">Brand: {item.brand}</p>
                    <p className="mb-1 text-muted">Qty: {item.qnty}</p>
                    <p className="mb-0 fw-bold text-success">₹{item.price * item.qnty}</p>
                  </div>
                </Card.Body>
              </Card>
            ))
          }

          <h5 className="mt-4 mb-3">Shipping Information</h5>
          <Card className="shadow-sm">
            <Card.Body>
              <p><strong>Email:</strong> {apidata.email || "N/A"}</p>
              <p><strong>Address:</strong> {apidata.address || "N/A"}</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm sticky-top" style={{ top: "80px" }}>
            <Card.Header as="h5">Summary</Card.Header>
            <Card.Body>
              <h6>Total Items: {data.length}</h6>
              <h5 className="text-success mt-2 d-flex align-items-center">
                <HiDocumentCurrencyRupee size={22} className="me-1" />
                {totalAmount}
              </h5>
              <Button
                variant="success"
                className="w-100 mt-3"
                disabled={data.length === 0}
                onClick={handlePay}
              >
                Pay Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
