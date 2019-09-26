import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Header(props){
  return(
    <div className="navContainer">
      <div id="zaltronLogo">Z</div>
      {//acá tengo que importar un svg
      /*<nav>
        <Link to="/">JZ</Link>
      </nav>*/}
    </div>
  );
}

export default Header;