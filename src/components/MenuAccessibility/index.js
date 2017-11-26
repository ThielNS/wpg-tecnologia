import React, { Component } from 'react';
import './style.css';

class MenuAccessibility extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sizeFont: 16,
      contrast: false,
    }
  }

  changeSizeMore = (e) => {
    e.preventDefault();
    this.setState({ sizeFont: this.state.sizeFont + 2});
    localStorage.setItem('sizeFont', this.state.sizeFont);
    this.props.changeFont(this.state.sizeFont);
  }

  changeSizeMinus = (e) => {
    e.preventDefault();
    this.setState({ sizeFont: this.state.sizeFont - 2 });
    localStorage.setItem('sizeFont', this.state.sizeFont);
    this.props.changeFont(this.state.sizeFont);
  }

  changeContrast= (e) => {
    e.preventDefault();
    this.setState({ contrast: !this.state.contrast });
    localStorage.setItem('contrast', this.state.contrast);
    this.props.changeContrast(this.state.contrast);
  }

  render() {
    return (
      <nav className="menu-accessibility">
        <ul className="row">
          <li>
            <button onClick={this.changeSizeMinus} title="Diminuir fonte">A- Diminuir Fonte</button>
          </li>
          <li>
            <button onClick={this.changeSizeMore} title="Aumentar fonte">A+ Aumentar Fonte</button>
          </li>
          <li>
            <button onClick={this.changeContrast} title="Mudar Contraste">Contraste</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MenuAccessibility;
