import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../share/header';
import Footer from '../share/footer';
import { contentTypes } from '../share/settings';

import pico from '../../images/pico.svg';

export default class Beatsmovil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,

      nombres: '',
      email: '',
      telefono: '',
      historia: '',
      price: contentTypes.movilBeats
    };

    this._nombresChange = this._nombresChange.bind(this);
    this._emailChange = this._emailChange.bind(this);
    this._telefonoChange = this._telefonoChange.bind(this);
    
    this._historiaChange = this._historiaChange.bind(this);
  }

  _nombresChange(event) {
    this.setState({ nombres: event.target.value });
  }
  _emailChange(event) {
    this.setState({ email: event.target.value });
  }
  _telefonoChange(event) {
    this.setState({ telefono: event.target.value });
  }
  _historiaChange(event) {
    this.setState({ historia: event.target.value });
  }
  

  _redirectOption = () => {
    if (this.state.redirect) {
      return <Redirect push to={'/pago'} />;
    }
  };

  _sendFrm = () =>{
    localStorage.setItem('historia', this.state.historia);
    let detailPedido = {
      nombres: this.state.nombres,
      email: this.state.email,
      telefono: this.state.telefono,
      historia: this.state.historia
    }
    localStorage.setItem('detailPedido', JSON.stringify(detailPedido));
    localStorage.setItem('selectKit', 'Beats Móvil,'+this.state.price);
    localStorage.setItem('generoMusica', 'Canciones personalizadas');

    this.setState({
      redirect: true
    })
  }

  componentDidMount = () =>{
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="w_100">
        <Header />
        {this._redirectOption()}
        <div className="w_100 section_middle_center full_min_h beatsMovil spaceInBottom_normal">
          <div className="wrappBussiness section_middle_center whiteColor w_80">
            <h2 className="whiteColor font_light font_big section_middle_center marginBottom_biggest w_75 align_center">
              <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Beats Móvil
            </h2>
            <div className="frmBeats w_95 w_40_desktop">
              <label htmlFor="nameCompany" className="font_small font_light">
                Nombres y Apellidos.*
              </label>
              <input type="search" id="nameCompany" name="nameCompany" className="inputs" value={this.state.nombres} onChange={this._nombresChange} />
              <label htmlFor="email" className="font_small font_light marginTop_normal">
                Email.*
              </label>
              <input type="email" id="email" name="email" className="inputs" value={this.state.email} onChange={this._emailChange} />
              <label htmlFor="telefono" className="font_small font_light marginTop_normal">
                Teléfono.*
              </label>
              <input type="tel" id="telefono" name="telefono" className="inputs" maxLength="9" value={this.state.telefono} onChange={this._telefonoChange} />
              <label htmlFor="telefono" className="font_small font_light marginTop_normal">
                Historia.*
              </label>
              <textarea name="mensaje" id="mensaje" className="w_100 inputs" value={this.state.historia} onChange={this._historiaChange} />
              <div className="section_middle_right w_100">
                <button className="button font_normal w_100 w_35_desktop" onClick={this._sendFrm.bind(this)}>Enviar</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
