import React from 'react'
import Navbar from './Navbar'
import '../../css/Product.css'
import list from "./data";

const Jackets = () => {

  const itemsWithIdOne = list.filter(item => item.name === 'jacket');
  
  
        
  const renderedItems = itemsWithIdOne.map(item => (
    
    <div key={item.id} className='card-shirt'>
      <img src={item.img} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <p>${item.price}</p>
      {/* Add more details or styling as needed */}
    </div>
  ));
 
  return (
   

    <div>
        <div className="jackets-nav">
        </div>
         <Navbar/>
         
        {/* <p className='jacket-title'>Jackets</p> */}
        <div className="card-container-shirt">
    {renderedItems}
    </div>
       
      
    </div>
  )
}

export default Jackets
