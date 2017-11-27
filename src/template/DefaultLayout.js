import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Servicos from '../pages/Servicos';
import TrabalheConosco from '../pages/TrabalheConosco';
import Contato from '../pages/Contato';
import MenuAccessibility from '../containers/accessibilityContainer';

class DefaultLayout extends Component {

  componentDidUpdate() {
    window.scrollTo(0,0);
  }

  render() {
    const { Component, ...restProps } = this.props;
    return (
      <div>
        <MenuAccessibility/>
        <Header/>
        <Route {...restProps} render={Component}/>
        <Footer/>
      </div>
    );
  }
}

export default DefaultLayout;
