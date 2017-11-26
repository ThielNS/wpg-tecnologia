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
    console.log(this.props);
    const { fontSize } = this.props.accessibility[0];
    const style = {fontSize: `${fontSize}px`};
    const contrast = this.props.accessibility[0].contrast ? 'contrast' : '';

    return (
      <BrowserRouter>
        <main className={contrast} style={style}>
          <MenuAccessibility/>
          <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/sobre" component={Sobre}/>
              <Route exact path="/Servicos" component={Servicos}/>
              <Route exact path="/trabalhe-conosco" component={TrabalheConosco}/>
              <Route exact path="/contato" component={Contato}/>
            </Switch>
          <Footer/>
        </main>
      </BrowserRouter>
    );
  }
}

export default DefaultLayout;



// <Route exact path="/sobre" component={Sobre}/>
// <Route exact path="/servicos" component={Servicos}/>
// <Route exact path="/trabalhe-conosco" component={TrabalheConosco}/>
// <Route exact path="/contato" component={Contato}/>
