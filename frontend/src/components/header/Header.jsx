import React from 'react'
import '../../css/Header.css'
import logo from "../../images/logo.png"
import logo1 from "../../images/shopeay logo.webp"
import logo2 from "../../images/final logo.jpg"
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'
import { toast } from 'react-toastify'



import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';



import { NavLink } from 'react-router-dom'
import { setUser } from '../redux/authSice'

const Navbar = () => {


  const {user} = useSelector(store=>store.auth);
  const dispatch = useDispatch();

  const logoutHandler =()=>{
     dispatch(setUser(null));
     toast.success("logout successfully");
  }

  console.log(user);

  return (
    <>


<header>
  <div className="container_nav">
    <div className="logo-box">
    <NavLink to = "/">
        <img src={logo2} alt='logo' />
        {/* <div>ShopHub</div> */}
    </NavLink>
    </div>
    <nav>
      
     
    <ul >
    <li><NavLink to = "/" className="nav_ text-black-500">Home</NavLink></li>

    {
      user ?(
      <li><NavLink to = "/Product" className="nav_">Products</NavLink></li>
      )
      : 
      ( <li><NavLink to = "/login" className="nav_">Products</NavLink></li>)

    }
     
     
      <li><NavLink to = "/Contact" className="nav_">Contact</NavLink></li>
      <li>
  {user !== null ? (
    <Button 
      onClick={logoutHandler} 
      className="text-blue-800 bg-blue-600"
    >
      Logout
    </Button>
  ) : (
    <NavLink to="/signup" className="nav_ nav_login">
      Signup
    </NavLink>
  )}
</li>

     
      
   </ul>
   
   
  
  </nav>
  
 
  {/* <a href="#" className='nav-toggle'>
  <MenuIcon  style={{marginLeft:"200px"}} />
  </a> */}
  </div>
  
  
  
</header>
</>
  )
}

export default Navbar;







 
          