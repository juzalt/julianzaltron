import React from 'react';
import { useEffect } from 'react';
import './style.css'
import Header from '../Header';


function Home(){
  let _canvas;

  useEffect(() => {
  }, []);
  
  draw(() =>  {
    _canvas = document.getElementById("clouds");
    var ctx = _canvas.getContext("2d");
    ctx.rotate(Math.random() * 2 * Math.PI);
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect (10, 10, 55, 50);
  
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect (30, 30, 55, 50);

  })

  return(
      <div id="fullPageContainer">
        <Header/>
        <canvas width="9999" height="9999" id="clouds" style={{ "position": "absolute" }}></canvas>
        <div role="main" style={{ 'backgroundImage': _canvas ? "url(" + _canvas.toDataURL() + ")" : "" }}>
          <div id="heroContainer">
            <div id="heroCenterContainer">
              <p className="hero_h3">Hi, my name is</p>
              <p className="hero_p1">Julian Zaltron.</p>
              <p className="hero_p4">
              I'm a software developer based in Buenos Aires, Argentina.
              </p>
              <p className="hero_p5">You can checkout my projects or learn more about me by following these links.</p>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Home;