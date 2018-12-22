import React, { Component } from 'react';

import Header from '../share/header';
import VideoBeats from '../home/videoBeats';
import PlayList from '../home/playList';

import pico from '../../images/pico.svg';
import about from '../../images/about.png';
import logoBeats from '../../images/logo-beats.svg';
import beatsMobile from '../../images/beats-movil.png';
import priceImg from '../../images/beats_packs_center.png';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPortada: false
    };
  }
  showPortada = () => {
    this.setState({
      showPortada: true
    });
  };
  render() {
    return (
      <div className="w_100">
        <Header />
        <VideoBeats showImg={this.showPortada} />
        <section
          className={
            'portadaHome section_bottom_center w_100 full_min_h ' +
            (this.state.showPortada ? 'showPortada' : null)
          }
        >
          <h2 className="w_80 w_100_desktop purpleColor spaceLetter font_biggest font_light marginBottom_small section_middle_center">
            VIVE <img src={pico} alt="Pico" className="img_medium img_small_mobile" /> MÚSICA
          </h2>
          <h3 className="w_80 w_60_desktop align_center purpleColor spaceLetter textHome">
            "Cuando el sentimiento que tienes es tan grande que no bastan las palabras utiliza el
            lenguaje de la música"
          </h3>
        </section>
        <section className="about section_middle_center w_100 purpleBackground full_min_h">
          <img src={about} alt="About" className="person" />
          <div className="textAbout section_middle_center w_31_desktop w_80">
            <img src={logoBeats} alt="Logo2" className="img_big img_normal_mobile" />
            <p className="w_100 whiteColor align_center">
              Somos una Startup dedicada a la creación de canciones personalizadas. Tu historia será
              el inicio de este camino, tu historia será la protagonista de la mejor canción que
              vamos a componer juntos. Con Beats, tú lo decides todo, escoge el género musical que
              prefieras y comienza a vivir tu música de una manera diferente.
            </p>
          </div>
        </section>
        <div className="section_middle_center full_min_h w_100 playList">
          <PlayList />
        </div>

        <div className="section_middle_center w_100 purpleBackground full_min_h">
          <div className="w_80 section_middle_justify">
            <section className="w_48_desktop section_middle_center w_100">
              <img src={beatsMobile} alt="Beats Móvil" className="img_big_mobile w_100_desktop" />
            </section>
            <section className="w_100 w_49_desktop section_middle_center">
              <h2 className="whiteColor align_center w_100 section_middle_center font_big">
                <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Beats Móvil
              </h2>
              <p className="whiteColor align_center w_100">
                Creamos tu canción en versión acústica y te la enviamos al móvil en un plazo máximo
                de 24 horas.
              </p>
              <button className="button font_normal">A sólo S/. 89.00</button>
            </section>
          </div>
        </div>

        <div className="prices full_min_h w_100 section_middle_center">
          <div className="w_70_desktop section_middle_justify w_70">
            <section className="w_30_desktop w_100 section_middle_center whiteColor">
              <h3 className="w_100 align_center marginBottom_tiny font_medium font_light">
                Beats Acústicos
              </h3>
              <span className="font_small">(versión acústuca)</span>
              <div className="w_100 align_center marginTop_tiny font_big">S/. 410</div>

              <h2 className="marginVertical_normal font_big_mobile degradado sectionTitle">
                Kit Solista
              </h2>

              <h3 className="w_100 align_center marginBottom_tiny font_medium font_light">
                Todo Beats
              </h3>
              <span className="font_small">(banda completa)</span>
              <div className="w_100 align_center marginTop_tiny font_big">S/. 550</div>
            </section>
            <div className="w_100 section_middle_center w_17_desktop">
              <img src={priceImg} alt="PriceImage" className="w_100 img_medium_mobile" />
            </div>
            <section className="w_30_desktop w_100 section_middle_center whiteColor">
              <h3 className="w_100 align_center marginBottom_tiny font_medium font_light">
                Beats Acústicos
              </h3>
              <span className="font_small">(versión acústuca)</span>
              <div className="w_100 align_center marginTop_tiny font_big">S/. 520</div>

              <h2 className="marginVertical_normal font_big_mobile purpleBackground sectionTitle">
                Kit a Dúo
              </h2>

              <h3 className="w_100 align_center marginBottom_tiny font_medium font_light">
                Todo Beats
              </h3>
              <span className="font_small">(banda completa)</span>
              <div className="w_100 align_center marginTop_tiny font_big">S/. 670</div>
            </section>
          </div>
        </div>

        <div className="preciosCorporativos section_middle_center full_min_h">
          <div className="wrappBussiness section_middle_center">
            <h2 className="whiteColor font_light font_big section_middle_center w_60 marginBottom_biggest">
              <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Beats for
              Bussiness
            </h2>
            <p className="whiteColor font_small w_50_desktop w_80 align_center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, incidunt! Illum
              veritatis quisquam dicta nihil earum, aliquam quo fugiat. Odio, maiores. Distinctio
              officia facere architecto aperiam doloribus deserunt natus nisi!
            </p>
            <div className="section_middle_center w_60">
              <button className="button font_small">
                Consulte nuestros precios&nbsp;corporativos aquí
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
