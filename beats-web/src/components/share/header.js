import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo.svg';
import Menu from './menu';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
  }

  _showMenu = () =>{
    this.setState({
      menu: !this.state.menu
    })
  }

  _hideMenu = () =>{
    this.setState({
      menu: false
    })
  }

  render() {
    return (
      <header className="w_100 section_middle_justify">
        <Link
          to="/"
          className="img_small_mobile img_medium marginLeft_small marginTop_small logoBeats"
        >
          <img src={Logo} alt="Logo" className="w_100" />
        </Link>
        <button className="menu marginRight_small" onClick={this._showMenu.bind(this)}>
          <i className="fas fa-bars" />
        </button>
        {
          this.state.menu ? <Menu funcionHide={this._hideMenu.bind()} /> : ''
        }
      </header>
    );
  }
}
