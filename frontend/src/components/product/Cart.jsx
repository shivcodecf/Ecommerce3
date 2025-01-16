import React from 'react'
import Cards from './Cards';

import { useState,useEffect } from 'react'
import '../../css/Product.css'
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear'; 
import { FaOpencart } from "react-icons/fa";

const Cart = ({cart,setCart,AddItemPrice}) => {
    const[price,setPrice]=useState("");


    const handlePrice = () => {
        let ans=0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
      };
    
      useEffect(() => {
        handlePrice();
      });
      const removeitems=(id)=>{
        
    
           
            const arr = cart.filter((item)=>item.id!==id);
            setCart(arr);
      
      }
    



    
    
  return (
    <div className='cart mt-[100px]'>
        <div className='cart-main-title'></div>
         {
            cart?.map((item)=>(
                <div className="cart_box" >
                    <div className="cart-box-content">
                    <div className="cart_img">
                        <img src={item.img} className='cart-img' />
                       
                    </div>
                    {/* <div className='cart-content'> */}
                    <div className="item-car-title">
                    <p>{item.title}</p>
                    </div>

                    <div className="cart-button">
                        
                        
                        <button onClick={()=>AddItemPrice(item,-1)} > - </button>
                        <button className='quantity-cart'>{item.amount}</button>
                        <button onClick={()=>AddItemPrice(item,1)}> + </button>
                    
                    </div>
                    <div className="cart-price">
                       <p > Rs.{item.price}</p>
                       <button onClick={()=>removeitems(item.id)}><ClearIcon style={{textAlign:"center"}} className='cross-cart-icon'/> </button>
                    </div>
                    
                   
                    </div>
                   
                    

                 
                   
                </div>
                
               
               
                 
            ))} 

            { 

            cart.length &&
             <div className="total-price">
                 <p>Total:</p>
 
              <p className='total-price-amt'>Rs.{price}</p>
                </div> 
           }

               
           
    </div>
  )
}

export default Cart
