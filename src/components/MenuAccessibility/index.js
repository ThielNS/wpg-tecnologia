import React, { Component } from 'react';
import './style.css';

class MenuAccessibility extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fontSize: 16,
      contrast: false,
    }
  }

  changeSizeMore = (e) => {
    e.preventDefault();
    let { fontSize } = this.props.accessibility;
    if(fontSize <= 20) {
      fontSize = fontSize + 2;
      this.setState({ fontSize });
      this.props.changeFont(fontSize);
    }
  }

  changeSizeMinus = (e) => {
    e.preventDefault();
    let { fontSize } = this.props.accessibility;
    if(fontSize >= 12){
      fontSize = fontSize - 2;
      this.setState({ fontSize });
      this.props.changeFont(fontSize);
    }
  }

  changeNormal = (e) => {
    e.preventDefault();
    this.setState({ fontSize: 16 });
    this.props.changeFont(16);
  }

  changeContrast= (e) => {
    e.preventDefault();
    let { contrast } = this.props.accessibility;
    contrast = !contrast;
    this.setState({ contrast });
    this.props.changeContrast(contrast);
  }

  render() {
    return (
      <nav className="menu-accessibility">
        <ul className="row">
          <li>
            <button onClick={this.changeSizeMinus} title="Diminuir fonte">A- Diminuir Fonte</button>
          </li>
          <li>
            <button onClick={this.changeNormal} title="Deixar a fonte normal">A Fonte Normal</button>
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
