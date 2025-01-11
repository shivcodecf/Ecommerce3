import React from 'react'
import '../../css/Home.css'
import home from "../../images/home-logo.jpg"

import shirt1 from "../../images/shirt1.png"
import shirt2 from "../../images/shirt2.png"
import jacket1 from "../../images/jacket1.png"
import {BiDollarCircle,BiRupee,BiCloudDownload,BiLayer} from "react-icons/bi";
import { TbWorldUpload } from "react-icons/tb";
import { AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin,  AiFillGithub} from "react-icons/ai";
import { NavLink } from 'react-router-dom'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InstagramIcon from '@mui/icons-material/Instagram';
import  LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useSelector } from 'react-redux'
import Footer from '../footer/Footer'
import { useState } from 'react'


const Home = () => { 

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation (you can add more rules as needed)
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email.');
      return;
    }

    // Handle the subscription (store in backend or send to a service like Mailchimp)
    // Here, we'll just simulate the success message
    setMessage('Thank you for subscribing!');
    setEmail(''); // Clear the input field
  };




















  const {user} = useSelector(store=>store.auth);
  return (
    <>
    <div className='home-container'>
    <div className='Home-text-container'>
      <h1 className='logo-name'>SHOP EASY</h1>
      <p className='home-text'>Welcome to <span className='cartify-text'>Shop Easy</span></p>
      <p className='home-discription '>An E-Commerce Website where you can</p><p className='home-discription'>
buy all yours Favourite Shirts and</p><p className='home-discription'>
Jackets at the lowest Price.</p>
{/* <a href="http://localhost:3001/Product">
<button className='sign-up '>SHOP NOW</button>
</a> */} 
<div className='mt-[20px]'>
 
{
  !user ? 
  (<NavLink to = "/login" className="nav_ my-[100px]"><button className='sign-up '>SHOP NOW</button></NavLink>)
  :
  (<NavLink to = "/Product" className="nav_ my-[100px]"><button className='sign-up '>SHOP NOW</button></NavLink>)
}

</div>



    </div>
    <div className='home-logo'>
     <img src={home}/>
    </div>
    </div>
    <div className="all_service" >
        <div className="service">
            <div className="service_icon"> 
     <LocalShippingIcon/>
            </div>
            <div className="service_description">
<span className="feature">Free Delivery</span> <br/>
<span className="des">Free Shipping on all Orders</span>
            </div>
        </div>


        <div className="service">
            <div className="service_icon"> 
            <LocalShippingIcon/>
            </div>
            <div className="service_description">
<span className="feature">Online Support 24/7</span> <br/>
<span className="des">Support Online 24 hours a day</span>
            </div>
        </div>

        <div className="service">
            <div className="service_icon"> 
            <LocalShippingIcon/>
            </div>
            <div className="service_description">
<span className="feature">Money Return</span> <br/>
<span className="des">Back Guarantee under 7 days</span>
            </div>
        </div>

        <div className="service">
            <div className="service_icon"> 
            <LocalShippingIcon/>
            </div>
            <div className="service_description">
<span className="feature">Member Discount</span> <br/>
<span className="des">On every order over 499</span>
            </div>
        </div>        
    </div>
    {/* <div className="deal-container"> */}
    <div className="bg-gray-100 py-8 px-4">
  <div className="deal-container max-w-6xl mx-auto">
    {/* Section Title */}
    <p className="trending-name text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
      Featured Products
    </p>

    {/* Deals Container */}
    <div className="Deals grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Product Card 1 */}
      <div className="deal-cards w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={shirt1}
          alt="Roadster Shirt"
          className="w-full h-48 sm:h-64 object-cover"
        />
        <div className="p-4 space-y-2">
          <p className="shirt text-lg font-bold text-gray-800 truncate">
            Roadster
          </p>
          <p className="shirt-desc text-gray-600 truncate">
            Men cotton casual shirt
          </p>
          <div className="rupee-container flex flex-col sm:flex-row items-start sm:items-center mt-2 space-y-1 sm:space-y-0 sm:space-x-2">
            <p className="shirt-rupee text-xl font-bold text-blue-500">
              Rs.599
            </p>
            <p className="shirt-profit text-sm line-through text-gray-500">
              Rs.999
            </p>
            <p className="shirt-off text-sm text-green-500">(40% OFF)</p>
          </div>
        </div>
      </div>

      {/* Product Card 2 */}
      <div className="deal-cards w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={jacket1}
          alt="CL SPORT Jacket"
          className="w-full h-48 sm:h-64 object-cover"
        />
        <div className="p-4 space-y-2">
          <p className="shirt text-lg font-bold text-gray-800 truncate">
            CL SPORT
          </p>
          <p className="shirt-desc text-gray-600 truncate">
            Men cotton casual jacket
          </p>
          <div className="rupee-container flex flex-col sm:flex-row items-start sm:items-center mt-2 space-y-1 sm:space-y-0 sm:space-x-2">
            <p className="shirt-rupee text-xl font-bold text-blue-500">
              Rs.999
            </p>
            <p className="shirt-profit text-sm line-through text-gray-500">
              Rs.1999
            </p>
            <p className="shirt-off text-sm text-green-500">(50% OFF)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


 
<div className="mb-[5px]">  
    <div className='mt-[10px]'>
    <h1 className="text-3xl font-semibold text-black-200 text-center my-[50px]">
  Trusted 
</h1><div className="trust_main">
    
    <div className="trust_icon">
      <TbWorldUpload style={{color:"#6085ef"}}/>
    </div>
    <div className="trust_icon">
      <BiDollarCircle/>
    </div>
    <div className="trust_icon">
      <BiRupee style={{color:"#6085ef"}}/>
    </div>
    <div className="trust_icon">
      <BiCloudDownload/>
    </div>
    <div className="trust_icon">
      <BiLayer style={{color:"#6085ef"}}/>
    </div>
    </div>
  </div> 
   </div> 


   {/* <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Subscribe now & get 20% off
        </h2>
        <p className="text-gray-500 text-sm mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <form className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-64 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white font-semibold rounded-r-lg hover:bg-gray-800"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
    */}
   



   <Footer/>

    
    </>

    
  )
}

export default Home
