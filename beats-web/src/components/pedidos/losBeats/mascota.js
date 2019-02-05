import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Slider from 'react-slick';

import pico from '../../../images/pico.svg';

export default class Mascota extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,

      nombreMascota: '',
      edad: '',
      raza: '', 
      resaltar: '', 

      historia: ''
    };

    this._nombreMascotaChange = this._nombreMascotaChange.bind(this);
    this._edadChange = this._edadChange.bind(this);
    this._razaChange = this._razaChange.bind(this);
    this._resaltarChange = this._resaltarChange.bind(this);
    
    this._historiaChange = this._historiaChange.bind(this);
  }

  _nombreMascotaChange(event) {
    this.setState({ nombreMascota: event.target.value });
  }
  _edadChange(event) {
    this.setState({ edad: event.target.value });
  }
  _razaChange(event) {
    this.setState({ raza: event.target.value });
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
    let detailPedido = {
      Nombre_mascota: this.state.nombreMascota,
      Edad_mascota: this.state.edad,
      Raza_mascota: this.state.raza,
      Resaltar: this.state.resaltar
    }
    localStorage.setItem('detailPedido', JSON.stringify(detailPedido));

    this.setState({
      redirect: true
    });
  }

  render() {
    let settingsSlider = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 910,
          settings: {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
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
      <div className="w_100 section_middle_center full_min_h pedidosBeats spaceInBottom_normal">
      {this._redirectOption()}
        <div className="section_middle_center whiteColor w_78 w_40_desktop">
          <Slider {...settingsSlider}>
            <div className="frmBeats w_95 w_40_desktop">
              <h2 className="whiteColor font_light font_big section_middle_center marginBottom_biggest w_100 align_center">
                <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Información de tu mascota
              </h2>

              <label htmlFor="nombres" className="font_small font_light">Nombre de tu mascota* </label>
              <input type="search" id="nombres" name="nombres" className="inputs" value={this.state._nombreMascota} onChange={this._nombreMascotaChange} />
              
              <label htmlFor="grupoFavorito" className="font_small font_light marginTop_normal"> Edad* </label>
              <input type="tel" id="grupoFavorito" name="grupoFavorito" className="inputs" maxLength="3" value={this.state.edad} onChange={this._edadChange} />

              <label htmlFor="relevante" className="font_small font_light marginTop_normal"> Tipo / Raza.* </label>
              <input type="search" id="relevante" name="relevante" className="inputs" value={this.state.raza} onChange={this._razaChange} />

              <label htmlFor="relevante" className="font_small font_light marginTop_normal"> Datos que desees Resaltar.* </label>
              <input type="search" id="relevante" name="relevante" className="inputs" value={this.state.resaltar} onChange={this._resaltarChange} />

            </div>
            <div className="frmBeats w_95 w_40_desktop">
              <h2 className="whiteColor font_light font_big section_middle_center marginBottom_biggest w_100 align_center">
                <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Historia
              </h2>
              <textarea name="mensaje" id="mensaje" className="w_100 inputs history" value={this.state.historia} onChange={this._historiaChange} />
              <div className="section_middle_right w_100">
                <button className="button font_normal w_100 w_35_desktop" onClick={this._sendFrm.bind(this)}>Enviar</button>
              </div>
            </div>
          </Slider>
        </div>
      </div> 
    );
  }
}
