import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../share/header';
import Footer from '../share/footer';

import pico from '../../images/pico.svg';

import { url } from '../share/settings';

export default class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      empresa: '',
      rubro: '',
      web: '',
      email: '',
      telefono: ''
    };

    this._empresaChange = this._empresaChange.bind(this);
    this._rubroChange = this._rubroChange.bind(this);
    this._webChange = this._webChange.bind(this);
    this._emailChange = this._emailChange.bind(this);
    this._telefonoChange = this._telefonoChange.bind(this);
  }

  _empresaChange(event) {
    this.setState({ empresa: event.target.value });
  }
  _rubroChange(event) {
    this.setState({ rubro: event.target.value });
  }
  _webChange(event) {
    this.setState({ web: event.target.value });
  }
  _emailChange(event) {
    this.setState({ email: event.target.value });
  }
  _telefonoChange(event) {
    this.setState({ telefono: event.target.value });
  }

  _redirectOption = () => {
    if (this.state.redirect) {
      return <Redirect push to={'/confirmapago'} />;
    }
  }

  componentDidMount = () =>{
    window.scrollTo(0, 0);
  }

  _sendData = () =>{
    localStorage.setItem('selectKit', 'Beats empresas,0');
    fetch(`${url.link}/beats-corporativo/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Authorization: `JWT ${token}`
      },
      body: JSON.stringify({
        'empresa': this.state.empresa,
        'rubro': this.state.rubro,
        'web': this.state.web,
        'email': this.state.email,
        'telefono': this.state.telefono
      })
    })
    .then(result => result.json())
    .then(results => this.setState({redirect: true}))
  }

  render() {
    return (
      <div className="w_100">
        <Header />
        {this._redirectOption()}
        <div className="w_100 section_middle_center full_min_h preciosCorporativos spaceInBottom_normal">
          <div className="wrappBussiness section_middle_center whiteColor w_80">
            <h2 className="whiteColor font_light font_big section_middle_center marginBottom_biggest w_75 align_center">
              <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Beats para Empresas
            </h2>
            <div className="frmBeats w_95 w_40_desktop">
              <label htmlFor="nameCompany" className="font_small font_light">
                Nombre de la empresa.*
              </label>
              <input type="search" id="nameCompany" name="nameCompany" className="inputs" value={this.state.empresa} onChange={this._empresaChange} />
              <label htmlFor="rubro" className="font_small font_light marginTop_normal">
                Rubro.*
              </label>
              <input type="search" id="rubro" name="rubro" className="inputs" value={this.state.rubro} onChange={this._rubroChange} />
              <label htmlFor="web" className="font_small font_light marginTop_normal">
                Sitio web.*
              </label>
              <input type="url" id="web" name="web" className="inputs" value={this.state.web} onChange={this._webChange} />
              <label htmlFor="email" className="font_small font_light marginTop_normal">
                Email.*
              </label>
              <input type="email" id="email" name="email" className="inputs" value={this.state.email} onChange={this._emailChange} />
              <label htmlFor="telefono" className="font_small font_light marginTop_normal">
                Teléfono.*
              </label>
              <input type="tel" id="telefono" name="telefono" className="inputs" maxLength="9" value={this.state.telefono} onChange={this._telefonoChange} />
              <div className="section_middle_right w_100">
                <button className="button font_normal w_100 w_35_desktop" onClick={this._sendData.bind(this)}>Enviar</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
