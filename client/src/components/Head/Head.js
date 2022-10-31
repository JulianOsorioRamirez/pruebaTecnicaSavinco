import React, { useState } from 'react';
import "./Head.css"
import Logo from '../../assets/images/savincoLogo.png';


function Head () {
    return (
        <div>
          <nav>
          <img src={Logo} className="logo"/>
          
          <div className='btnDiv'>
          <input type="button" value="Sing in"  className="Btn-sign-up"></input>
          <input type="button" value="Login"  className="Btn-sign-up"></input>
          </div>
          
          </nav> 
        </div>
    )
}

export default Head;
