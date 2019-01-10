import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Slider from 'react-slick';

import Header from '../../share/header';
import Footer from '../../share/footer';

import pico from '../../../images/pico.svg';
import nuestraHistoria from '../../../images/nuestra_historia.jpg';
import aniversario from '../../../images/aniversario.jpg';
import matrimonio from '../../../images/matrimonio.jpg';

export default class BeatsLove extends Component {
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
    let selectKit = [];
    localStorage.setItem('subCategoriaBeats', JSON.stringify(subCategoriaBeats));
    localStorage.setItem('generoMusica', JSON.stringify(generoMusica));
    localStorage.setItem('selectCantante', JSON.stringify(selectCantante));
    localStorage.setItem('selectKit', JSON.stringify(selectKit));
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
    localStorage.setItem('subCategoriaBeats', subcategoriaBeats);
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
              <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Beats Love
            </h2>
            <div className="w_100 section_middle_center">
              <Slider {...settingsSlider}>
                <div
                  onClick={this._activateRedirection.bind(this, 'Nuestra Historia')}
                  className="options"
                >
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={nuestraHistoria} alt="NuestraHistoria" />
                  </div>
                  <h2>Nuestra Historia</h2>
                  <p>
                    Esta canción será compuesta inmediatamente y grabada desde un dispositivo móvil.
                    Te la enviaremos rápidamente a tu whatsapp.
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
                    Aquí tu historia de amor ¡es la protagonista! Sorprende a esa persona especial
                    con una canción que hable sólo de ustedes.
                  </p>
                </div>
                <div
                  onClick={this._activateRedirection.bind(this, 'Matrimonio')}
                  className="options"
                >
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={matrimonio} alt="Matrimonio" />
                  </div>
                  <h2>Matrimonio</h2>
                  <p>
                    La familia BEATS ¡Somos todos!, Compongamos esa canción perfecta para tu familia
                    de una manera muy especial.
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
