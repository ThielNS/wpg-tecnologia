import React from 'react';
import { Route, Link } from 'react-router-dom';
import './boxservico.css';

const BoxServico = ({ title, img, description }) => (
  <figure className="box-servico col-4">
    <img src={img} alt=""/>
    <figcaption>
      <h3>{title}</h3>
      <Route exact path="/" render={() => (
        <Link to="/servicos" className="button -light">Ver Mais</Link>
      )}/>
      <Route exact path="/servicos" render={() => (
        <p>{description}</p>
      )}/>
    </figcaption>
  </figure>
);

export default BoxServico;
