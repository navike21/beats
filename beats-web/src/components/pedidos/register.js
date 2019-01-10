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

      gofrm: false,
      names: '',
      email: '',
      phone: '',

      msjError: false,
      loadingfrm: false,

      solicitante: {}
      // namesStatus: false,
      // emailStatus: false,
      // phoneStatus: false
    };
    this._namesChange = this._namesChange.bind(this);
    this._emailChange = this._emailChange.bind(this);
    this._phoneChange = this._phoneChange.bind(this);
  }

  componentDidMount() {
    let solicitante = [];
    localStorage.setItem('solicitante', JSON.stringify(solicitante));
  }

  _redirectOption = () => {
    if (this.state.redirect) {
      return <Redirect push to={'/register/' + this.state.urlTo} />;
    }
  };

  _activateRedirection = () => {
    console.log(this.state.solicitante);
    localStorage.setItem('solicitante', JSON.stringify(this.state.solicitante));
    this.setState({
      redirect: false,
      urlTo: 'frm-beats'
    });
  };

  _historyStorage = () => {
    localStorage.setItem('solicitante', JSON.stringify(this.state.solicitante));
  };

  _namesChange(event) {
    this.setState({ names: event.target.value }, () => {
      // console.log(this.state.names);
    });
  }
  _emailChange(event) {
    this.setState({ email: event.target.value }, () => {
      // console.log(this.state.email);
    });
  }
  _phoneChange(event) {
    this.setState({ phone: event.target.value }, () => {
      // console.log(this.state.phone);
    });
  }

  _validarEmail = text => {
    // console.log(text);
    let reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (reg.test(text) === false) {
      // console.log('Email is Not Correct');
      return false;
    } else {
      // console.log('Email is Correct');
      return true;
    }
  };

  _activefrm = () => {
    let names = false;
    let email = false;
    let telefono = false;
    let Arrsolicitante = {};

    this.setState({
      loadingfrm: true,
      gofrm: false,
      msjError: false
    });

    if (this.state.names !== '') {
      let string = this.state.names.trim();
      let countspace = string.split(' ').length - 1;
      if (countspace >= 1) {
        names = true;
      }
    }

    if (this.state.email !== '') {
      let string = this.state.email.trim();
      if (this._validarEmail(string)) {
        email = true;
      }
    }
    if (this.state.phone !== '') {
      /**Validamos si es número */
      if (!isNaN(this.state.phone)) {
        /**Validamos si tiene 9 caracteres */
        if (this.state.phone.length === 9) {
          telefono = true;
        }
      }
    }

    if (names && email && telefono) {
      // construyendo el array
      Arrsolicitante['nombres'] = this.state.names.trim();
      Arrsolicitante['email'] = this.state.email.trim();
      Arrsolicitante['telefono'] = this.state.phone.trim();

      this.setState(
        {
          loadingfrm: true,
          gofrm: true,
          solicitante: Arrsolicitante
        },
        this._activateRedirection
        // () => {
        //   console.log('formulario lleno');
        //   console.log(this.state.solicitante);
        // }
      );
    } else {
      setTimeout(() => {
        this.setState({
          loadingfrm: false,
          msjError: true
        });
      }, 700);
      console.log('Llene los campos');
    }
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
              <input
                type="search"
                id="names"
                name="names"
                className="inputs"
                value={this.state.names}
                onChange={this._namesChange}
              />
              <label htmlFor="email" className="font_small font_light marginTop_normal">
                Email.*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="inputs"
                value={this.state.email}
                onChange={this._emailChange}
              />
              <label htmlFor="telefono" className="font_small font_light marginTop_normal">
                Teléfono.*
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                className="inputs"
                maxLength="9"
                value={this.state.phone}
                onChange={this._phoneChange}
              />
              <div className="section_middle_justify w_100">
                <div>
                  {this.state.msjError ? (
                    <p className="font_small fadeIn">*Ingrese los datos correctos</p>
                  ) : (
                    ''
                  )}
                </div>
                <button
                  className="button font_normal w_100 w_40_desktop"
                  onClick={this._activefrm}
                  disabled={this.state.loadingfrm ? 'disabled' : ''}
                >
                  {this.state.loadingfrm ? <i className="fas fa-circle-notch loader" /> : 'Enviar'}
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
