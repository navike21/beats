import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      functionGet: this.props.funcionHide
    };
    this._top = this._top.bind(this)
  }

  _top = () =>{
    window.scrollTo(0, 0)
    // this.state.functionGet
  }

  render() {
    return (
      <div className="menuOptions section_middle_center">
        <Link to="/" className="w_100 align_center" onClick={()=>{this.state.functionGet(); this._top()}}>Inicio</Link>
        <a href="/#nosotros" className="w_100 align_center" onClick={this.state.functionGet}>Nosotros</a>
        <a href="/#escuchalo" className="w_100 align_center" onClick={this.state.functionGet}>Escúchalo</a>
        <Link to="/beatsmovil" className="w_100 align_center">Beats Móvil</Link>
        <a href="/#precios" className="w_100 align_center" onClick={this.state.functionGet}>Precios</a>
        <Link to="/corporativo" className="w_100 align_center">Beats para Empresas</Link>
        <Link to="/pedido" className="w_100 align_center">Pide tu canción</Link>
      </div>
    );
  }
}
