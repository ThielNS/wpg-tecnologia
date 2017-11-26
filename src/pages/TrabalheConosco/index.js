import React, { Component } from 'react';

class TrabalheConosco extends Component {

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
        <section className="card col-12">
          <p>Seja parte da WPG TECNOLOGIA e ajude clientes aproveitarem todo o potencial da Tecnologia da Informação.</p>
        </section>
        <section className="card">
          <form className="card-content row -flex-wrap">
            <label className="title-form">*Campo Obrigatório</label>
            <input type="text" placeholder="*Nome Completo" className="col-6" required/>
            <input type="email" placeholder="*E-mail" className="col-6" required/>
            <input type="url" placeholder="*Perfil do Linkedin" className="col-6" required/>
            <input type="url" placeholder="Perfil do GitHub" className="col-6"/>
            <div className="row -flex-wrap col-12">
              <label className="title-form">Endereço:</label>
              <input type="text" placeholder="*Logradouro" className="col-6" required/>
              <input type="text" placeholder="*Número" className="col-6" required/>
              <input type="text" placeholder="*Bairro" className="col-6" required/>
              <input type="text" placeholder="*Estado" className="col-6" required/>
              <input type="text" placeholder="*Pais" value={this.state.pais} className="col-6" onChange={this.handlePais} required/>
            </div>
            <div className="col-6">
            <label className="title-form">*Data de Nascimento:</label>
              <input type="date" className="col-12" required/>
            </div>
            <div className="col-6">
            <label className="title-form">*Pretenção Salarial:</label>
              <input type="number" className="col-12" placeholder="0.00" required/>
            </div>
            <label className="title-form">*Nos diz por que gostaria de trabalhar conosco:</label>
            <textarea className="col-12" placeholder="Escreva aqui..." required/>
            <button type="submit" className="button -primare">Enviar</button>
            <button type="reset" className="button -light">Refazer</button>
          </form>
        </section>
      </div>
    );
  }
}
export default TrabalheConosco;
