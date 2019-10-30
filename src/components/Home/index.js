import React from 'react';
import './style.css'
import Header from '../Header';
import SocialNetworks from '../SocialNetworks';
import Footer from '../Footer';
import SideBarSocialNetworks from '../SideBarSocialNetworks';
import SideBarEmail from '../SideBarEmail';

function Home(){
  return(
    <>
      <div id="fullPageContainer">
        <Header/>
        <div id="absContainer">
          <SideBarSocialNetworks/>
          <div id="heroContainer">
            <p className="hero_h3">Hi, my name is</p>
            <p className="hero_p1">Julian Zaltron.</p>
            <p className="hero_p4">
            I'm a software engineer based in Buenos Aires, Argentina who enjoys using React, CSS and JS to build sites. 
            </p>
            <p className="hero_p5">You can checkout my stuff by following these links, keep scrolling to learn more about me, or feel free to get in touch!</p>
            <SocialNetworks/>
          </div>
          <SideBarEmail/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer/>
      </div>
    </>
  );
}
export default Home;