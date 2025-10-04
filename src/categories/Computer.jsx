
import React, { useEffect, useState } from "react";
import BASE_URL from "../config";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import { addtoCart } from "../CartSlice.js";
const Computer = () => {
    const [apiData, setApiData] = useState([]);
    const dispatch = useDispatch();
  const navigate = useNavigate()
    const loadData = async () => {
      let api = `${BASE_URL}/admin/displayProduct`;
      try {
        let res = await axios.get(api);
        setApiData(res.data);
        console.log(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    const customerAunthenticate = async () => {
      const token = localStorage.getItem("token");
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
            navigate("/login");
          }
        }
      } 
    };
    useEffect(() => {
      loadData();
      customerAunthenticate()
    }, []);
  return (
    <>
      <Carousel>
      <Carousel.Item>
      <img src="./cro5.jpg" alt="" width="100%" height="500px"/>
      </Carousel.Item>
      <Carousel.Item>
      <img src="./cro4.jpg" alt="" width="100%" height="500px"/>
      </Carousel.Item>
      <Carousel.Item>
       <img src="./cro3.jpg" alt="" width="100%" height="500px"/>
      </Carousel.Item>
    </Carousel>
    <br />
    <Container fluid>
  <Row xs={1} sm={2} md={3} lg={4} className="g-4">
    {apiData
      .filter((e) => e.category.toLowerCase() === "computers")
      .map((e, index) => (
        <Col key={index} className="d-flex justify-content-center">
          <Card
            style={{
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              background: "linear-gradient(135deg, #2980b9, #16a085)",
              color: "white",
              margin: "10px",
              minWidth: "250px",
            }}
            className="h-100"
          >
            <Card.Img
              variant="top"
              src={`${BASE_URL}/${e.defaultImage}`}
              style={{ height: "300px", width: "100%" }}
            />
            <Card.Body className="text-center">
              <Card.Title>{e.name}</Card.Title>
              <h6>{e.brand}</h6>
              <Card.Text>{e.description}</Card.Text>
              <h6 style={{ fontWeight: "bold" }}>
                <FaRupeeSign />{e.price}
              </h6>
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
        </Col>
      ))}
  </Row>
</Container>

      <br />
      <br />
      <br />
      
    </>
  )
}

export default Computer