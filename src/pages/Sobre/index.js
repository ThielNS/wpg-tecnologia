import React, { Component } from 'react';

class Sobre extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topicos: [
        {
          img: 'https://dev-res.thumbr.io/libraries/16/45/40/lib/1501743365472_4.jpg',
          title: 'Visão',
          text: 'Ser o melhor fornecedor de Segurança da Informação, renomado e admirado nacionalmente como parceiro estratégico, por agir com paixão e energia para conquistar e encantar os clientes.',
        },
        {
          img: 'http://blog.acelerato.com/wp-content/uploads/2015/07/cultura.jpg',
          title: 'Missão',
          text: 'Proporcionar Segurança facilitando a proteção dos dados sigilosos de forma transparente por meio de soluções de tecnologia e inovações.',
        },
        {
          img: 'http://asesoriaalicante.es/wp-content/uploads/2015/11/17852-NRF8UH.jpg',
          title: 'Valores',
          text: 'PESSOAS: o nosso maior valor. Investimos em nossos colaboradores, os responsáveis pelos excelentes resultados que entregamos aos nossos clientes. DESAFIOS: é o que nos aproximamos de nossos clientes, somando valores aos seus negócios e acima de tudo fortalecendo o relacionamento. RESULTADOS: é o foco do cliente e o motivo pelo qual somos reconhecidos por trazer algo que vai fazer uma diferença real na vida de outras pessoas.',
        },
      ],
    };
  }

  renderTopicos() {
    const { topicos } = this.state;

    return topicos.map((topico, index) => (
      <section key={index} className={index % 2 === 0 ? 'card row' : 'card row -direction-row-reverse _text-right'}>
        <div className={index % 2 === 0 ? 'col-4 _margin-right' : 'col-4 _margin-left'}>
          <img src={topico.img} alt="" className="col-12"/>
        </div>
        <div className="col-8">
          <h2>{topico.title}</h2>
          <p>{topico.text}</p>
        </div>
      </section>
    ));
  }

  render() {
    return (
      <div className="container">
        <section className="card">
          <h2>Descrição da Empresa</h2>
          <p>WPG TECNOLOGIA nasceu com foco em Segurança da informação, com o objetivo
de atender o mercado de Tecnologia da Informação a nível nacional, implementando
soluções customizadas que garantam a segurança e o sigilo das informações aos nossos
clientes.
Somos uma empresa especializada em serviços de segurança da informação e nossa
expertise é gerir e administrar ambientes de TI com foco em segurança, disponibilidade
e desempenho.
A WPG TECNOLOGIA está estrategicamente instalada em uma área central de São
Paulo, facilitando todo o tipo de comunicação direta com nossos clientes, visando
trabalhar com todo o tipo de empresas desde pequenos empreendedores a empresas
grande porte.</p>
        </section>
        {this.renderTopicos()}
      </div>
    );
  }
}

export default Sobre;
