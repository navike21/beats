import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Slider from 'react-slick';

import Header from '../../share/header';
import Footer from '../../share/footer';

import pico from '../../../images/pico.svg';
import rock from '../../../images/rock.jpg';
import balada from '../../../images/balada.jpg';
import electric from '../../../images/electric.jpg';
import latinoamericana from '../../../images/latinoamericana.jpg';
import urban from '../../../images/urban.jpg';

export default class GeneroMusical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      urlTo: '',
      nameUrl: ''
    };
  }

  componentDidMount() {
    let generoMusica = [];
    let selectCantante = [];
    localStorage.setItem('generoMusica', JSON.stringify(generoMusica));
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
    let generoMusica = [nameUrl];
    localStorage.setItem('generoMusica', JSON.stringify(generoMusica));
  };
  render() {
    let settingsSlider = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
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
        <div className="w_100 section_middle_center full_min_h generoMusical spaceInBottom_normal">
          <div className="wrappBussiness section_middle_center whiteColor w_78">
            <h2 className="whiteColor font_light font_big section_middle_center marginBottom_biggest w_75 align_center">
              <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Género Musical
            </h2>
            <div className="w_100 section_middle_center">
              <Slider {...settingsSlider}>
                <div
                  onClick={this._activateRedirection.bind(this, 'Rock / Pop')}
                  className="options"
                >
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={rock} alt="Rock" />
                  </div>
                  <h2>Rock / Pop</h2>
                </div>
                <div onClick={this._activateRedirection.bind(this, 'Balada')} className="options">
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={balada} alt="Balada" />
                  </div>
                  <h2>Balada</h2>
                </div>
                <div
                  onClick={this._activateRedirection.bind(this, 'Electrónico')}
                  className="options"
                >
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={electric} alt="Electrónico" />
                  </div>
                  <h2>Electrónico</h2>
                </div>
                <div
                  onClick={this._activateRedirection.bind(this, 'Latinoamericana')}
                  className="options"
                >
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={latinoamericana} alt="Latinoamericana" />
                  </div>
                  <h2>Latinoamericana</h2>
                </div>
                <div
                  onClick={this._activateRedirection.bind(this, 'Latin / Urban')}
                  className="options"
                >
                  <div className="section_middle_center w_100 backgroundImg">
                    <img src={urban} alt="Urban" />
                  </div>
                  <h2>Latin / Urban</h2>
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
