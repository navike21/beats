import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../share/header';
import Footer from '../share/footer';

import pico from '../../images/pico.svg';

import { url } from '../share/settings';

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

      solicitante: {},
      isNew: true
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
    // this._searchUser()
  }

  _redirectOption = () => {
    if (this.state.redirect) {
      return <Redirect push to={'/formulario-pedido/'} />;
    }
  };

  _activateRedirection = () => {
    /**Guardamos la data en el localstorage */
    localStorage.setItem('solicitante', JSON.stringify(this.state.solicitante));

    this.setState({
      redirect: true,
      urlTo: 'frm-beats'
    });
  };

  _namesChange(event) {
    this.setState({ names: event.target.value });
  }
  _emailChange(event) {
    this.setState({ email: event.target.value }, this._searchUser(event.target.value));
  }
  _phoneChange(event) {
    this.setState({ phone: event.target.value });
  }

  _validarEmail = text => {
    let reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (reg.test(text) === false) {
      // console.log('Email is Not Correct');
      return false;
    } else {
      // console.log('Email is Correct');
      return true;
    }
  };

  // _activefrm = () => {
  //   let names = false;
  //   let email = false;
  //   let telefono = false;
  //   let Arrsolicitante = {};

    
  //   this.setState({
  //     loadingfrm: true,
  //     gofrm: false,
  //     msjError: false
  //   });
    
  //   if (this.state.names !== '') {
  //     console.log(this.state.names);
  //     let string = this.state.names.trim();
  //     let countspace = string.split(' ').length - 1;
  //     if (countspace >= 1) {
  //       names = true;
  //     }
  //   }
    
  //   if (this.state.email !== '') {
  //     console.log(this.state.email);
  //     let string = this.state.email.trim();
  //     if (this._validarEmail(string)) {
  //       email = true;
  //     }
  //   }
  //   if (this.state.phone !== '') {
  //     console.log(this.state.phone);
  //     /**Validamos si es número */
  //     if (!isNaN(this.state.phone)) {
  //       /**Validamos si tiene 9 caracteres */
  //       if (this.state.phone.length === 9) {
  //         telefono = true;
  //       }
  //     }
  //   }

  //   if (names && email && telefono) {
  //     // construyendo el array para guardar la data del formulario
  //     Arrsolicitante['nombres'] = this.state.names.trim();
  //     Arrsolicitante['email'] = this.state.email.trim();
  //     Arrsolicitante['telefono'] = this.state.phone.trim();

  //     this.setState(
  //       {
  //         loadingfrm: true,
  //         gofrm: true,
  //         solicitante: Arrsolicitante
  //       },
  //       this._activateRedirection
  //     );
  //   } else {
  //     setTimeout(() => {
  //       this.setState({
  //         loadingfrm: false,
  //         msjError: true
  //       });
  //     }, 700);
  //     console.log('Llene los campos');
  //   }
  // };

  _searchUser = (email) => {
    if(email !== ""){
      fetch( `${url.link}/usuario-beats/?email=${email}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // Authorization: `JWT ${token}`
        },
      })
      .then(result => result.json())
      // .then(result => console.log(result.results[0].name))
      .then(jsonget =>{
        console.log(jsonget.results[0])
        if(jsonget.results[0] !== undefined){
          localStorage.setItem('solicitante', jsonget.results[0].pk);
          this.setState({
            names: jsonget.results[0].name,
            phone: jsonget.results[0].telefono,
            isNew: false
          })
        }
        else{
          this.setState({
            names: '',
            phone: '',
            isNew: true
          })
        }
        
      });
    }
  }

  _sendForm = () =>{
    if(this.state.isNew){
      fetch(`${url.link}/usuario-beats/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // Authorization: `JWT ${token}`
        },
        body: JSON.stringify({
          "name": this.state.names,
          "email": this.state.email,
          "telefono": this.state.phone
        })
      })
      .then(result => result.json())
      .then(result =>  {
        console.log(result);
        localStorage.setItem('solicitante', result.pk);
      })
    }
    this.setState({
      redirect: true
    });
  }

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
              <label htmlFor="email" className="font_small font_light">
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
              <label htmlFor="names" className="font_small font_light marginTop_normal">
                Nombres y Apellidos*
              </label>
              <input
                type="search"
                id="names"
                name="names"
                className="inputs"
                value={this.state.names}
                disabled={!this.state.isNew}
                onChange={this._namesChange}
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
                disabled={!this.state.isNew}
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
                  onClick={this._sendForm}
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
