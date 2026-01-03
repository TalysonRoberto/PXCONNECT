import React from 'react';
import './Footer.css';

const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="contenteFooter">
      <div className="centralizadiv">
        <div className="direitos">
          <span className="reservados">
            @ {anoAtual} PX CONNECT. Todos os direitos <span>reservados</span>
          </span>
          <span>
            Desenvolvedor :{' '}
            <a
              href="https://github.com/TalysonRoberto"
              target="_blank"
              className="dev"
            >
              Talyson Roberto
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
