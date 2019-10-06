import React from 'react';
import './style.css';
import InstagramLogo from './glyph-logo_May2016.png';
import GmailLogo from './gmailLogo.png';

function SideBar(){
  return(
    <div id="sidebarContainer">
      <a target="_blank" href="https://www.instagram.com/zxltrn/"><img src={InstagramLogo} alt="Instagram logo" className="instagram"/></a>
      <a target="_blank" href="mailto:zaltron.julian@gmail.com"><img src={GmailLogo} alt="Gmail logo" className="gmail"/></a>
    <div className="line"/>
    </div>
  );
}

export default SideBar;