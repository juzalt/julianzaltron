import React from 'react';
import './style.css'
import Header from '../Header';
import SocialNetworks from '../SocialNetworks';
import Footer from '../Footer';

function Home(){
  return(
    <>
      <Header/>
      <div id="container">
        <p className="hero_h3">Welcome! This site is...</p>
        <p className="hero_p1">Under construction.</p>
        <p className="hero_p4">Still here? <br /> while waiting for the page to be finished, you can checkout my stuff right here:</p>
        <SocialNetworks/>
        <p className="hero_p5">Or feel free to reach out :)</p>
     </div>
      <Footer/>
    </>
  );
}
export default Home;