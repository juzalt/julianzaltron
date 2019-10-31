import React from 'react';
import './style.css'
import Octocat from './Octocat.png';
import LinkedInLogo from './LI-In-Bug.png';

function SocialNetworks(){
  return (
    <>
      <div className="logosContainer">
        <a target="_blank" rel="noopener" href="https://github.com/juzalt"><img src={Octocat} alt="Githubs octocat logo" className="octocat"/></a>
        <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/julian-zaltron-99944b17a/"><img src={LinkedInLogo} alt="LinkedIn logo" className="linkedin"/></a>
      </div>
    </>
  );
}

export default SocialNetworks;