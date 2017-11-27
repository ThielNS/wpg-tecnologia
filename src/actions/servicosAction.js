const listServicos = [
  {
    img: 'https://www.baboo.com.br/wp-content/uploads/2014/01/VMware-Cloud.jpg',
    title: 'Gerenciamento na Nuvem',
    description: 'A nuvem desempenha um papel crucial na evolução de um negócio. No mundo conectado em que vivemos agora, oportunidades vêm e vão rápido e as empresas precisam da velocidade que a nuvem oferece para responder, ao permitir criar um ambiente híbrido entre os processos de TI e da área de negócios e assim, responder às novas expectativas dos clientes.',
  },
  {
    img: 'http://www.microcity.com.br/foto/gestao_ti%20(2).jpg',
    title: 'Infraestrutura e Virtualização',
    description: 'Processos de infraestrutura e virtualização de servidores não precisam ser complicados, com altos custos e possíveis falhas. A WPG CLOUD te ajuda com agilidade nos processos de backup, alta disponibilidade de serviços e início de uma jornada de infraestrutura em nuvem. Ao optar por uma solução moderna, você ganha agilidade na operação da TI, disponibilidade e segurança de dados, otimização de espaço, flexibilidade e com certeza, redução nos custos.',
  },
  {
    img: 'http://portaldailha.com.br/noticias/fotos/TI_Virtual.png',
    title: 'Modernização de Desktop',
    description: 'A WPG CLOUD sabe que cada negócio é único e nem todas as necessidades estão adequadas a apenas uma plataforma. Então, nós disponibilizamos uma solução única de comunicação e colaboração na Nuvem com uma estratégia de transformação holística da área de trabalho incluindo o desktop integrado do Windows 10, as vantagens de colaboração e produtividade do Office 365, a comunicação do Skype for Business e a segurança de aplicações e dados móveis com o Enterprise Mobility Suite (EMS).',
  },
  {
    img: 'http://i.telegraph.co.uk/multimedia/archive/03131/IT_technician_3131240b.jpg',
    title: 'Antivírus',
    description: 'Além de fornecer os produtos, nossos analistas técnicos podem através de uma consultoria indicar os melhores produtos para atender da melhor forma a necessidade da sua empresa.',
  },
  {
    img: 'http://datta.inf.br/assets/2014/10/gestao-tijpg.jpg',
    title: 'Sistema de Gestão',
    description: 'A WPG TECNOLOGIA tem por objetivo desenvolver softwares, que além de utilizar o máximo em tecnologia aplica, buscam acima de tudo facilitar as rotinas de trabalhos dos usuários e permitir controles gerenciais mais eficazes.',
  },
  {
    img: 'http://www.informatics.manchester.ac.uk/media/1156/153054548.jpg?width=850&height=486&mode=crop&quality=75',
    title: 'Microsoft Azure',
    description: 'Alcance seu potencial máximo de trabalho. Oferecemos soluções que garantem alto desempenho e comodidade para os seus negócios. Isso com toda segurança, praticidade e mobilidade dos produtos Microsoft.',
  },
  {
    img: 'https://www.ziontechgroup.com.br/assets/images/hardware-600x450-600x450.jpg',
    title: 'Hardware',
    description: 'Em parceria com os maiores distribuidores do país, a WPG TECNOLOGIA é também fornecedora de todos os tipos de equipamentos para informática.',
  },
  {
    img: 'http://hpc-asia.com/wp-content/uploads/2017/06/Big-data-analytics-solutions.jpg',
    title: 'Plataforma de Dados',
    description: 'Com plataformas seguras, escalonáveis e com menor vulnerabilidade, para qualquer tipo de dados, em qualquer aplicativo, você pode obter insights em tempo real. A nossa equipe é especialista na entrega de projetos de banco de dados e monitoramento do seu ambiente. O objetivo desse serviço é que tudo esteja funcionando corretamente, evitando paradas, perda de dados ou problemas de performance. A WPG TECNOLOGIA pode oferecer os recursos e aprimoramentos para alta performance e segurança avançada, além de análises e relatórios integrados.',
  },
  {
    img: 'https://www.mindshiftonline.com/img/client2.jpg',
    title: 'Desenvolvimento de Aplicativos em Nuvem',
    description: 'Destinado a quem quer explorar mais as nossas soluções, baseadas em ambientes de produção e que trazem os reais desafios de se adotar soluções de Nuvem. Agende a sua visita e veja como colocamos ideias no ar, seja em software, web ou mobile application.',
  },
];

export const servicos = () => ({ type: 'LIST_SERVICOS', listServicos });
