import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Servicos from '../pages/Servicos';
import TrabalheConosco from '../pages/TrabalheConosco';
import Contato from '../pages/Contato';
import DefaultLayout from './DefaultLayout';

class MainLayout extends Component {

  render() {
    const { fontSize } = this.props.accessibility;
    const style = {fontSize: `${fontSize}px`};
    const contrast = this.props.accessibility.contrast ? 'contrast' : '';

    return (
      <BrowserRouter>
        <main className={contrast} style={style}>
            <Switch>
              <DefaultLayout exact path="/" component={Home}/>
              <DefaultLayout exact path="/sobre" component={Sobre}/>
              <DefaultLayout exact path="/servicos" component={Servicos}/>
              <DefaultLayout exact path="/trabalhe-conosco" component={TrabalheConosco}/>
              <DefaultLayout exact path="/contato" component={Contato}/>
            </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default MainLayout;
