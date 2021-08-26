import React from 'react';
import './style.css';
import InstagramLogo from './glyph-logo_May2016.png';
import GmailLogo from './gmailLogo.png';

function Footer(props){
  return(
      <div className="footerContainer" style={props.style}>
        <div className="socialContainer">
          <a target="_blank" rel="noopener" href="https://www.instagram.com/julianzaltron/"><img src={InstagramLogo} alt="Instagram logo" className="instagram"/></a>
          <div className="lineFooter"/>
          <a target="_blank" rel="noopener" href="mailto:zaltron.julian@gmail.com"><img src={GmailLogo} alt="Gmail logo" className="gmail"/></a>
        </div>
        <div className="aboutMe">
          <p>Made with 🖤 by Julian Zaltron</p>
        </div>
        <div className="email">
          <a href="mailto:zaltron.julian@gmail.com" target="_blank" rel="noopener">zaltron.julian@gmail.com</a>
        </div>
      </div>
  );
}

export default Footer;