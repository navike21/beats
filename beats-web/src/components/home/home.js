import React, { Component } from 'react';

import Header from '../share/header';
import VideoBeats from '../home/videoBeats';
import PlayList from '../home/playList';

import pico from '../../images/pico.svg';
import about from '../../images/about.png';
import logoBeats from '../../images/logo-beats.svg';

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
      </div>
    );
  }
}
