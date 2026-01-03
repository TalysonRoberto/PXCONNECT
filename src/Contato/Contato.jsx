import React from 'react';
import './Contato.css';
import googleplay from '../Img/GooglePlay.png';
import appstore from '../Img/AppStore.png';
import phone from '../Img/phone.png';
import email from '../Img/email.png';

const Contato = () => {
  return (
    <div className="contenteContato" id="contato">
      <div className="centralizadiv">
        <div className="contatomap">
          <div className="contatolinks">
            <div className="contato">
              <div className="conteudocontato">
                <span className="contatotitle">Contato</span>
                <a href="mailto:suporte@pxconnect.com">
                  <span className="contatodescricao">
                    {' '}
                    <img src={email} alt="email" /> suporte@pxconnect.com
                  </span>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=5585981096361&text=Ol%C3%A1%2C+iniciar+atendimento.&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <span className="contatodescricao">
                    <img src={phone} alt="phone" /> 85 98109-6361
                  </span>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=5585986117720&text=Ol%C3%A1%2C+iniciar+atendimento.&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <span className="contatodescricao">
                    <img src={phone} alt="phone" /> 85 98611-7720
                  </span>
                </a>
              </div>
              <div className="conteudocontato">
                <span className="contatotitle" style={{ marginTop: '10px' }}>
                  Redes
                </span>
                <div className="linkicon">
                  <a
                    href="https://api.whatsapp.com/send/?phone=5585981096361&text=Ol%C3%A1%2C+iniciar+atendimento.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    {' '}
                    <i class="fa-brands fa-square-whatsapp redesicon"></i>
                  </a>
                  <a href="https://www.facebook.com/px.connect" target="_blank">
                    <i class="fa-brands fa-square-facebook redesicon"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/px.connect/#"
                    target="_blank"
                  >
                    <i class="fa-brands fa-square-instagram redesicon"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="links">
              <div className="linksapp">
                <span className="linkTitle">PX Connect</span>
                <a href="#inicio">Início</a>
                <a href="#planos">Planos</a>
                <a href="#sobre">Sobre</a>
                <a href="#perguntas">Perguntas</a>
                <a href="#contato">Contato</a>
              </div>
              <div className="app">
                <span className="linkTitle" style={{ color: '#FFAA37' }}>
                  App Central do Assinante
                </span>
                <a
                  href="https://play.google.com/store/apps/details?id=br.net.tsmx.meuappprovedor&hl=pt_BR&gl=US"
                  target="_blank"
                >
                  <img src={googleplay} alt="googleplay" />
                </a>
                <a
                  href="https://apps.apple.com/br/app/meuappprovedor/id1637448837"
                  target="_blank"
                >
                  <img src={appstore} alt="appstore" />
                </a>
              </div>
            </div>
          </div>
          <div className="map">
            <iframe
              className="iframeMaP"
              title="PX Connect"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.283072211199!2d-38.53085842398068!3d-3.885824443588839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c751ef16b64e55%3A0x687bfa17e068304a!2sPX%20Connect%20-%20Internet%20100%25%20Fibra%20%C3%93ptica!5e0!3m2!1spt-BR!2sbr!4v1692532734567!5m2!1spt-BR!2sbr"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
