import React from 'react';
import './style.css';
import Logo from './logozaltron.svg'
import { Link } from 'react-router-dom' 

function Header(props){
  return(
    <>
      <div className="navContainer">
        <Link to="/"><img src={Logo} alt="Zaltrons logo" className="logo"/></Link>
        <div className="aboutMe headerElement">
          <p>Made with 🖤 by Julian Zaltron</p>
        </div>
        <div className="email headerElement">
          <a href="mailto:zaltron.julian@gmail.com" target="_blank" rel="noopener">zaltron.julian@gmail.com</a>
        </div>
      </div>
    </>
  );
}

export default Header;