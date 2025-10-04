import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import BASE_URL from "../config"
import axios from "axios"
const AddProduct = () => {
  const[image , setImage] = useState("")
   const[input , setInput] = useState({})
  const imageHandler = (e)=>{
    setImage(e.target.files)
  }
  console.log(image)
const changeHandler = (e)=>{
    let{name , value} = e.target;
    setInput({
      ...input,
      [name] : value
    })
}
const submitHandler = async(e)=>{
  e.preventDefault()
  let api = `${BASE_URL}/admin/addProduct`
  let formData = new FormData()
  for (let key in input) {
    formData.append(key, input[key]);
  }

  for (let i = 0; i < image.length; i++) {
    formData.append('image', image[i]);
  }  
  try {
    let res = await axios.post(api , formData)
    console.log(res.data)
    alert("Product Added  Successfully")
  } catch (error) {
    console.log(error)
  }
  
}
  return (
   <>
    <Container className="mt-4" >
      <h2 align = "center">Add New Product</h2>
      <Form style={{width : "50%", margin : "auto"}}>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter product name" name='name'  onChange={changeHandler} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Product description"  name='description' onChange={changeHandler} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Brand</Form.Label>
          <Form.Select name='brand'  onChange={changeHandler}>
            <option >Select Brand</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Mivi">Mivi</option>
            <option value="HP">HP</option>
            <option value="Boat">Boat</option>
            <option value="Noise">Noise</option>
            <option value="Redmi">Redmi</option>
            <option value="Poco">Poco</option>
            <option value="Realme">Realme</option>
            <option value="Motorola">Motorola</option>
            <option value="Asus">Asus</option>
            <option value="Acer">Acer</option>
            <option value="Honor">Honor</option>
            <option value="Firebolt">Firebolt</option>
            <option value="Fastrack">Fastrack</option>
            <option value="One Plus">One Plus</option>

            <option value="Sony">Sony</option>
            <option value="Croma">Croma</option>
            <option value="LG">LG</option>
            <option value="Google Pixel">Google Pixel</option>

            <option value="Dell">Dell</option>
            <option value="DJI">DJI</option>
            <option value="Lenevo">Lenovo</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select name='category'   onChange={changeHandler}>
            <option>Select Category</option>
            <option value="Mobile">Mobile</option>
            <option value="Tablets">Tablets</option>
            <option value="Drones">Drones</option>
            <option value="Speakers">Speakers</option>
            <option value="Computers">Computers</option>
            <option value="Mobile">Mobile</option>
            <option value="TV">T.V.</option>
            <option value="Wearable Tech">Wearable Tech</option>

          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Images</Form.Label>
          <Form.Control type="file" name='image' multiple  onChange={imageHandler} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter price" name='price' onChange={changeHandler} />
        </Form.Group>

        <Button variant="primary" onClick={submitHandler}>Submit</Button>
      </Form>
    </Container>
    <br /><br />
   </>
  );
};

export default AddProduct;
