import React, { Component } from 'react';

import Header from '../share/header';
import VideoBeats from '../home/videoBeats';

export default class Home extends Component {
  render() {
    return (
      <div className="w_100">
        <Header />
        <VideoBeats />
      </div>
    );
  }
}
