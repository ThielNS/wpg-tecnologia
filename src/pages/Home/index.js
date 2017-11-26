import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ServicosContainer from '../../containers/servicosContainer';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      destaques: [
        {
          title: 'Serviços',
          descripiton: 'Trabalhamos para oferecer aos nossos clientes os melhores produtos e serviços. Atendemos clientes de diversos segmentos com muita dedicação, pois cada empresa tem sua própria necessidade.',
          to: '/servicos',
          linkTitle: 'Saiba Mais',
        },
        {
          title: 'Equipe',
          descripiton: 'A WPG TECNOLOGIA está em constate crescimento e gerando diversas oportunidades de emprego. Você que busca nova oportunidade ou uma maneira de entrar no mercado de trabalho.',
          to: '/trabalhe-conosco',
          linkTitle: 'Cadastre-se'
        },
        {
          title: 'Contato',
          descripiton: 'Entre em contato, conheça nossos serviços, temos as melhores soluções personalizadas para atender as suas necessidades. Temos suporte todos os dias da semana e central de atendimento 24 horas.',
          to: '/contato',
          linkTitle: 'Saiba Mais',
        },
      ],
    };
  }

  renderDestaque() {
    const { destaques } = this.state;
    return destaques.map((destaque, index) => (
        <div key={index} className={index == 0 ? 'card -destaque col-4' : 'card col-4'}>
          <h3 className="_text-center">{destaque.title}</h3>
          <p className="_margin-bottom">{destaque.descripiton}</p>
          <p className="_text-center"><Link to={destaque.to} className="button -primare">{destaque.linkTitle}</Link></p>
        </div>
      ));
  }

  render() {
    return (
      <div className="content-fluid">
        <section className="card container">
          <div className="card-content">
            <p>WPG TECNOLOGIA nasceu com o foco em segurança da informação, com o objetivo de atender o mercado de Tecnologia da Informação a nível nacional, implementando soluções customizadas que garantam a segurança e o sigilo das informações aos nossos clientes. Somos uma empresa especializada em serviços de segurança da informação e nossa expertise é gerir e administrar ambientes de TI com foco em segurança, disponibilidade e desempenho</p>
            <div className="_text-center">
              <Link to="/sobre" className="button -primare">Saiba Mais</Link>
            </div>
          </div>
        </section>
        <ServicosContainer/>
        <section className="container">
          <div className="row -flex-wrap _margin-left-negative">
            {this.renderDestaque()}
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
