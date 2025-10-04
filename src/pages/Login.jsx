import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import BASE_URL from '../config';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

const Login = () => {
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
      let api = `${BASE_URL}/customer/login`
      try {
          let res = await axios.post(api , input)
          console.log(res.data)
          alert("logged in successfully...")
          localStorage.setItem("token" , res.data.token)
          localStorage.setItem("name" , res.data.data.name)
          localStorage.setItem("email" , res.data.data.email)
          localStorage.setItem("id" , res.data.data._id)



          navigate("/")
      } catch (error) {
         console.log(error)
      }
  }
  const register = ()=>{
     navigate("/register")
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100" >
        <Card style={{ width: '90%', maxWidth: '500px' }} className="shadow">
          <Card.Body>
            <h2 className="text-center mb-4">Customer Login</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter your email" onChange={changeHandler} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Enter your password"  onChange={changeHandler}/>
              </Form.Group>
              <p>Don't have an account <a style={{textDecoration : "none"}} href="" onClick={register}>Register Now</a></p>

              <div className="d-grid gap-2">
                <Button variant="primary" onClick={submitHandler}>
                  Login
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Login