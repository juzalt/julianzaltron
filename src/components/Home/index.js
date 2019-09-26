import React from 'react';
import './style.css'
import Header from '../Header';

function Home(props){
  return(
    <>
      <Header/>
      <div id="container">
        <p className="hero_h3">Julian Zaltron is a...</p>
        <p className="hero_p1">Software engineer,</p>
        <p className="hero_p2">compsci student,</p>
        <p className="hero_p3">juggler...</p>
        <p className="hero_p4">...or just someone who loves <br /> to try out new things.</p>
        {props.children}
      </div>
    </>
  );
}

export default Home;