import React from 'react';
import './Perguntas.css';

const Perguntas = () => {
  const [perguntaAtiva, setPerguntaAtiva] = React.useState(false);

  const togglePergunta = (id) => {
    // Se a pergunta já estiver aberta, fecha; senão, abre
    setPerguntaAtiva(perguntaAtiva === id ? null : id);
  };

  const perguntas = [
    {
      id: '1',
      titulo: 'O QUE É FIBRA ÓPTICA',
      texto: [
        'A fibra óptica é uma tecnologia de transmissão de dados em alta velocidade. São cabos feitos de material transparente e reflexivo, e podem ser tão finos quanto o cabelo humano.',
      ],
    },
    {
      id: '2',
      titulo: 'O ROTEADOR WI-FI ESTÁ INCLUSO',
      texto: [
        'Sim, todos os nossos planos possuem o roteador Dual Band em comodato.',
      ],
    },
    {
      id: '4',
      titulo: 'INTERNET LENTA, O QUE FAÇO?',
      texto: [
        'Desligue o modem e o roteador particular, caso possua;',
        'Espere durante 5 min;',
        'Ligue os equipamentos e aguarde mais 5 min; ',
        'Verifique se as leds (luzes) estão todas acesas; ',
        'Faça uma limpeza no seu navegador, excluindo cookies e arquivos temporários;',
      ],
    },
    {
      id: '5',
      titulo: 'MINHA CASA É GRANDE PRCISO COLOCAR O MAIOR PLANO DE INTERNET?',
      texto: [
        'Quando falamos de velocidade da sua internet, estamos nos referindo à quantidade de bytes que a sua internet usa para baixar e enviar dados, ou seja, fazer downloads e uploads.',
        'Já o alcance é a distância física que o sinal do Wi-Fi do seu roteador pode chegar, definindo a área de cobertura da sua internet.',
        'Caso você precise ampliar o sinal wifi em sua casa, solicite em nosso suporte um 2º ponto.',
      ],
    },
    {
      id: '6',
      titulo:
        'COMO GARANTIR QUE O MEU TESTE DE VELOCIDADE MOSTRE 100% DA VELOCIDADE CONTRATADA ?',
      texto: [
        'Não faça o teste pelo Wi-Fi nem pelo celular. Esses métodos sofrem interferências e não mostram a velocidade real.',
        'Conecte o cabo de rede direto no computador.',
        'O computador precisa ter placa de rede Gigabit para alcançar velocidades acima de 100 Mbps.',
        'Feche outros programas e dispositivos que estejam usando a internet.',
        'Assim, o teste mostrará a velocidade real do seu plano.',
      ],
    },
  ];

  return (
    <div className="contentePerguntas" id="perguntas">
      <div className="centralizadiv">
        <div className="titulos">Perguntas Frequentes.</div>
        <div className="pre_test">
          <div className="perguntas">
            {perguntas.map((per) => (
              <div
                key={per.id}
                className="lista"
                onClick={() => togglePergunta(per.id)}
              >
                <div className="per_res">
                  <span className="titlepergunta">{per.titulo}</span>
                  {perguntaAtiva === per.id && (
                    <span className="resposta">
                      {per.texto.map((res, index) => (
                        <span key={index}> - {res}</span>
                      ))}
                    </span>
                  )}
                </div>

                <span className="mais">
                  <div className="mais-"></div>
                  <div
                    className={`mais${perguntaAtiva === per.id ? '-' : '--'}`}
                  ></div>
                </span>
              </div>
            ))}
          </div>
          <div className="boxteste">
            <div className="velocidadename">Teste de velocidade</div>
            <div className="teste">
              <iframe
                src="https://fast.com/"
                title="mapa"
                className="mapa"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perguntas;
