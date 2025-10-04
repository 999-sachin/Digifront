import React from 'react'
import NavTop from './components/NavTop'
import Structure from './Structure'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import AdminDash from './adminPages/AdminDash'
import AddProduct from './adminPages/AddProduct'
import ShoppingCart from './Home/ShoppingCart'
import Registration from './pages/Registration'
import Login from './pages/Login'
import AllProduct from './Home/AllProduct'
import Checkout from './Home/Checkout'
import ManageProducts from './adminPages/ManageProducts'
import Computer from './categories/Computer'
import Drone from './categories/Drone'
import Audio from './categories/Audio'
import Mobile from './categories/Mobile'
import Sale from './categories/Sale'
import TV from './categories/TV'
import Wearable from './categories/Wearable'
import Tablet from './categories/Tablet'



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Structure/>}>
      <Route index element = {<Home/>}/>
      <Route path='cart' element = {<ShoppingCart/>}/>
      <Route path='register' element = {<Registration/>}/>
      <Route path='login' element = {<Login/>}/>
      <Route path='product' element = {<AllProduct/>}/>
      <Route path='checkout' element = {<Checkout/>}/>
      <Route path='computer' element = {<Computer/>}/>
      <Route path='drone' element = {<Drone/>}/>
      <Route path='audio' element = {<Audio/>}/>
      <Route path='mobile' element = {<Mobile/>}/>
      <Route path='sale' element = {<Sale/>}/>
      <Route path='tablet' element = {<Tablet/>}/>
      <Route path='tv' element = {<TV/>}/>
      <Route path='wearable' element = {<Wearable/>}/>

      
      </Route>
    </Routes>
    <Routes>
      <Route path='admindash' element = {<AdminDash/>}>   
      <Route path='add-product' element = {<AddProduct/>}/>
      <Route path='manage-product' element = {<ManageProducts/>}/>
       </Route>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App