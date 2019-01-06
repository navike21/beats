import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Slider from 'react-slick';

import Header from '../share/header';
import Footer from '../share/footer';

import pico from '../../images/pico.svg';
import beatsMovil from '../../images/beatsmovil.jpg';
import beatsLove from '../../images/beats-love.jpg';
import losBeats from '../../images/los-beats.jpg';
import hablaBeats from '../../images/habla-beat.jpg';

export default class Personas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      urlTo: '',
      nameUrl: ''
    };
  }
  componentDidMount() {
    // our array
    let categoriaBeats = [];
    let subCategoriaBeats = [];
    let generoMusica = [];
    let selectCantante = [];
    let selectKit = [];
    localStorage.setItem('categoriaBeats', JSON.stringify(categoriaBeats));
    localStorage.setItem('subCategoriaBeats', JSON.stringify(subCategoriaBeats));
    localStorage.setItem('generoMusica', JSON.stringify(generoMusica));
    localStorage.setItem('selectCantante', JSON.stringify(selectCantante));
    localStorage.setItem('selectKit', JSON.stringify(selectKit));
    // console.log(localStorage.getItem("categoriaBeats"));
    // console.log(localStorage.getItem("subCategoriaBeats"));
  }

  _redirectOption = () => {
    if (this.state.redirect) {
      return <Redirect push to={'/' + this.state.urlTo} />;
    }
  };

  _activateRedirection = (url, nameUrl) => {
    this.setState(
      {
        redirect: true,
        urlTo: url,
        nameUrl: nameUrl
      },
      this._historyStorage
    );
  };

  _historyStorage = () => {
    let nameUrl = this.state.nameUrl;
    // let url = this.state.urlTo;
    // let categoriaBeats = [nameUrl, url];
    let categoriaBeats = nameUrl;
    localStorage.setItem('categoriaBeats', categoriaBeats);
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
          <div className="wrappBussiness section_middle_center whiteColor w_78 w_79_desktop">
            <h2 className="whiteColor font_light font_big section_middle_center marginBottom_biggest w_75 align_center">
              <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Selecciona una
              Categoría
            </h2>
            <div className="w_100 section_middle_center">
              <Slider {...settingsSlider}>
                <Link to="/beatsmovil" className="options">
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={beatsMovil} alt="BeatsMovil" />
                  </div>
                  <h2>Beats Móvil</h2>
                  <p>
                    Esta canción será compuesta inmediatamente y grabada desde un dispositivo móvil.
                    Te la enviaremos rápidamente a tu whatsapp.
                  </p>
                </Link>
                <div
                  onClick={this._activateRedirection.bind(this, 'beats-love', 'Beats Móvil')}
                  className="options"
                >
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={beatsLove} alt="BeatsLove" />
                  </div>
                  <h2>Beats Love</h2>
                  <p>
                    Aquí tu historia de amor ¡es la protagonista! Sorprende a esa persona especial
                    con una canción que hable sólo de ustedes.
                  </p>
                </div>
                <div
                  onClick={this._activateRedirection.bind(this, 'los-beats', 'Los Beats')}
                  className="options"
                >
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={losBeats} alt="LosBeats" />
                  </div>
                  <h2>Los Beats</h2>
                  <p>
                    La familia BEATS ¡Somos todos!, Compongamos esa canción perfecta para tu familia
                    de una manera muy especial.
                  </p>
                </div>
                <div
                  onClick={this._activateRedirection.bind(this, 'habla-beats', 'Habla Beats')}
                  className="options"
                >
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={hablaBeats} alt="HablaBeats" />
                  </div>
                  <h2>Habla Beats</h2>
                  <p>
                    Entre amigos, existen grandes momentos, creemos una canción para que esos
                    momentos ¡nunca se acaben!
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
