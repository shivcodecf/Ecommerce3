import React from 'react'
import list from "./data";
import Cards from './Cards';
import Shirts from "./Shirts";
import { useState } from 'react';

const Amazon = () => {
  
  return (
    <div className='product-container flex gap-[10px]'>
      {
      list.map((item) => (
        <>
        <Cards key={item.id} item={item} style={{display:"flex"}}/>
        <Shirts key={item.id} item={item} style={{display:"flex"}}/>
        </>
        
      ))}

       

      
    </div>
  )
}

export default Amazon
