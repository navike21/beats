import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Slider from 'react-slick';

import Header from '../../share/header';
import Footer from '../../share/footer';

import pico from '../../../images/pico.svg';
import historiaFamilia from '../../../images/historia_familia.jpg';
import padres from '../../../images/padres.jpg';
import hijos from '../../../images/hijos.jpg';
import mascota from '../../../images/mascota.jpg';

export default class LosBeats extends Component {
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
              <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Los Beats
            </h2>
            <div className="w_100 section_middle_center">
              <Slider {...settingsSlider}>
                <div
                  onClick={this._activateRedirection.bind(this, 'Historia Familiar')}
                  className="options"
                >
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={historiaFamilia} alt="HistoriaFamilia" />
                  </div>
                  <h2>Historia Familiar</h2>
                  <p>
                    Toda buena familia, trae una buena historia… Hagamos que una canción los
                    identifique y los represente.
                  </p>
                </div>
                <div
                  onClick={this._activateRedirection.bind(this, 'Mis Padres')}
                  className="options"
                >
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={padres} alt="Padres" />
                  </div>
                  <h2>Mis Padres</h2>
                  <p>
                    Ellos son personas que nos aman incondicionalmente, ¡Merecen tener una canción
                    muy especial!
                  </p>
                </div>
                <div
                  onClick={this._activateRedirection.bind(this, 'Mis Hijos')}
                  className="options"
                >
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={hijos} alt="Hijos" />
                  </div>
                  <h2>Mis Hijos</h2>
                  <p>
                    Nuestros hijos son lo más preciado que tenemos y queremos verlos felices.
                    ¡Dedícales una canción!
                  </p>
                </div>
                <div
                  onClick={this._activateRedirection.bind(this, 'Mi Mascota')}
                  className="options"
                >
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={mascota} alt="Mascota" />
                  </div>
                  <h2>Mi Mascota</h2>
                  <p>
                    Una mascota, es un miembro más de nuestra familia, deja que la música también se
                    lo demuestre.
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
