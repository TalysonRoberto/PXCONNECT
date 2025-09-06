import React from 'react';
import './Card.css';
import donw from '../Img/donwload.png';
import up from '../Img/Upload.png';
import wifi from '../Img/Wi-Fi.png';
import suport from '../Img/Suporte.png';

const Card = ({ donwload, info, valor, upload, add }) => {
  let cardClass = '';

  if (donwload === '800') {
    cardClass = 'infinity';
  } else if (donwload === '300' || donwload === '200') {
    cardClass = 'menor';
  }

  return (
    <div className={`card ${cardClass}`}>
      <span className="velovidade">{donwload}</span>
      <span className="megas">Megas</span>

      <div className="dados">
        {/* Renderiza imagens extras se existirem */}
        {add && add.length > 0 && (
          <div className="extras">
            {add.map((str, key) => (
              <img
                key={key}
                src={`${import.meta.env.BASE_URL}${str}`}
                alt="benefício extra"
              />
            ))}
          </div>
        )}

        <span>
          <img src={donw} alt="Download" /> {donwload} Megas de Download
        </span>
        <span>
          <img src={up} alt="Upload" /> {upload} Megas de Upload
        </span>
        {info && <span>{info}</span>}
      </div>

      <span className="valor">R$ {valor}</span>
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
