import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Slider from 'react-slick';

import Header from '../../share/header';
import Footer from '../../share/footer';

import pico from '../../../images/pico.svg';
import acontecimiento from '../../../images/acontecimiento.jpg';
import aniversario from '../../../images/aniinerversary.jpg';
import eventoSocial from '../../../images/evento_social.jpg';

export default class HablaBeats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      urlTo: '',
      nameUrl: ''
    };
  }

  componentDidMount() {
    let subCategoriaBeats = [];
    let generoMusica = [];
    let selectCantante = [];
    localStorage.setItem('subCategoriaBeats', JSON.stringify(subCategoriaBeats));
    localStorage.setItem('generoMusica', JSON.stringify(generoMusica));
    localStorage.setItem('selectCantante', JSON.stringify(selectCantante));
  }

  _redirectOption = () => {
    if (this.state.redirect) {
      return <Redirect push to={'/' + this.state.urlTo} />;
    }
  };

  _activateRedirection = nameUrl => {
    this.setState(
      {
        redirect: true,
        urlTo: 'genero-musical',
        nameUrl: nameUrl
      },
      this._historyStorage
    );
  };

  _historyStorage = () => {
    let nameUrl = this.state.nameUrl;
    let subcategoriaBeats = [nameUrl];
    localStorage.setItem('subCategoriaBeats', JSON.stringify(subcategoriaBeats));
  };

  render() {
    let settingsSlider = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 910,
          settings: {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
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
        {this._redirectOption()}
        <Header />
        <div className="w_100 section_middle_center full_min_h pedidosBeats spaceInBottom_normal">
          <div className="wrappBussiness section_middle_center whiteColor w_78">
            <h2 className="whiteColor font_light font_big section_middle_center marginBottom_biggest w_75 align_center">
              <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Habla Beats
            </h2>
            <div className="w_100 section_middle_center">
              <Slider {...settingsSlider}>
                <div
                  onClick={this._activateRedirection.bind(this, 'Acontecimiento')}
                  className="options"
                >
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={acontecimiento} alt="Acontecimiento" />
                  </div>
                  <h2>Acontecimiento</h2>
                  <p>
                    Cualquier pretexto es bueno para un buen reencuentro entre amigos. Que ese
                    momento ¡tenga una canción especial!
                  </p>
                </div>
                <div
                  onClick={this._activateRedirection.bind(this, 'Aniversario')}
                  className="options"
                >
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={aniversario} alt="Aniversario" />
                  </div>
                  <h2>Aniversario</h2>
                  <p>
                    Celebra ese aniversario del colegio, promo de la universidad, con una canción
                    que explique tantos buenos momentos.
                  </p>
                </div>
                <div
                  onClick={this._activateRedirection.bind(this, 'Eventos Socials')}
                  className="options"
                >
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={eventoSocial} alt="EventoSocial" />
                  </div>
                  <h2>Eventos Sociales</h2>
                  <p>
                    Todo evento social debería tener una canción personalizada, crea una canción
                    para ese momento especial y que perdure en el tiempo.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
