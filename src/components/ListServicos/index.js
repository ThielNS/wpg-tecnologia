import React, { Component } from 'react';
import BoxServico from '../../components/BoxServico';

class ListServicos extends Component {

  componentWillMount() {
    this.props.listServicos()
  }

  render() {
    const { servicos } = this.props;
    return (
      <section className="row -flex-wrap">
        {servicos.map((servico, index) => (
          <BoxServico
            key={index}
            title={servico.title}
            description={servico.description}
            img={servico.img}
          />
        ))}
      </section>
    );
  }
}

export default ListServicos;
