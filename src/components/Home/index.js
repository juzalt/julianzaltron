import React from 'react';
import './style.css'
import Header from '../Header';
import Octocat from './Octocat.png';

function Home(props){
  return(
    <>
      <Header/>
      <div id="container">
        <p className="hero_h3">Welcome!</p>
        <p className="hero_p1">Under construction.</p>
        <p className="hero_p4">Still here? <br /> while waiting for the page to be finished, you can checkout my stuff right here:</p>
        <a href="github.com/juzalt"><img src={Octocat} alt="Githubs octocat logo" className="octocat"/></a>
     </div>
    </>
  );
}

export default Home;