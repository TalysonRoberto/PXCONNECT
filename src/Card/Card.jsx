import React from 'react';
import './Card.css';
import donw from '../Img/donwload.png';
import up from '../Img/Upload.png';
import wifi from '../Img/Wi-Fi.png';
import suport from '../Img/Suporte.png';

const Card = ({ id, plano, donwload, upload, valor }) => {
  return (
    <div className={`card ${plano === 'INFINITY' ? 'infinity' : ''}`}>
      <span className="plano">{plano}</span>
      <span className="velovidade">{donwload}</span>
      <span className="megas">Megas</span>
      <div className="dados">
        <span>
          <img src={donw} alt="" /> {donwload} Megas de Download
        </span>
        <span>
          <img src={up} alt="" /> {upload} Megas de Upload
        </span>
        <span>
          <img src={wifi} alt="" /> Wi-fi Dual Band AC
        </span>
        <span>
          <img src={suport} alt="" /> Suporte Especializado
        </span>
      </div>
      <span className="valor">RS {valor}</span>
      <span className="mes">Por mês</span>
      <a
        className="assinar"
        href={`https://api.whatsapp.com/send/?phone=5585981096361&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+plano+de+${donwload}+Megas&type=phone_number&app_absent=0`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>ASSINE AGORA</span>
      </a>
    </div>
  );
};

export default Card;
