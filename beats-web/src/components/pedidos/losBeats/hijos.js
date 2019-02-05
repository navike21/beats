import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Slider from 'react-slick';

import pico from '../../../images/pico.svg';

export default class Hijos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,

      nombresEl: '',
      edadEl: '',
      nacimientoEl: '',
      profesionEl: '',
      grupoFavoritoEl: '',
      resaltarEl: '', 
      
      nombresElla: '',
      edadElla: '',
      nacimientoElla: '',
      profesionElla: '',
      grupoFavoritoElla: '',
      resaltarElla: '',

      historia: ''
    };

    this._nombresElChange = this._nombresElChange.bind(this);
    this._edadElChange = this._edadElChange.bind(this);
    this._nacimientoElChange = this._nacimientoElChange.bind(this);
    this._profesionElChange = this._profesionElChange.bind(this);
    this._grupoFavoritoElChange = this._grupoFavoritoElChange.bind(this);
    this._resaltarElChange = this._resaltarElChange.bind(this);

    this._nombresEllaChange = this._nombresEllaChange.bind(this);
    this._edadEllaChange = this._edadEllaChange.bind(this);
    this._nacimientoEllaChange = this._nacimientoEllaChange.bind(this);
    this._profesionEllaChange = this._profesionEllaChange.bind(this);
    this._grupoFavoritoEllaChange = this._grupoFavoritoEllaChange.bind(this);
    this._resaltarEllaChange = this._resaltarEllaChange.bind(this);
    
    this._historiaChange = this._historiaChange.bind(this);
  }

  _nombresElChange(event) {
    this.setState({ nombresEl: event.target.value });
  }
  _edadElChange(event) {
    this.setState({ edadEl: event.target.value });
  }
  _nacimientoElChange(event) {
    this.setState({ nacimientoEl: event.target.value });
  }
  _profesionElChange(event) {
    this.setState({ profesionEl: event.target.value });
  }
  _grupoFavoritoElChange(event) {
    this.setState({ grupoFavoritoEl: event.target.value });
  }
  _resaltarElChange(event) {
    this.setState({ resaltarEl: event.target.value });
  }

  _nombresEllaChange(event) {
    this.setState({ nombresElla: event.target.value });
  }
  _edadEllaChange(event) {
    this.setState({ edadElla: event.target.value });
  }
  _nacimientoEllaChange(event) {
    this.setState({ nacimientoElla: event.target.value });
  }
  _profesionEllaChange(event) {
    this.setState({ profesionElla: event.target.value });
  }
  _grupoFavoritoEllaChange(event) {
    this.setState({ grupoFavoritoElla: event.target.value });
  }
  _resaltarEllaChange(event) {
    this.setState({ resaltarElla: event.target.value });
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
      Hijos_nombres: this.state.nombresEl,
      Hijos_edad: this.state.edadEl,
      Hijos_nacimiento: this.state.nacimientoEl,
      Hijos_profesion: this.state.profesionEl,
      Hijos_grupo_favorito: this.state.grupoFavoritoEl,
      Hijos_resaltar: this.state.resaltarEl,
      
      Hijas_nombres: this.state.nombresElla,
      Hijas_edad: this.state.edadElla,
      Hijas_nacimiento: this.state.nacimientoElla,
      Hijas_profesion: this.state.profesionElla,
      Hijas_grupo_favorito: this.state.grupoFavoritoElla,
      Hijas_resaltar: this.state.resaltarElla,

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
                <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Información del Hijo(s)
              </h2>

              <label htmlFor="nombres" className="font_small font_light"> Nombres* </label>
              <input type="search" id="nombres" name="nombres" className="inputs" value={this.state.nombresEl} onChange={this._nombresElChange} />

              <label htmlFor="edad" className="font_small font_light marginTop_normal"> Edad* </label>
              <input type="search" id="edad" name="edad" className="inputs" value={this.state.edadEl} onChange={this._edadElChange} />

              <label htmlFor="nacimiento" className="font_small font_light marginTop_normal"> Lugar de Nacimiento.* </label>
              <input type="search" id="nacimiento" name="nacimiento" className="inputs" value={this.state.nacimientoEl} onChange={this._nacimientoElChange} />
              
              <label htmlFor="profesion" className="font_small font_light marginTop_normal"> Profesion.* </label>
              <input type="search" id="profesion" name="profesion" className="inputs" value={this.state.profesionEl} onChange={this._profesionElChange} />
              
              <label htmlFor="grupoFavorito" className="font_small font_light marginTop_normal"> Grupo / Cantante favorito.* </label>
              <input type="search" id="grupoFavorito" name="grupoFavorito" className="inputs" value={this.state.grupoFavoritoEl} onChange={this._grupoFavoritoElChange} />

              <label htmlFor="relevante" className="font_small font_light marginTop_normal"> Datos que desees Resaltar.* </label>
              <input type="search" id="relevante" name="relevante" className="inputs" value={this.state.resaltarEl} onChange={this._resaltarElChange} />

            </div>
            <div className="frmBeats w_95 w_40_desktop">
              <h2 className="whiteColor font_light font_big section_middle_center marginBottom_biggest w_100 align_center">
                <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Información de las Hija(s)
              </h2>

              <label htmlFor="nombres" className="font_small font_light"> Nombres* </label>
              <input type="search" id="nombres" name="nombres" className="inputs" value={this.state.nombresElla} onChange={this._nombresEllaChange} />

              <label htmlFor="edad" className="font_small font_light marginTop_normal"> Edad* </label>
              <input type="search" id="edad" name="edad" className="inputs" maxLength="3" value={this.state.edadElla} onChange={this._edadEllaChange} />

              <label htmlFor="nacimiento" className="font_small font_light marginTop_normal"> Lugar de Nacimiento.* </label>
              <input type="search" id="nacimiento" name="nacimiento" className="inputs" value={this.state.nacimientoElla} onChange={this._nacimientoEllaChange} />
              
              <label htmlFor="profesion" className="font_small font_light marginTop_normal"> Profesion.* </label>
              <input type="search" id="profesion" name="profesion" className="inputs" value={this.state.profesionElla} onChange={this._profesionEllaChange} />
              
              <label htmlFor="grupoFavorito" className="font_small font_light marginTop_normal"> Grupo / Cantante favorito.* </label>
              <input type="search" id="grupoFavorito" name="grupoFavorito" className="inputs" value={this.state.grupoFavoritoElla} onChange={this._grupoFavoritoEllaChange} />

              <label htmlFor="relevante" className="font_small font_light marginTop_normal"> Datos que desees Resaltar.* </label>
              <input type="search" id="relevante" name="relevante" className="inputs" value={this.state.resaltarElla} onChange={this._resaltarEllaChange} />
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
