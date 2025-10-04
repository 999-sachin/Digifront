import React from 'react'
import NavTop from './components/NavTop'
import Header from './components/Header'
import CategoriesNav from './components/CategoriesNav'
import {Outlet} from "react-router-dom"
import Footer from './components/Footer'
const Structure = () => {
  return (
    <>
    <NavTop/>
    <Header/>
    <CategoriesNav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Structure