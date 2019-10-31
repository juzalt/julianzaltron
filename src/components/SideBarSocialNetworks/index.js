import React from 'react';
import './style.css';
import InstagramLogo from './glyph-logo_May2016.png';
import GmailLogo from './gmailLogo.png';

function SideBarSocialNetworks(){
  return(
    <div id="sidebarContainer">
      <a target="_blank" rel="noopener" href="https://www.instagram.com/zxltrn/"><img src={InstagramLogo} alt="Instagram logo" className="instagram"/></a>
      <a target="_blank" rel="noopener" href="mailto:zaltron.julian@gmail.com"><img src={GmailLogo} alt="Gmail logo" className="gmail"/></a>
    <div className="socialSidebarLine"/>
    </div>
  );
}

export default SideBarSocialNetworks;