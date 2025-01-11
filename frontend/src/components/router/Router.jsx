
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from '../home/Home'
import Product from '../product/Product'
import Contact from '../contact/Contact'
import Shirts from '../product/Shirts.jsx'
import Login from '../login/Login.jsx'
import Header from '../header/Header.jsx'
import Navbar from '../product/Navbar.jsx'
import Jackets from '../product/Jackets.jsx'
import Cards from '../product/Cards.jsx'
import Footer from '../footer/Footer'
import Signup from '../signup/Signup.jsx'

const Routers = () => {


 
  return (
   <Router>
    <div></div>
   <Header/>
   
   
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/products' element = {<Product/>} />
      <Route path='/shirts' element = {<Shirts/>} />
      <Route path='/jackets' element = {<Jackets/>} />
      <Route path='/product' element = {< Product/>}/> 
      <Route path='/contact' element = {<Contact />}/>
      <Route path='/login' element = {<Login />}/>
      <Route path='/signup' element = {<Signup />}/>
      <Route path='/logout' element = {<Signup />}/>
    
      
    </Routes>
    {/* <Footer clasName="mt-[200px]"/> */}
    
   </Router>
 
  )
}

export default Routers