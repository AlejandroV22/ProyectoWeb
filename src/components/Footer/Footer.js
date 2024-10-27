// components/Footer/Footer.js
import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-section">
        <h3>Contáctenos</h3>
        <ul>
          <li><a href="/contact/nosotros">Farid</a></li>{/*Nosotros será una ruta que muestre el contacto de cada uno*/}
          <li><a href="/contact/nosotros">Gabriel</a></li>
          <li><a href="/contact/nosotros">Cesar</a></li>
          <li><a href="/contact/nosotros">Alejandro</a></li>
        </ul>
      </div>
      <div className="social-links">
        <a href="https://www.facebook.com/tallerxyz" className="social-button facebook">Facebook</a>
        <a href="https://www.instagram.com/tallerxyz" className="social-button instagram">Instagram</a>
        <a href="https://twitter.com/tallerxyz" className="social-button twitter">Twitter</a>
        <a href="https://www.linkedin.com/tallerxyz" className="social-button linkedin">LinkedIn</a>
      </div>
      <div className="footer-info">
        <p>&copy; 2024 Taller de Autos XYZ | Todos los derechos reservados</p>
        <p>Dirección: Calle Principal #123, Bucaramanga</p>
        <p>Teléfono: +57 123 456 7890</p>
        <p>Email: contacto@tallerxyz.com</p>
      </div>
    </footer>
  );
}

export default Footer;



