import './Navbar.css';
import "./MediaQueries.css";
import React, {useState} from "react";
import data from "./TemplateData.json";
const Navbar=({setShow, size })=>{
     
    return(
        <div className="mynav">
          
          <span onClick={()=>setShow(true)}></span>
          <div className="cart" onClick={()=>setShow(false)}>
           
          <span >
          <img src="shopcart.svg" width={70} className="shifter"  />
            </span>
            
            <span>{size}</span>
          </div>

          </div>
         
        
    )
}
export default Navbar;