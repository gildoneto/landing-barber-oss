import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  bookingUrl: string;
}

export const Header: React.FC<HeaderProps> = ({ bookingUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#hero" className="logo-link">
          <img 
            src="/logo-barber-oss-transparente.png" 
            alt="Barber Oss Logo" 
            className="logo-img"
          />
        </a>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav>
          <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <li>
              <a href="#hero" className="nav-link active" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>
                O Barbeiro
              </a>
            </li>
            <li>
              <a href="#gallery" className="nav-link" onClick={() => setIsOpen(false)}>
                Estilos
              </a>
            </li>
            <li>
              <a href="#testimonials" className="nav-link" onClick={() => setIsOpen(false)}>
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>
                Contato
              </a>
            </li>
            {isOpen && (
              <li>
                <a 
                  href={bookingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-button"
                  style={{ display: 'inline-block' }}
                >
                  Agendar Online
                </a>
              </li>
            )}
          </ul>
        </nav>

        <a 
          href={bookingUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-button"
        >
          Agendar Online
        </a>
      </div>
    </header>
  );
};
