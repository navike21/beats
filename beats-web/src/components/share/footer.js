import React, { Component } from 'react';
import Logo from '../../images/logo.svg';

export default class Footer extends Component {
  render() {
    return (
      <footer className="section_middle_center w_100 font_tiny whiteColor font_light darkBlueColor spaceInBottom_medium">
        <aside className="w_100 section_middle_center graybackground spaceInVertical_biggest marginBottom_small">
          <a
            className="purpleColor2 font_biggest marginHorizontal_smaller"
            href="https://www.facebook.com/beatsmusica"
            target="blank"
          >
            <i className="fab fa-facebook-square" />
          </a>
          <a
            className="purpleColor2 font_biggest marginHorizontal_smaller"
            href="https://www.instagram.com/beats_musica/"
            target="blank"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            className="purpleColor2 font_biggest marginHorizontal_smaller"
            href="http://www.twitter.com/beats_musica"
            target="blank"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            className="purpleColor2 font_biggest marginHorizontal_smaller"
            href="https://www.youtube.com/channel/UCfcnNZ02oVic9zONXVMaAlQ/videos?view_as=subscriber"
            target="blank"
          >
            <i className="fab fa-youtube" />
          </a>
          <a
            className="purpleColor2 font_biggest marginHorizontal_smaller"
            href="https://soundcloud.com/beatsmusica"
            target="blank"
          >
            <i class="fab fa-soundcloud"></i>
          </a>
        </aside>
        <div className="w_100 section_middle_center marginVertical_medium">
          <img src={Logo} alt="LogoBeats" className="img_small_mobile img_medium" />
        </div>
        <p className="w_80 align_center">
          Todas las canciones son propiedad intelectual de beats. Los derechos de uso de la canción
          se comparten entre la empresa beats y el cliente.
        </p>
      </footer>
    );
  }
}
