import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../share/header';
import Footer from '../share/footer';

import pico from '../../images/pico.svg';

export default class Cantada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      urlTo: '',
      nameUrl: '',
      price: 0,
      loading: true
    };
  }

  componentDidMount() {
    // let selectKit = [];
    // localStorage.setItem('selectKit', JSON.stringify(selectKit));
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

  render() {
    return (
      <div className="w_100">
        {this._redirectOption()}
        <Header />
        <div className="w_100 section_middle_center full_min_h selectKit spaceInBottom_normal">
          <div className="wrappBussiness section_middle_center whiteColor w_80">
            <h2 className="whiteColor font_light font_big section_middle_center marginBottom_biggest w_75 align_center">
              <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Queremos
              Conocerte
            </h2>
            <div className="frmBeats w_95 w_40_desktop">
              <label htmlFor="names" className="font_small font_light">
                Nombres y Apellidos*
              </label>
              <input type="search" id="names" name="names" className="inputs" />
              <label htmlFor="email" className="font_small font_light marginTop_normal">
                Email.*
              </label>
              <input type="email" id="email" name="email" className="inputs" />
              <label htmlFor="telefono" className="font_small font_light marginTop_normal">
                Teléfono.*
              </label>
              <input type="tel" id="telefono" name="telefono" className="inputs" maxLength="9" />
              <div className="section_middle_right w_100">
                <button className="button font_normal w_100 w_35_desktop">Enviar</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
