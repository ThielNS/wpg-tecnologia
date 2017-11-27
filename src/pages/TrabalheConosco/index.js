import React, { Component } from 'react';

class TrabalheConosco extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pais: 'Brasil'
    }
  }

  handlePais = e => {
    this.setState({ pais: e.target.value });
  }

  searchCep = (e) => {
    fetch(`https://viacep.com.br/ws/${e.target.value}/json/`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById('logradouro').value = data.logradouro;
      document.getElementById('bairro').value = data.bairro;
      document.getElementById('estado').value = data.uf;
      document.getElementById('complemento').value = data.complemento;
      document.getElementById('cep').style.borderColor = '#ddd';
    })
    .catch(e => {
      document.getElementById('cep').style.borderColor = '#e34c26';
    });
  }

  render() {
    console.log(this.state.data);
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
              <input type="text" id="cep" placeholder="*CEP" className="col-6" onBlur={this.searchCep} required/>
              <input type="text" id="logradouro" placeholder="*Logradouro" className="col-6" required/>
              <input type="text" id="numero" placeholder="*Número" className="col-6" required/>
              <input type="text" id="complemento" placeholder="complemento" className="col-6"/>
              <input type="text" id="bairro" placeholder="*Bairro" className="col-6" required/>
              <input type="text" id="estado" placeholder="*Estado" className="col-6" required/>
              <input type="text" id="pais" placeholder="*Pais" value={this.state.pais} className="col-6" onChange={this.handlePais} required/>
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
