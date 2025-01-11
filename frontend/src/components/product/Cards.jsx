import React from 'react'
import '../../css/Product.css'
import { useState } from 'react'
import Navbar from './Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';




const Cards = ({item,cart,setCart,props}) => {
const{title,price,img,desc}=item;
const[itemcount,setitemcount]=useState(0);


const AddItem = (item) =>{
        let flag=false;
        let count=0;
      

    cart.forEach(element => {
        if(item.id==element.id)
        {
          flag=true;
        }
    });
    if(!flag){
    setCart([...cart,item])
    count++;
    setitemcount(count);
    }
    else {
        toast.warn('Item is already add', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }
    
}



  return (
    <div className="product-container flex flex-wrap justify-evenly mt-10 text-center text-black px-6 sm:px-8 md:px-12 lg:px-16">
    <div className="product-cards flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-[200px] w-full h-[440px] transition-transform transform hover:scale-105 hover:shadow-lg">
      <img src={img} alt={title} className="w-full h-[280px] object-cover rounded-lg" />
      
      <p className="text-lg font-semibold mt-4">{title}</p>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>
      
      <div className="add-cart flex justify-between items-center mt-auto gap-[70px]">
        <p className="text-xl text-[#3a7ca5]">&#x20B9;{price}</p>
        <AddShoppingCartIcon 
          onClick={() => AddItem(item)} 
          className="cursor-pointer text-[#84dcc6] mr-4" 
          style={{ border: "none" }} 
        />
      </div>
    </div>
    <ToastContainer />
  </div>
  
    
  )
}

export default Cards;
