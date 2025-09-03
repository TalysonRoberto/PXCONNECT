import { useEffect } from 'react';
import React from 'react';
import './Planos.css';
import Card from '../Card/Card';

const Planos = () => {
  const [planos, setPlanos] = React.useState([]);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'Planos.json')
      .then((res) => res.json())
      .then((data) => setPlanos(data))
      .catch((err) => console.error(err));
  }, []);

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
