import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const MenuList = () => (
  <ul className="menu-list row">
    <li>
      <Link to="/">Início</Link>
    </li>
    <li>
      <Link to="/sobre">Sobre</Link>
    </li>
    <li>
      <Link to="/servicos">Serviços</Link>
    </li>
    <li>
      <Link to="/trabalhe-conosco">Trabalhe Conosco</Link>
    </li>
    <li>
      <Link to="/contato">Contato</Link>
    </li>
  </ul>
);

export default MenuList;
