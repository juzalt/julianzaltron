import React from 'react';
import './style.css'
import Header from '../Header';
import SocialNetworks from '../SocialNetworks';
import Footer from '../Footer';
import SideBarSocialNetworks from '../SideBarSocialNetworks';
import SideBarEmail from '../SideBarEmail';
import SectionBreaker from '../SectionBreaker';


function Home(){
  return(
    <>
      <div id="fullPageContainer">
        <Header/>
        <div role="main">
          <div id="heroContainer">
            <SideBarSocialNetworks/>
            <div id="heroCenterContainer">
              <p className="hero_h3">Hi, my name is</p>
              <p className="hero_p1">Julian Zaltron.</p>
              <p className="hero_p4">
              I'm a software developer based in Buenos Aires, Argentina.
              </p>
              <p className="hero_p5">You can checkout my projects or learn more about me by following these links.</p>
              <SocialNetworks/>
            </div>
            <SideBarEmail/>
          </div>
        </div>
        <SectionBreaker sectionTitle="About me"/>
          <div id="aboutMeContainer">
            <div id="aboutMePContainer">
              <p className="aboutMe_p4">
                I'm currently studying Computer Science @ the University of Buenos Aires.
                I'm working with Angular and C# 
                <a 
                  className="workplace" 
                  target="_blank" 
                  rel="noopener" 
                  href="http://www.d3sistemas.com.ar/"> @ D3 Sistemas
                </a>
              </p>
            </div>
          </div>
        <Footer/>
      </div>
    </>
  );
}
export default Home;