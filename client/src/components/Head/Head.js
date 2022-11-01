import React, { useState } from 'react';
import "./Head.css"
import Logo from '../../assets/images/savincoLogo.png';
import { useNavigate } from "react-router-dom";



function Head () {

  const [navState, setNavState] = useState("");
  
  const navigate = useNavigate()
   
  function sendAdmin () {
    setNavState("Admin")
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
          {navState === "" ? (""
          
        ) : (
          <input type="button" value="Home" onClick={sendHome} className="Btn2"></input>
          
        )}
          
          <input type="button" value="Admin"  onClick={sendAdmin}   className="Btn2"></input>

          {/* <input type="button" value="Login"  className="Btn"></input> */}
          </div>
          
          </nav> 
        </div>
    )
}

export default Head;
