import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
