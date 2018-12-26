import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import Header from '../share/header';
import Footer from '../share/footer';

import pico from '../../images/pico.svg';
import personas from '../../images/personas.jpg';
import empresas from '../../images/empresas.jpg';

export default class Pedido extends Component {
  render() {
    var settingsSlider = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerPadding: '50px',
      responsive: [
        {
          breakpoint: 810,
          settings: {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="w_100">
        <Header />
        <div className="w_100 section_middle_center full_min_h pedidosBeats spaceInBottom_normal">
          <div className="wrappBussiness section_middle_center whiteColor w_80">
            <h2 className="whiteColor font_light font_big section_middle_center marginBottom_biggest w_75 align_center">
              <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Pide
              tu&nbsp;canción
            </h2>
            <div className="w_100 section_middle_center">
              <Slider {...settingsSlider}>
                <Link to="/pedido/personas" className="options">
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={personas} alt="Personas" />
                  </div>
                  <h2>Personas</h2>
                  <p>Comienza a hacer de esa historia. ¡Tu&nbsp;mejor canción!</p>
                </Link>
                <Link to="/corporativo" className="options">
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={empresas} alt="Empresas" />
                  </div>
                  <h2>Empresas</h2>
                  <p>Tu marca necesita música y nosotros ¡Lo&nbsp;sabemos!</p>
                </Link>
              </Slider>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
