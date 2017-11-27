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
    let { fontSize } = this.props.accessibility;
    fontSize = fontSize + 2;
    this.setState({ fontSize });
    this.props.changeFont(fontSize);
  }

  changeSizeMinus = (e) => {
    e.preventDefault();
    let { fontSize } = this.props.accessibility;
    fontSize = fontSize - 2;
    this.setState({ fontSize });
    this.props.changeFont(fontSize);
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
