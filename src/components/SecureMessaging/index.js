import React from 'react';
import './style.css'
import Header from '../Header';
import Footer from '../Footer';
import SideBarSocialNetworks from '../SideBarSocialNetworks';
import SideBarEmail from '../SideBarEmail';

const absolute = {
  position: 'absolute'
}

function SecureMessaging(){
  return(
    <>
      <div id="fullPageContainer">
        <Header/>
        <div role="main">
          <div id="heroContainer">
            <div id="heroCenterContainer">
              <p className="hero_h3">Let's talk</p>
              <p id="pgp">
                <a href="https://docs.google.com/document/d/1Swa8-9XNRKzRWJUYIaeRMubBDrWqvcaxIz1nWGNNOYs/edit" target="_blank">Press here to get my public key</a>
                <p class="keybase">
                Send me an encrypted message with it at my email.
                </p>
                <p class="keybase">
                Or you can hit me up @ Keybase under the username julianzaltron
                </p>
              </p>
            </div>
          </div>
        </div>
        <Footer style={absolute}/>
      </div>
    </>
  );
}
export default SecureMessaging;