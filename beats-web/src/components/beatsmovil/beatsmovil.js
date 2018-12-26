import React, { Component } from 'react';
import Header from '../share/header';
import Footer from '../share/footer';

import pico from '../../images/pico.svg';

export default class Beatsmovil extends Component {
  render() {
    return (
      <div className="w_100">
        <Header />
        <div className="w_100 section_middle_center full_min_h beatsMovil spaceInBottom_normal">
          <div className="wrappBussiness section_middle_center whiteColor w_80">
            <h2 className="whiteColor font_light font_big section_middle_center marginBottom_biggest w_75 align_center">
              <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Beats Móvil
            </h2>
            <div className="frmBeats w_95 w_40_desktop">
              <label htmlFor="nameCompany" className="font_small font_light">
                Nombres y Apellidos.*
              </label>
              <input type="search" id="nameCompany" name="nameCompany" className="inputs" />
              <label htmlFor="email" className="font_small font_light marginTop_normal">
                Email.*
              </label>
              <input type="email" id="email" name="email" className="inputs" />
              <label htmlFor="telefono" className="font_small font_light marginTop_normal">
                Teléfono.*
              </label>
              <input type="tel" id="telefono" name="telefono" className="inputs" maxLength="9" />
              <label htmlFor="telefono" className="font_small font_light marginTop_normal">
                Historia.*
              </label>
              <textarea name="mensaje" id="mensaje" className="w_100 inputs" />
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
