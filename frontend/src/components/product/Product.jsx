import React from 'react'
import { useState,useEffect } from 'react'
import '../../css/Product.css'
import shirt3 from "../../images/shirt3.png"
import Shirts from './Shirts'
import Navbar from './Navbar'

import Jackets from './Jackets'
import shirt4 from "../../images/shirt4.png"
import shirt5 from "../../images/shirt5.png"
import shirt6 from "../../images/shirt6.png"
import banner from "../../images/banner.jpg"
import Footer from '../footer/Footer'

import { NavLink } from 'react-router-dom'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import { FaOpencart } from "react-icons/fa";




import Cards  from './Cards'
import list from './data'
import Cart from './Cart'




const Product = () => {    
  let flag=1;
  const[show,setShow]=useState(flag);

  

  const handler=()=>{
       
    setShow(flag=>flag+1);
 }

 
  


       



    
    const[cart,setCart]=useState([]);
    
    const[itemcount,setitemcount]=useState(0); 
    const [isFixed, setIsFixed] = useState(false);
    const [scrollY, setScrollY] = useState(0);


    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
        if (window.scrollY > 100) { // Scroll threshold to make the cart fixed
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup event listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    

   

    const AddItemPrice = (item,d) => {
        const ind= cart.indexOf(item);
        const arr=cart;
        arr[ind].amount+=d;
        if (arr[ind].amount === 0) arr[ind].amount = 1;
        setCart([...arr]);


    };
  
    const Random =()=>{
        
    
      let cnt=0;

        cart.map((item) => cnt++);
        setitemcount(cnt);
         
        
    
    
    }
    useEffect(() => {
        Random();
      });
   


    


    
  return (
   
 
    <div >
         
       
         <div className='cart-top '>
      <FaOpencart
        className={`main-cart ${isFixed ? 'fixed-cart' : ''}`  }
        onClick={handler}
      />
      <div className={`main-cart-count ${isFixed ? 'fixed-count' : ''} pointer` }
       onClick={handler}
      >
        {itemcount} 
       
      </div> 
      </div>
       
       {/* <div className="product-nav">
       <Navbar  />
       </div> */}
       <div className="best-deals-p">
      
       
       
         
           </div>
        
           <div className='product-container'>
       {
        
        
        
       
        show%2 ?
       
       
      list.map((item) => (
       
       <>
        <Cards key={item.id}  cart={cart} setCart={setCart} item={item} style={{display:"flex"}}/>
        {/* < Shirts key={item.id}  cart={cart} setCart={setCart} item={item}/> */}
        </>
      )):
     
    
      <div className="cart_box" >
       
      <Cart cart={cart} setCart={setCart} AddItemPrice={AddItemPrice} />
      </div>
      
      } 
        </div>
     
      
       
      
     


        <Footer className="mx-[500px]"/>

      </div>


    
        
           
      
      
  )
}

export default Product
