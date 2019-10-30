import React from 'react';
import './style.css';

function SectionBreaker(props){
  return(
    <>
      <div className="sectionBreakerContainer">
        <p className="sectionTitle">{props.sectionTitle}</p>
      </div>
    </>
  );
}

export default SectionBreaker;