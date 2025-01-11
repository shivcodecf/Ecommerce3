import React from 'react'
import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/Product.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';





const Navbar = () => {   

  

  
  return (
    <div>
       <div className='shirt-nav'>
    <ul>
    
    <li><NavLink to = "/products" className="nav_">ALL</NavLink></li>
      <li><NavLink to = "/shirts" className="nav_">SHIRTS</NavLink></li>
      <li><NavLink to = "/jackets" className="nav_">JACKETS</NavLink></li>
     
     
      
   </ul>

   

   </div>  
   
   
   
   
   
    </div> 
  )
}

export default Navbar
