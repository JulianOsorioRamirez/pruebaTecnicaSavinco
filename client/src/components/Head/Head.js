import React, { useState } from 'react';
import "./Head.css"
import Logo from '../../assets/images/savincoLogo.png';
import { useNavigate } from "react-router-dom";



function Head () {
  const navigate = useNavigate()
   
  function sendAdmin () {
       navigate("/Admin")
    
  }
  function sendHome () {
    navigate("/")
 
}
    return (
        <div>
          <nav>
          <img src={Logo} className="logo"/>
          
          <div className='btnDiv'>
          <input type="button" value="Home" onClick={sendHome} className="Btn"></input>
          <input type="button" value="Administration"  onClick={sendAdmin}   className="Btn"></input>

          {/* <input type="button" value="Login"  className="Btn"></input> */}
          </div>
          
          </nav> 
        </div>
    )
}

export default Head;
