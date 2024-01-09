import React, { useState, useRef, useEffect } from 'react';
import BurguerButton from '../../BurguerButton';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../../assets/images/logo.jfif';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setClicked(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav ref={navRef} tabIndex="0" className={`nav-container ${clicked ? 'active' : ''}`}>
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h2>
              <span>Weather App</span>
            </h2>
          </div>
        </div>

        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={() => setClicked(!clicked)} />
        </div>

        <div className={`nav-links ${clicked ? 'active' : ''}`}>
          <Link onClick={() => setClicked(false)} to="/inicio">
            Inicio
          </Link>
          <Link onClick={() => setClicked(false)} to="/precipitaciones">
            Precipitaciones
          </Link>
          <Link onClick={() => setClicked(false)} to="/viento">
            Viento
          </Link>
          <Link onClick={() => setClicked(false)} to="/humedad">
            Humedad
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
