import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container row -justify-space-between -align-center -flex-wrap">
      <div className="box-footer col-4">
        <h3 className="_margin-bottom">Atendimento</h3>
        <p><a href="tel:1112341234">(11) 1234-1234</a></p>
        <p><a href="tel:11912341234">(11) 9 1234-1234</a></p>
      </div>
      <div className="box-footer col-4">
        <h3 className="_margin-bottom">Endereço</h3>
        <p>Av. Dr. Adolpho Pinto, 109 - Barra Funda, São Paulo - SP, 01156-050</p>
      </div>
      <div className="box-footer col-4">
        <img src="mapa.png" alt="mapa de localização da empresa" className="col-12"/>
      </div>
      <div className="box-footer col-12 _text-center _margin-top">
        <p>WPG Tecnologias 2017</p>
      </div>
    </div>
  </footer>
);

export default Footer;
