import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-bar">
        <nav>
            <div className='left-container'>
            <img src="Assets/chispa.jpg" alt="" style={{ width: '500px', height: '210px' }}/>
            </div>
            <div className='right-container'>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/servicio">Servicio</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/contact">Contáctanos</Link></li>
                </ul>
            </div>
      </nav>
    </div>
  );
};

export default NavBar;
