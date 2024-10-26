// components/Header/Header.js
import React from 'react';
import '../../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src={require('../../images/capibara.jpg')} alt="Logo" />
      </div>
      <h1 className="title">Gestión de taller mecánico</h1>
    </header>
  );
}

export default Header;
