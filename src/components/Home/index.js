import React from 'react';
import './style.css'
import Header from '../Header';
import SocialNetworks from '../SocialNetworks';
import Footer from '../Footer';
import SideBarSocialNetworks from '../SideBarSocialNetworks';
import SideBarEmail from '../SideBarEmail';
import SectionBreaker from '../SectionBreaker';
import MyAvatar from './WhatsApp Image 2019-10-23 at 11.41.30.png';


function Home(){
  return(
    <>
      <div id="fullPageContainer">
        <Header/>
        <div id="heroContainer">
          <SideBarSocialNetworks/>
          <div id="heroCenterContainer">
            <p className="hero_h3">Hi, my name is</p>
            <p className="hero_p1">Julian Zaltron.</p>
            <p className="hero_p4">
            I'm a software engineer based in Buenos Aires, Argentina who enjoys using React, CSS and JS to build sites. 
            </p>
            <p className="hero_p5">You can checkout my stuff by following these links, or keep scrolling to learn more about me. Feel free to get in touch!</p>
            <SocialNetworks/>
          </div>
          <SideBarEmail/>
        </div>
        <SectionBreaker sectionTitle="About me"/>
          <div id="aboutMeContainer">
            <p className="aboutMe_p4">
              Welcome to my site! My name is Julian Zaltron and I'm a software engineer. 
              I'm currently studying Computer Science in the University of Buenos Aires.
              I love solving problems and I'm passionate about technology.
              <p className="aboutMe_p4">
              This is evidenced by my background, which started when I was a teen, learning to install and manage different operating systems (most of them Unix-based) with the help of my brother at first.
              This led me to start working in Information Technology when I was 18yo, and later switching to a QA Automation role when I wanted to be closer to software development.
              It was there that it hit me that my dream job would consist of working in a team developing software as a coder.
              </p>
              <p className="aboutMe_p4">
              In my spare time I love to exercise and I'm an avid reader & writer.
              I also like to woodwork, juggle and play guitar and videogames from time to time.
              </p>
            </p>
            <img src={MyAvatar} alt="Julian Zaltrons avatar" className="myAvatar"/>
          </div>
        <Footer/>
      </div>
    </>
  );
}
export default Home;