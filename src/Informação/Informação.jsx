import React from 'react';
import './Informação.css';

const Informação = ({ key, title, texto, imag, color }) => {
  return (
    <div
      className="cardinfo"
      style={{
        border: '3px solid transparent',
        borderRadius: '12px',
        background: `
      radial-gradient(circle at top, ${color} 0%, #EFEEE9 30%, #F3F3F3 100%) padding-box, 
      linear-gradient(rgba(181,181,181,0.5), rgba(102,102,102,0)) border-box
    `,
      }}
    >
      <img src={imag} alt="" />
      <span className="titleinfo">{title}</span>
      <span className="titletexto">{texto}</span>
    </div>
  );
};

export default Informação;
