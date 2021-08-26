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
          <p>🖤</p>
        </div>
        <a class="headerElement" target="_blank" rel="noopener" href="mailto:zaltron.julian@gmail.com"><img src={GmailLogo} alt="Gmail logo" className="gmail"/></a>
      </div>
    </>
  );
}

export default Header;