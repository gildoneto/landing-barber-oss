import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <img 
          src="/logo-barber-oss-transparente.png" 
          alt="Barber Oss Logo" 
          className="footer-logo"
        />
        
        <p className="footer-text">
          &copy; {currentYear} Barber Oss. Todos os direitos reservados.
        </p>

        <ul className="footer-links">
          <li>
            <a href="#hero" className="footer-link">Home</a>
          </li>
          <li>
            <a href="#about" className="footer-link">O Barbeiro</a>
          </li>
          <li>
            <a href="#gallery" className="footer-link">Estilos</a>
          </li>
          <li>
            <a href="#contact" className="footer-link">Contato</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
