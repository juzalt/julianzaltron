import React from 'react';
import './style.css'
import Header from '../Header';
import SocialNetworks from '../SocialNetworks';


function Home(){
  return(
      <div id="fullPageContainer">
        <Header/>
        <div role="main">
          <div id="heroContainer">
            <div id="heroCenterContainer">
              <p className="hero_h3">Hi, my name is</p>
              <p className="hero_p1">Julian Zaltron.</p>
              <p className="hero_p4">
              I'm a software developer based in Buenos Aires, Argentina.
              </p>
              <p className="hero_p5">You can checkout my projects or learn more about me by following these links.</p>
              <SocialNetworks/>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Home;