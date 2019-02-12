import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../share/header';
import Footer from '../share/footer';
import { contentTypes } from '../share/settings';

import pico from '../../images/pico.svg';
import MetaTags from 'react-meta-tags';

export default class Beatsmovil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,

      nombres: '',
      email: '',
      telefono: '',
      historia: '',
      price: contentTypes.movilBeats,
      titleWeb: 'Beats música - Beats Móvil.',
      slogan: 'Canción personalizada en 24 horas.',
      descriptionWeb: 'Creamos tu canción en versión acústica y te la enviamos al móvil en un plazo máximo de 24 horas.',
      beatsIcon: 'https://beats-logo.png',
      beatsPortada: 'https://beatsmusica.com/static/media/portada.a4759fd8.png',
      urlWeb: 'https://beatsmusica.com/beatsmovil'
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
        <MetaTags>
          <title>Beats música - Canciones personalizadas</title>
          <meta name="description" content={this.state.descriptionWeb} />
          <meta property="author" content={this.state.titleWeb} />
          <meta property="copyright" content={this.state.titleWeb} />

          <meta name="handheldFriendly" content="true" />
          <meta name="subject" content={this.state.titleWeb + ' - ' + this.state.slogan} />
          <meta name="language" content="Español" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="classification" content="business" />
          <meta name="url" content={this.state.urlWeb} />
          <meta name="identifier-URL" content={this.state.urlWeb} />
          <meta name="coverage" content="Worldwide" />
          <meta name="distribution" content="Global" />
          <meta name="rating" content="General" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={this.state.urlWeb} />
          <meta property="og:title" content={this.state.titleWeb} />
          <meta property="og:description" content={this.state.descriptionWeb} />
          <meta property="og:locale" content="es_PE" />
          <meta property="og:image" content={this.state.beatsPortada} />
          <meta property="og:image:url" content={this.state.beatsPortada} />
          <meta property="og:image:alt" content={this.state.titleWeb} />
          <meta property="og:site_name" content={this.state.titleWeb} />
          <meta property="fb:app_id" content="341860746216953" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@beats_musica" />
          <meta name="twitter:creator" content="@beats_musica" />
          <meta name="twitter:title" content={this.state.titleWeb} />
          <meta name="twitter:description" content={this.state.descriptionWeb} />
          <meta name="twitter:image" content={this.state.beatsPortada} />

          <meta property="og:title" content={this.state.titleWeb} />
          <meta property="og:image" content="https://beatsmusica.com/static/media/portada.a4759fd8.png" />
        </MetaTags>
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
