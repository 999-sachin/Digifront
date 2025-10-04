import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import BASE_URL from "../config";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { HiDocumentCurrencyRupee } from "react-icons/hi2";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { qntyIncrease, qntyDecrease, productRemove } from "../cartSlice";

const ShoppingCart = () => {
  const products = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Safely calculate totalAmount
  const totalAmount = products.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const qnty = Number(item.qnty) || 0;
    return sum + price * qnty;
  }, 0);

  const goToCheckout = () => {
    navigate("/checkout");
  };

  // Redirect to login if not logged in
  useEffect(() => {
    if (!localStorage.getItem("email")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Shopping Cart</h1>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 style={{ color: "green", fontWeight: "bold" }}>
          <HiDocumentCurrencyRupee /> Total: ₹{totalAmount.toFixed(2)}
        </h4>
        <Button variant="success" onClick={goToCheckout} disabled={products.length === 0}>
          Proceed to Checkout
        </Button>
      </div>

      <div className="table-responsive">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Brand</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Remove</th>
              <th>Buy Now</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((item, index) => {
                const itemTotal = (Number(item.price) || 0) * (Number(item.qnty) || 0);

                return (
                  <tr key={item.id || index}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={`${BASE_URL}/${item.defaultImage}`}
                        alt={item.name}
                        style={{ width: "50px", height: "50px", objectFit: "cover" }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.brand}</td>
                    <td>
                      <FaMinusSquare
                        style={{ fontSize: "22px", cursor: "pointer", marginRight: "5px" }}
                        onClick={() => dispatch(qntyDecrease({ id: item.id }))}
                      />
                      {item.qnty}
                      <FaPlusSquare
                        style={{ fontSize: "22px", cursor: "pointer", marginLeft: "5px" }}
                        onClick={() => dispatch(qntyIncrease({ id: item.id }))}
                      />
                    </td>
                    <td>₹{itemTotal.toFixed(2)}</td>
                    <td>
                      <MdDelete
                        style={{ fontSize: "24px", color: "red", cursor: "pointer" }}
                        onClick={() => dispatch(productRemove({ id: item.id }))}
                      />
                    </td>
                    <td>
                      <Button variant="primary" onClick={goToCheckout}>
                        Buy Now
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  Your cart is empty.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ShoppingCart;
