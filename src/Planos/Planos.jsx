import { useEffect } from 'react';
import React from 'react';
import './Planos.css';
import Card from '../Card/Card';
import planosData from '../data/Planos.json';

const Planos = () => {
  const [planos, setPlanos] = React.useState(planosData);

  fetch('/Planos.json')
    .then((res) => {
      if (!res.ok) throw new Error('Erros ao carregar Planos');
      return res.json();
    })
    .then((data) => setPlanos(data))
    .catch((error) => console.error(error));

  return (
    <div className="contentePlanos" id="planos">
      <div className="centralizadiv">
        <div className="titulos">Nossos Planos.</div>
        <div className="planos">
          {planos.map((plan) => (
            <Card
              key={plan.id}
              plano={plan.plano}
              donwload={plan.donwload}
              upload={plan.upload}
              valor={plan.valor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planos;
