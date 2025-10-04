import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import BASE_URL from '../config';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
const Registration = () => {
    const[input,  setInput] = useState({})
    const navigate = useNavigate()
    const changeHandler = (e)=>{
        let{name , value} = e.target;
        setInput({
            ...input,
            [name] : value
        })
    }
    const submitHandler = async(e)=>{
        e.preventDefault();
        let api = `${BASE_URL}/customer/registration`
        try {
            let res = await axios.post(api , input)
            console.log(res.data)
            alert(res.data)
        } catch (error) {
            alert(error)
        }
    }
    const login = ()=>{
       navigate("/login")
    }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100" >
        <Card style={{ width: '90%', maxWidth: '500px' }} className="shadow">
          <Card.Body>
            <h2 className="text-center mb-4">Customer Registration</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter your name" onChange={changeHandler} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter your email" onChange={changeHandler} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Phone Number</Form.Label> 
                <Form.Control type="text" name='number' placeholder="Enter your phone number"  onChange={changeHandler} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" name='address' placeholder="Enter your address" onChange={changeHandler} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" name='city' placeholder="Enter your city"  onChange={changeHandler}/>
              </Form.Group>
              <p>Already have an account <a style={{textDecoration : "none"}} href="" onClick={login}>login Now</a></p>

              <div className="d-grid gap-2">
                <Button variant="primary" onClick={submitHandler}>
                  Register Now
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Registration;
