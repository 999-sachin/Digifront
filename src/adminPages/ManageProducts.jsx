import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, Card, Spinner } from "react-bootstrap";
import BASE_URL from "../config";

const ManageProducts = () => {
  const [mydata, setMydata] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const api = `${BASE_URL}/admin/getcustomerorder`;
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.error("Error fetching customer orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container className="py-4">
      <Card className="shadow-sm p-4">
        <h2 className="mb-4 text-center text-primary">Customer Orders</h2>

       
          <div className="table-responsive">
            <Table bordered hover striped className="text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Products</th>
                  <th>Total Amount</th>
                  <th>Customer Name</th>
                  <th>Shipping Address</th>
                  <th>Contact No</th>
                  <th>Email</th>
                  <th>Date of Purchase</th>
                </tr>
              </thead>
              <tbody>
                {
                  mydata.map((order, index) => (
                    <tr key={index}>
                      <td>{order.name}</td>
                      <td>₹{order.totalamount}</td>
                      <td>{order.customername}</td>
                      <td>{order.address}</td>
                      <td>{order.contact}</td>
                      <td>{order.email}</td>
                      <td>{new Date(order.dop).toLocaleDateString()}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </div>
        
      </Card>
    </Container>
  );
};

export default ManageProducts;
