import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="menuOptions section_middle_center">
        <Link to="/" className="w_100 align_center">Inicio</Link>
        <a href="/#nosotros" className="w_100 align_center" onClick={this.props.funcionHide}>Nosotros</a>
        <a href="/#escuchalo" className="w_100 align_center" onClick={this.props.funcionHide}>Escúchalo</a>
        <Link to="/beatsmovil" className="w_100 align_center">Beats Móvil</Link>
        <a href="/#precios" className="w_100 align_center" onClick={this.props.funcionHide}>Precios</a>
        <Link to="/corporativo" className="w_100 align_center">Beats para Empresas</Link>
        <Link to="/pedido" className="w_100 align_center">Pide tu canción</Link>
      </div>
    );
  }
}
