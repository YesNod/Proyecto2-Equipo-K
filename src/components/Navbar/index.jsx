import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="EduOnline Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><a href="#courses">Cursos</a></li>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contacto</a></li>
        <li className="auth-buttons">
          <button 
            className="login-btn"
            onClick={() => navigate('/login')}
          >
            Iniciar Sesión
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
