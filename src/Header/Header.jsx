import React, { useState } from 'react';
import './Header.css';
import Logo from '../Logo/5.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // estado do menu

  const links = [
    { href: '#inicio', label: 'Início' },
    { href: '#planos', label: 'Planos' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#perguntas', label: 'Perguntas' },
    { href: '#contato', label: 'Contato' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="contentLogoContato">
        <dir className="LogoContato">
          <a href="#inicio">
            <img src={Logo} alt="logo" />
          </a>
          <div className="redes">
            <a
              href="https://api.whatsapp.com/send/?phone=5585981096361&text=Ol%C3%A1%2C+iniciar+atendimento.&type=phone_number&app_absent=0"
              target="_blank"
            >
              <i className="fa-brands fa-whatsapp icones"></i>
            </a>
            <a href="https://www.instagram.com/px.connect/#" target="_blank">
              {' '}
              <i className="fa-brands fa-instagram icones"></i>
            </a>
            <a href="https://www.facebook.com/px.connect" target="_blank">
              {' '}
              <i className="fa-brands fa-facebook-f icones"></i>
            </a>
          </div>
        </dir>
      </div>
      <div className="contentnavegação">
        <div className="navegação">
          <div className="hamburger" onClick={toggleMenu}>
            <span className="menuburger um"></span>
            <span className="menuburger dois"></span>
            <span className="menuburger tres"></span>
          </div>
          <ul className={menuOpen ? 'open' : ''}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </ul>
          <a
            href="https://pxconnect.sgp.net.br/accounts/central/login"
            target="_blank"
          >
            <button className="assinante">ASSINANTE</button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
