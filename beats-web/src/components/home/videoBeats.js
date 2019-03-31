import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class VideoBeats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlYoutube: 'https://youtu.be/FnHc_1S4ooM',
      hideVideo: true,
      url: null,
      pip: false,
      playing: false,
      volume: 0.5, //0.5
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false,
      showimgPortada: this.props.showImg
    };
  }
  componentDidMount() {
    // // console.log(this.state.showimgPortada);
    // // this.showImagePortada();
    // this.setState({
    //   url: this.state.urlYoutube
    // });
  }

  playPause = () => {
    this.setState({ playing: !this.state.playing });
  };
  stop = () => {
    this.setState({ hideVideo: !this.state.hideVideo }, function() {
      setTimeout(() => {
        if(this.state.hideVideo){
          this.setState({ url: null, playing: false, volume: 0 });
        }
        else{
          this.setState({ url: this.state.urlYoutube, playing: true, volume: 0.5 });
        }
      }, 500);
    });
  };
  onEnded = () => {
    this.stop();
  };

  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  mute = () => {
    this.setState({ volume: 0 });
  };

  onDuration = duration => {
    // console.log('onDuration', duration * (1 - this.state.played));
    this.setState({ duration });
  };

  onProgress = state => {
    let playedSeconds = parseInt(state.playedSeconds);
    // console.log('onProgress', playedSeconds);
    if (playedSeconds === 39) {
      this.stop();
    }
  };
  render() {
    return (
      <div>
        <div
          className={
            'videoHome section_middle_center full_min_h w_100 ' +
            (this.state.hideVideo ? 'outVideo' : 'fadeIn fixedVideo')
          }
        >
          <ReactPlayer
            url={this.state.url}
            width="100vw"
            height="100vh"
            playing={this.state.playing}
            volume={this.state.volume}
            className={'videoHomeYt ' + (this.state.playing ? null : 'blurVideo')}
            config={{
              youtube: {
                playerVars: {
                  rel: 0,
                  controls: 0,
                  loop: 1,
                  modestbranding: 1,
                  showinfo: 0,
                  enablejsapi: 1,
                  widgetid: 1,
                  origin: 'localhost:3000'
                }
              }
            }}
            // onEnded={this.onEnded}
            onProgress={this.onProgress}
            onDuration={this.onDuration}
          />
          <div className="controlVideo w_80 w_50_desktop section_middle_center">
            <button
              className={
                'controlVideoHome section_middle_center marginRight_small ' +
                (this.state.playing ? null : 'pausedControl')
              }
              onClick={this.playPause}
            >
              {this.state.playing ? <i className="fas fa-pause" /> : <i className="fas fa-play" />}
            </button>
            <button className={'controlVideoHome section_middle_center'} onClick={this.stop}>
              <i className="fas fa-stop" />
            </button>
          </div>
        </div>
        <button className="iconVideo section_middle_center" onClick={this.stop}>
          <i className="fas fa-play"></i>
        </button>
      </div>
    );
  }
}
