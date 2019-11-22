import React from 'react';
import './style.css';
import Logo from './logozaltron.svg'
import { Link } from 'react-router-dom' 

function Header(props){
  return(
    <>
      <div className="navContainer">
        <Link to="/"><img src={Logo} alt="Zaltrons logo" className="logo"/></Link>
        <Link to="/secure-messaging"><a className="headerElement">Public key</a></Link>
      </div>
    </>
  );
}

export default Header;