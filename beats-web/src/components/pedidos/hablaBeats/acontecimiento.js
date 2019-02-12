import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Slider from 'react-slick';

import pico from '../../../images/pico.svg';

export default class Acontecimiento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,

      tipoAcontecimiento: '',
      fecha: '',
      raza: '', 
      resaltar: '', 

      historia: ''
    };

    this._tipoAcontecimientoChange = this._tipoAcontecimientoChange.bind(this);
    this._fechaChange = this._fechaChange.bind(this);
    this._resaltarChange = this._resaltarChange.bind(this);
    
    this._historiaChange = this._historiaChange.bind(this);

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  _tipoAcontecimientoChange(event) {
    this.setState({ tipoAcontecimiento: event.target.value });
  }
  _fechaChange(event) {
    this.setState({ fecha: event.target.value });
  }
  _resaltarChange(event) {
    this.setState({ resaltar: event.target.value });
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
    // let detailPedido = {
    //   Tipo_Acontecimiento: this.state.tipoAcontecimiento,
    //   Fecha: this.state.fecha,
    //   Resaltar: this.state.resaltar
    // }

    let detailPedido = '<p><strong>Tipo de Acontecimiento</strong> ' + this.state.tipoAcontecimiento + '</p> <p><strong>Fecha</strong> ' + this.state.fecha + '</p> <p><strong>Datos a Resaltar</strong> ' + this.state.resaltar + '</p>';

    localStorage.setItem('detailPedido', detailPedido);

    this.setState({
      redirect: true
    })
  }

  render() {
    let settingsSlider = {
      dots: true,
      infinite: false,
      speed: 500,
      arrows: false,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="w_100 section_middle_center full_min_h pedidosBeats spaceInBottom_normal">
      {this._redirectOption()}
        <div className="section_middle_center whiteColor w_78 w_40_desktop">
          <Slider ref={c => (this.slider = c)} {...settingsSlider}>
            <div className="frmBeats w_95 w_40_desktop">
              <h2 className="whiteColor font_light font_big section_middle_center marginBottom_biggest w_100 align_center">
                <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Información del Acontecimiento
              </h2>

              <label htmlFor="nombres" className="font_small font_light">Tipo de Acontecimiento* </label>
              <input type="search" id="nombres" name="nombres" className="inputs" value={this.state._tipoAcontecimiento} onChange={this._tipoAcontecimientoChange} />
              
              <label htmlFor="grupoFavorito" className="font_small font_light marginTop_normal"> Fecha* </label>
              <input type="search" id="grupoFavorito" name="grupoFavorito" className="inputs" value={this.state.fecha} onChange={this._fechaChange} />

              <label htmlFor="relevante" className="font_small font_light marginTop_normal"> Datos que desees Resaltar.* </label>
              <input type="search" id="relevante" name="relevante" className="inputs" value={this.state.resaltar} onChange={this._resaltarChange} />
              <div class="section_middle_right w_100">
                <button className="button font_normal w_100 w_35_desktop" onClick={this.next}>
                  Siguiente
                </button>
              </div>
            </div>
            <div className="frmBeats w_95 w_40_desktop">
              <h2 className="whiteColor font_light font_big section_middle_center marginBottom_biggest w_100 align_center">
                <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Historia
              </h2>
              <textarea name="mensaje" id="mensaje" className="w_100 inputs history" value={this.state.historia} onChange={this._historiaChange} />
              <div class="section_middle_center w_100">
                <button className="button font_normal w_100 w_35_desktop marginRight_small" onClick={this.previous}>
                  Atrás
                </button>
                <div className="w_1"></div>
                <button className="button font_normal w_100 w_35_desktop" onClick={this._sendFrm.bind(this)}>Enviar</button>
              </div>
            </div>
          </Slider>
        </div>
      </div> 
    );
  }
}
