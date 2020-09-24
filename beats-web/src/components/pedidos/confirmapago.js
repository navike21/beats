import React, { Component } from 'react';
import Header from '../share/header';
import Footer from '../share/footer';

import { Link } from 'react-router-dom';

// import { url } from '../share/settings';

import pico from '../../images/pico.svg';

export default class ConfirmaPago extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo: false,
      detailPedido: localStorage.getItem('detailPedido'),
      empresa: false
    };
  }

  // componentDidMount = () =>{
  //   // alert("s")
  //   this._sendPedido()
  // }

  // _sendMovilPedido = ( pago ) =>{
  //   // console.log(this.state.detailPedido);
  //   let detail = JSON.parse(this.state.detailPedido)
  //   fetch(`${url.link}/beats-movil/`, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       // Authorization: `JWT ${token}`
  //     },
  //     body: JSON.stringify({
  //       "nombres": detail.nombres,
  //       "email": detail.email,
  //       "telefono": detail.telefono,
  //       "historia": detail.historia,
  //       "total_pago": pago,
  //       "pago": true,
  //       "entregado": false
  //     })
  //   })
  //   .then(result => result.json())
  // }

  // _sendNormalPedido = ( kit, pago ) =>{
  //   console.log(this.state.detailPedido);
  //   fetch(`${url.link}/pedido-beats/`, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       // Authorization: `JWT ${token}`
  //     },
  //     body: JSON.stringify({
  //       "cliente": localStorage.getItem('solicitante'),
  //       "nro_pedido": localStorage.getItem('pedido_nro'),
  //       "detalle": this.state.detailPedido,
  //       "historia": localStorage.getItem('historia'),
  //       "categoria": localStorage.getItem('categoriaBeats'),
  //       "sub_categoria": localStorage.getItem('subCategoriaBeats'),
  //       "genero": localStorage.getItem('generoMusica'),
  //       "cantate": localStorage.getItem('selectCantante'),
  //       "kit": kit,
  //       "total_pago": pago,
  //       "pago": true,
  //       "entregado": false
  //     })
  //   })
  //   .then(result => result.json())
  // }

  _sendPedido = () =>{
    let tipoPedido = localStorage.getItem('selectKit');
    // console.log(tipoPedido)
    if( tipoPedido !== null){
      let getDataPedido = tipoPedido.split(',');
    // console.log(tipoPedido);
      if(getDataPedido[0] === 'Beats Móvil'){
        // console.log("beats movil");
        // this._sendMovilPedido( getDataPedido[1] )
        
      } else if(getDataPedido[0] === 'Beats empresas'){
        this.setState({empresa: true});
      } else {
        // console.log("pedido normal");
        // this._sendNormalPedido( getDataPedido[0], getDataPedido[1] )
      }
      this.setState({
        tipo: true
      })
    }
  }

  render() {
    return (
      <div className="w_100">
        <Header />
        <div className="w_100 section_middle_center full_min_h beatsMovil spaceInBottom_normal">
          <div className="wrappBussiness section_middle_center whiteColor w_80">
            <h2 className="whiteColor font_light font_big section_middle_center marginBottom_small w_75 align_center">
              <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> 
              {this.state.tipo ? 'Gracias por confiar en nostros': 'No tiene ningún pedido en curso'}
            </h2>
            {this.state.empresa ? <p>Pronto nos pondremos en contacto con usted</p> : <p>{this.state.tipo ? 'Tu pedido estará siendo atendido en el menor tiempo posible' : ''}</p>}
            
            <div className="section_middle_center w_100">
              <Link to={this.state.tipo ? '/' : '/pedido'} className="button font_normal">
                {this.state.tipo ? 'Entendido' : 'Ir a Pedidos'}
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
