import React from 'react';
import { Link } from 'react-router-dom';
import ServicosContainer from '../../containers/servicosContainer';

const Servicos = () => (
  <div>
    <section className="card container">
      <p className="_margin-bottom">A WPG TECNOLOGIA ajuda clientes a otimizarem o uso da TI e aproveitarem todo o potencial ao explorar a sinergia entre segurança da informação, consultoria em nuvem e desenvolvimento de sistemas. Assim, traça um caminho para obter os melhores resultados.</p>
      <p className="_text-center">
        <Link to="/contato" className="button -primare">Entre em Contato</Link>
      </p>
    </section>
    <ServicosContainer/>
  </div>
);

export default Servicos;
