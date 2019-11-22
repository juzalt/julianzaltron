import React from 'react';
import './style.css'
import Header from '../Header';
import SocialNetworks from '../SocialNetworks';
import Footer from '../Footer';
import SideBarSocialNetworks from '../SideBarSocialNetworks';
import SideBarEmail from '../SideBarEmail';
import SectionBreaker from '../SectionBreaker';


function SecureMessaging(){
  return(
    <>
      <div id="fullPageContainer">
        <Header/>
        <div role="main">
          <div id="heroContainer">
            <SideBarSocialNetworks/>
            <div id="heroCenterContainer">
              <p className="hero_h3">Let's talk</p>
              <p id="pgp">
              <a href="https://docs.google.com/document/d/1Swa8-9XNRKzRWJUYIaeRMubBDrWqvcaxIz1nWGNNOYs/edit" target="_blank">Press here to get my public key</a>
              </p>
            </div>
            <SideBarEmail/>
          </div>
        </div>
        <Footer style="position:absolute;"/>
      </div>
    </>
  );
}
export default SecureMessaging;