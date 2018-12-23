import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo.svg';

export default class Header extends Component {
  render() {
    return (
      <header className="w_100 section_middle_justify spaceInAll_smaller">
        <Link to="/" className="img_small_mobile img_medium marginLeft_small logoBeats">
          <img src={Logo} alt="Logo" className="w_100" />
        </Link>
        <button className="menu marginRight_small">
          <i className="fas fa-bars" />
        </button>
      </header>
    );
  }
}
