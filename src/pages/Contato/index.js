import React, { Component } from 'react';

class Contato extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pais: 'Brasil',
    }
  }

  handlePais = e => {
    this.setState({ pais: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <section className="card">
          <form className="card-content row -flex-wrap">
            <label className="title-form">*Campo Obrigatório</label>
            <input type="text" placeholder="*Nome Completo" className="col-6" required/>
            <input type="email" placeholder="*E-mail" className="col-6" required/>
            <input type="url" placeholder="*Assunto" className="col-6" required/>
            <textarea className="col-12" placeholder="Texdo de Contato..." required/>
            <button type="submit" className="button -primare">Enviar</button>
            <button type="reset" className="button -light">Refazer</button>
          </form>
        </section>
      </div>
    );
  }
}
export default Contato;
