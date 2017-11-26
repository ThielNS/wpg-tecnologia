import React from 'react';
import { Route } from 'react-router-dom';
import Logo from '../Logo';
import MenuList from '../MenuList';
import TitlePage from '../TitlePage';
import Carousel from '../Carousel';
import './style.css';

const Header = () => (
  <header className="header">
    <nav className="row -align-start -justify-space-between">
      <Logo/>
      <div className="row -direction-colum -align-start">
        <button className="toggle-bar"><i className="fa fa-bars"/></button>
        <MenuList/>
      </div>
    </nav>
    <Route exact path="/" component={Carousel}/>
    <Route path="/sobre" render={() => (
      <TitlePage title="Sobre WPG Tecnologia"/>
    )}/>
    <Route path="/servicos" render={() => (
      <TitlePage title="Nossos Servicos"/>
    )}/>
    <Route path="/trabalhe-conosco" render={() => (
      <TitlePage title="Trabalhe Conosco"/>
    )}/>
    <Route path="/contato" render={() => (
      <TitlePage title="Entre em contato conosco"/>
    )}/>
  </header>
);

export default Header;
