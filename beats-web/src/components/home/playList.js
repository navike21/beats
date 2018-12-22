import React, { Component } from 'react';
import Iframe from 'react-iframe';

import pico from '../../images/pico.svg';
// import Slider from 'react-slick';
// import ReactPlayer from 'react-player';

export default class playList extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    // const settings = {
    //   dots: true,
    //   infinite: false,
    //   speed: 300,
    //   slidesToShow: 4,
    //   arrows: false,
    //   slidesToScroll: 4
    // };
    return (
      <div>
        <h2 className="w_100 align_center marginBottom_big font_big whiteColor font_light section_middle_center">
          <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Escúchalo
        </h2>
        <Iframe
          url="https://w.soundcloud.com/player/?url=https://soundcloud.com/beatsmusica&auto_play=false&buying=true&liking=true&download=true&sharing=true&show_artwork=true&show_comments=true&show_playcount=false&show_user=true&hide_related=false&visual=false&start_track=0&callback=true"
          className="playListSoundCloud"
          // allowFullScreen
        />
        {/* <iframe
          className="playListSoundCloud"
          src="https://w.soundcloud.com/player/?url=https://soundcloud.com/beatsmusica&auto_play=false&buying=true&liking=true&download=true&sharing=true&show_artwork=true&show_comments=true&show_playcount=false&show_user=true&hide_related=false&visual=false&start_track=0&callback=true"
          frameborder="no"
        /> */}
      </div>
    );
  }
}
