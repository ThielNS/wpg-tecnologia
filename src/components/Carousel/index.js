import React, { Component } from 'react';
import Slider from 'react-slick'
import { Link } from 'react-router-dom';
import './carousel.css';

const ArrowButton = ({position, ...props}) => {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{...style, display: 'block', zIndex: 2, ...position }}
      onClick={onClick}
    ></div>
  );
}

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: true,
      autoplay: true,
      pauseOnHover: true,
      fade: true,
      nextArrow: <ArrowButton position={{right: '15px'}}/>,
      prevArrow: <ArrowButton position={{left: '15px'}}/>
    };
    return (
      <div className="carousel">
        <Slider {...settings} ref={c => this.slider = c}>
          <div className="carousel-item">
            <div className="carousel-legend">
              <Link to="/servicos">
                <h2>Gerenciamento na Nuvem</h2>
              </Link>
            </div>
            <img src="http://www.jcnet-it.com.br/wp-content/themes/jcnet/img/slider/cloud.jpg" className="col-12"/>
          </div>
          <div className="carousel-item">
            <div className="carousel-legend">
              <Link to="/servicos">
                <h2>Infraestrutura e Virtualização</h2>
              </Link>
            </div>
            <img src="http://www.jcnet-it.com.br/wp-content/themes/jcnet/img/slider/infra.jpg" className="col-12"/>
          </div>
          <div className="carousel-item">
            <div className="carousel-legend">
              <Link to="/servicos">
                <h2>Sistema de Gestão</h2>
              </Link>
            </div>
            <img src="http://www.jcnet-it.com.br/wp-content/themes/jcnet/img/slider/custo.jpg" className="col-12"/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
