import React from 'react';
import './style.css';
import Logo from './logozaltron.svg'

function Header(props){
  return(
    <>
      <div className="navContainer">
        <img src={Logo} alt="Zaltrons logo" className="logo"/>
      </div>
    </>
  );
}

export default Header;