import React from 'react';
import './Inicio.css';
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import Header from '../Header/Header';

const Inicio = () => {
  return (
    <div>
      <Header />
      <div className="contenteinicio" id="inicio">
        <ParticleBackground />
        <div className="contentetexto">
          <div className="inicio">
            <div className="textos">
              <div className="inittitle">
                Venha para a <strong>PX Connect!</strong>
              </div>
              <div className="frase">
                Internet rápida e estável, do jeito que você precisa.
              </div>
            </div>
            <a href="#planos">
              <button className="nossoplano">NOSSOS PLANOS</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
