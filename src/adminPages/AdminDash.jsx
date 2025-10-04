import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import Footer from "../components/Footer";

const AdminDash = () => {
  let name = localStorage.getItem("name");
  let email = localStorage.getItem("email");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    if (!localStorage.getItem("name")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <div>
        <h5
          align="center"
          style={{ marginTop: "70px", color: "#2c3e50", paddingTop: "10px" }}
        >
          Welcome, {name} your official email is {email}
        </h5>
      </div>

      <div>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#" style={{ fontWeight: "bold" }}>
              <img src="https://i.pinimg.com/736x/73/9d/92/739d92f600c0f710912013c15c58bf3b.jpg" alt="Logo" width="50" height="50" />{" "}
              Digital Store
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="add-product" className="text-white">
                  Add Product
                </Nav.Link>
                <Nav.Link as={Link} to="manage-product" className="text-white">
                  Manage Product
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="customer-booking"
                  className="text-white"
                >
                  Customer Booking
                </Nav.Link>
                <Button
                  onClick={logout}
                  className="btn btn-danger ms-3"
                  style={{
                    padding: "8px 25px",
                    fontSize: "16px",
                    borderRadius: "30px",
                  }}
                >
                  Logout
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div
        style={{
          background: "linear-gradient(135deg, #6e7dff, #88b3ff)",
          minHeight: "100vh",
          paddingTop: "100px",
        }}
      >
        <Container className="text-center py-5">
          <Row>
            <Col>
              <h4
                style={{ color: "#fff", fontSize: "24px", fontWeight: "bold" }}
              >
                Welcome to the Admin Dashboard
              </h4>
              <p style={{ color: "#fff", fontSize: "18px" }}>
                Manage your products and customer bookings easily!
              </p>
            </Col>
          </Row>
        </Container>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AdminDash;
