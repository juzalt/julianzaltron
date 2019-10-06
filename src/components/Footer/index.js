import React from 'react';
import './style.css';
import InstagramLogo from './glyph-logo_May2016.png';
import GmailLogo from './gmailLogo.png';

function Footer(){
  return(
    <>
      <div className="footerContainer">
        <div className="socialContainer">
          <a target="_blank" href="https://www.instagram.com/zxltrn/"><img src={InstagramLogo} alt="Instagram logo" className="instagram"/></a>
          <a target="_blank" href="mailto:zaltron.julian@gmail.com"><img src={GmailLogo} alt="Gmail logo" className="gmail"/></a>
        </div>
        <div className="aboutMe">
          <p>Made with ❤ by Julian Zaltron</p>
        </div>
      </div>
    </>
  );
}

export default Footer;