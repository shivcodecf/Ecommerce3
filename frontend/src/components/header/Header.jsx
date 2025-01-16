import React, { useState } from 'react';
import logo2 from "../../images/final logo.jpg";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { setUser } from '../redux/authSice';
// import '../../css/Header.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const logoutHandler =()=>{
    dispatch(setUser(null));
    
  }

  return (
    <header className="bg-white text-black fixed top-0 left-0 w-full z-50 shadow-md h-auto">
      <div className=" mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="logo-box mt-[-2px]">
          <NavLink to="/">
            <img src={logo2} alt="logo" className="w-24" />
          </NavLink>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex md:items-center w-full md:w-auto`}
        >
            <ul className="flex flex-col  md:flex-row gap-4 mt-4 md:mt-0 mr-[50px] ">
            <li><NavLink to="/" className="nav_ text-black-500">HOME</NavLink></li>
            {user ? (
              <li><NavLink to="/Product" className="nav_">PRODUCTS</NavLink></li>
            ) : (
              <li><NavLink to="/login" className="nav_"></NavLink></li>
            )}
            <li><NavLink to="/Contact" className="nav_">CONTACT</NavLink></li>
            <li>
              {user !== null ? (
                <Button onClick={logoutHandler} className="text-blue-800 bg-blue-600 ">
                  LOGOUT
                </Button>
              ) : (
                <NavLink to="/signup" className="nav_ nav_login">
                  SIGNUP
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
