import React, { useState } from 'react'
import '../../css/Product.css'
import Navbar from './Navbar'
import list from "./data";
import { ToastContainer, toast } from 'react-toastify';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'; 




const Shirts = ({item,cart,setCart,props}) => {
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
  
  const itemsWithIdOne = list.filter(item => item.name === 'shirt');
  
  
        
  const renderedItems = itemsWithIdOne.map(item => (
    
    <div key={item.id} className='card-shirt'>
      <img src={item.img} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <p>&#x20B9;{item.price}</p>
      {/* <AddShoppingCartIcon onClick ={()=>AddItem(item)} style={{cursor:"pointer",border:"none", color:"#84dcc6",marginRight:"15px"}}/>  */}
      {/* Add more details or styling as needed */}
    </div>
  ));
 

 
 


 
  return (
    <>
    <div className="shirt-nav">
    <Navbar />
    </div>
    <div className="card-container-shirt">
    {renderedItems}
    </div>
    </>
    
  )
}

export default Shirts
