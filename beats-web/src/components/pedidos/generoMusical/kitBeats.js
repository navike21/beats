import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Slider from 'react-slick';

import Header from '../../share/header';
import Footer from '../../share/footer';

import pico from '../../../images/pico.svg';
// import hombre from '../../../images/hombre.jpg';
// import mujer from '../../../images/mujer.jpg';

import todosBeats from '../../../images/todos-los-beats.jpg';
import acustico from '../../../images/acustico.jpg';
// import duo from '../../../images/duo.jpg';

import { contentTypes } from '../../share/settings';

export default class Cantada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      urlTo: '',
      nameUrl: '',
      price: 0,
      loading: true,

      optionKit: {},
      titleOpt1: 'Con todos los beats',
      descript1:
        '¡Creemos tu canción junto a toda la banda de BEATS! Tu canción tendrá todos los instrumentos necesarios para tener la combinación perfecta.',
      titleOpt2: 'Beats Acústicos',
      descript2:
        '¿La quieres aún más feeling? Tu canción suena también en formato acústico. Hagámosla a piano o guitarra y voz. Déjate sorprender por el auténtico sentimiento.'
    };
  }

  componentDidMount() {
    let selectKit = [];
    localStorage.setItem('selectKit', JSON.stringify(selectKit));

    this._prices();
  }

  _redirectOption = () => {
    if (this.state.redirect) {
      return <Redirect push to={'/' + this.state.urlTo} />;
    }
  };

  _activateRedirection = (nameUrl, price) => {
    this.setState(
      {
        redirect: true,
        urlTo: 'register',
        nameUrl: nameUrl,
        price: price
      },
      this._historyStorage
    );
  };

  _historyStorage = () => {
    let nameUrl = this.state.nameUrl;
    let precio = this.state.price;
    let selectKit = [nameUrl, precio];
    localStorage.setItem('selectKit', selectKit);
  };

  _prices = () => {
    let option = localStorage.getItem('selectCantante');
    // console.log(option);

    let jsonStructureSingle = {
      kitName: 'Kit Solista',
      packInfo: [
        {
          title: this.state.titleOpt1,
          description: this.state.descript1,
          price: parseFloat(contentTypes.kitSoTodBeats).toFixed(0),
          image: todosBeats
        },
        {
          title: this.state.titleOpt2,
          description: this.state.descript2,
          price: parseFloat(contentTypes.kitSoAcoustic).toFixed(0),
          image: acustico
        }
      ]
    };
    let jsonStructureDuo = {
      kitName: 'Kit Dúo',
      packInfo: [
        {
          title: this.state.titleOpt1,
          description: this.state.descript1,
          price: parseFloat(contentTypes.kitDuTodBeats).toFixed(0),
          image: todosBeats
        },
        {
          title: this.state.titleOpt2,
          description: this.state.descript2,
          price: parseFloat(contentTypes.kitDuAcoustic).toFixed(0),
          image: acustico
        }
      ]
    };

    if (option === 'Hombre' || option === 'Mujer') {
      this.setState(
        {
          optionKit: jsonStructureSingle,
          loading: false
        },
        function() {
          console.log(this.state.optionKit);
        }
      );
    } else if (option === 'Dúo') {
      this.setState(
        {
          optionKit: jsonStructureDuo,
          loading: false
        },
        function() {
          console.log(this.state.optionKit);
        }
      );
    }
  };

  render() {
    let settingsSlider = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
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
        <div className="w_100 section_middle_center full_min_h selectKit spaceInBottom_normal">
          <div className="wrappBussiness section_middle_center whiteColor w_78">
            <h2 className="whiteColor font_light font_big section_middle_center marginBottom_biggest w_75 align_center">
              <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Kit Beats
            </h2>
            {this.state.loading ? (
              'cargando'
            ) : (
              <div className="w_100 section_middle_center">
                <Slider {...settingsSlider}>
                  {this.state.optionKit.packInfo.map((value, index) => {
                    return (
                      <div
                        key={index}
                        onClick={this._activateRedirection.bind(this, value.title, value.price)}
                        className="options"
                      >
                        <div className="section_middle_center w_100 backgroundImg">
                          <img src={value.image} alt={value.title} />
                          <div className="price section_middle_right">
                            <span className="font_big">S/. {value.price}</span>
                            <span className="w_100">{this.state.optionKit.kitName}</span>
                          </div>
                        </div>
                        <h2>{value.title}</h2>
                        <p>{value.description}</p>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
