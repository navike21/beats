import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Slider from 'react-slick';

import Header from '../../share/header';
import Footer from '../../share/footer';

import pico from '../../../images/pico.svg';
import hombre from '../../../images/hombre.jpg';
import mujer from '../../../images/mujer.jpg';
import duo from '../../../images/duo.jpg';

export default class Cantada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      urlTo: '',
      nameUrl: ''
    };
  }

  componentDidMount() {
    let selectCantante = [];
    localStorage.setItem('selectCantante', JSON.stringify(selectCantante));
  }

  _redirectOption = () => {
    if (this.state.redirect) {
      return <Redirect push to={'/genero-musical/' + this.state.urlTo} />;
    }
  };

  _activateRedirection = nameUrl => {
    this.setState(
      {
        redirect: true,
        urlTo: 'select-cantante',
        nameUrl: nameUrl
      },
      this._historyStorage
    );
  };

  _historyStorage = () => {
    let nameUrl = this.state.nameUrl;
    let selectCantante = [nameUrl];
    localStorage.setItem('selectCantante', JSON.stringify(selectCantante));
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
        <div className="w_100 section_middle_center full_min_h selectCantante spaceInBottom_normal">
          <div className="wrappBussiness section_middle_center whiteColor w_78">
            <h2 className="whiteColor font_light font_big section_middle_center marginBottom_biggest w_75 align_center">
              <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Cantada por
            </h2>
            <div className="w_100 section_middle_center">
              <Slider {...settingsSlider}>
                <div onClick={this._activateRedirection.bind(this, 'Hombre')} className="options">
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={hombre} alt="Hombre" />
                  </div>
                  <h2>Hombre</h2>
                </div>
                <div onClick={this._activateRedirection.bind(this, 'Mujer')} className="options">
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={mujer} alt="Mujer" />
                  </div>
                  <h2>Mujer</h2>
                </div>
                <div onClick={this._activateRedirection.bind(this, 'Dúo')} className="options">
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={duo} alt="Dúo" />
                  </div>
                  <h2>Dúo</h2>
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
