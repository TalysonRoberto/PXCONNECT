import React from 'react';
import './Sobre.css';
import px from '../Logo/18.png';
import Informação from '../Informação/Informação';
import atendimento from '../Img/atendimento.png';
import fibra from '../Img/fibra.png';
import servidores from '../Img/servidores.png';
import rede from '../Img/rede.png';

const Sobre = () => {
  const info = [
    {
      id: '1',
      title: 'ATENDIMENTO',
      texto:
        'Contamos com o melhor tempo de atendimento humanizado da região, proporcionando uma melhor qualidade e segurança pra você.',
      img: atendimento,
      color: '#FEDA0D',
    },
    {
      id: '2',
      title: 'FIBRA ÓPTICA',
      texto:
        'Nossa tecnologia de ponta oferece qualidade e redundância na sua conexão com uma rede 100% Fibra Óptica até sua casa.',
      img: fibra,
      color: '#0DFEE2',
    },
    {
      id: '3',
      title: 'SERVIDORES',
      texto:
        'Nós utilizamos os servidores do Youtube, Netflix, Google e Facebook. Disponibilizamos de uma navegação muito mais rápida e estável.',
      img: servidores,
      color: '#FF4545',
    },
    {
      id: '4',
      title: 'REDE HOMOLOGADA',
      texto:
        'Os nossos planos são 100% adequados à nova resolução da ANATEL. Você recebe o que pagou de verdade 24x7.',
      img: rede,
      color: '#B82EDA',
    },
  ];

  return (
    <div className="contenteSobre" id="sobre">
      <div className="centralizadiv">
        <div className="titulos" style={{ color: '#151517' }}>
          Por que escolher a <strong>PX Connect</strong>{' '}
          <span>
            <img className="titleimg" src={px} alt="" />
          </span>
        </div>
        <div className="sobre">
          {info.map((inf) => (
            <Informação
              id={inf.id}
              title={inf.title}
              texto={inf.texto}
              imag={inf.img}
              color={inf.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sobre;
