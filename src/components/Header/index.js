import React from 'react';
import './style.css';
import Logo from './logozaltron.svg';
import { Link } from 'react-router-dom'; 
import GmailLogo from './gmailLogo.png';

function Header(props){
  return(
    <>
      <div className="navContainer">
        <Link to="/"><img src={Logo} alt="Zaltrons logo" className="logo"/></Link>
        <div className="aboutMe headerElement">
          <span role="img" aria-label="Black heart emoji. Click on it for a surprise." ><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">🖤</a></span>
        </div>
        <a class="headerElement" target="_blank" rel="noopener noreferrer" href="mailto:zaltron.julian@gmail.com"><img src={GmailLogo} alt="Gmail logo" className="gmail"/></a>
      </div>
    </>
  );
}

export default Header;