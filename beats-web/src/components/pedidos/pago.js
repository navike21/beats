import React, { Component } from 'react';
import Header from '../share/header';
import Footer from '../share/footer';

import pico from '../../images/pico.svg';

import { contentTypes, url } from '../share/settings';

// import md5 from "react-native-md5";
import md5 from 'md5';

export default class Pago extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      reference: '',
      monto: '',
      signature: '',
      nombres: '',
      email: '',
      phone: '',
      nroPedido: ''
    };
  }

  
  _searchUser = (id) => {
    let kit = localStorage.getItem('selectKit').split(',');
    if(kit[0] !== "Beats Móvil"){
      fetch( `${url.link}/usuario-beats/?email=&id=${id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // Authorization: `JWT ${token}`
        },
      })
      .then(result => result.json())
      // .then(result => console.log(result.results[0].name))
      .then(jsonget =>{
        // console.log(jsonget.results[0])
        this.setState({
          nombres: jsonget.results[0].name,
          email: jsonget.results[0].email,
          phone: jsonget.results[0].telefono
        })
        
      });
    }
    else {
      var json = JSON.parse(localStorage.getItem('detailPedido'));
      this.setState({
        nombres: json.nombres,
        email: json.email,
        phone: json.telefono
      })
    }
  }
  _getInfoDescripcion = () =>{
    let kit = localStorage.getItem('selectKit').split(',');
    let cantante = localStorage.getItem('selectCantante');
    let referencia = '';
    let precio = kit[1];
    let Api = contentTypes.apiKey;
    let merchantId = contentTypes.merchantId;
    let moneda = contentTypes.moneda;

    if (kit[0] === 'Beats Móvil'){
      referencia = 'Pedido';
    }
    else {
      if (cantante === 'Dúo'){
        referencia = 'Kit Duo';
      } else {
        referencia = 'Kit Solista';
      }
    }
    // console.log(Api+'~'+merchantId+'~'+referencia+'~'+precio+'~'+moneda);
    let hex_md5v = md5(Api+'~'+merchantId+'~'+referencia+'~'+precio+'~'+moneda);
    // console.log(hex_md5v);
    
    this.setState({
      description: kit[0],
      reference: referencia,
      monto: kit[1],
      signature: String(hex_md5v)
    });

  }

  _nroPedido = ()=> {
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    var h = now.getHours();
    var min = now.getMinutes();
    var s = now.getSeconds();

    var pedido_nro = y+''+m+''+d+''+h+''+min+''+s;

    localStorage.setItem('pedido_nro', pedido_nro)

    this.setState({
      nroPedido: pedido_nro
    })
}

  componentDidMount = () =>{
    this._getInfoDescripcion();
    this._searchUser(localStorage.getItem('solicitante'));
    this._nroPedido();
  }

  render() {
    return (
      <div className="w_100">
        <Header />
        <div className="w_100 section_middle_center full_min_h beatsMovil spaceInBottom_normal">
          <div className="wrappBussiness section_middle_center whiteColor w_80">
            <h2 className="whiteColor font_light font_big section_middle_center marginBottom_biggest w_75 align_center">
              <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Efectúa tu pago
            </h2>
            <div className="w_100 section_middle_center">
              <p className="w_95 align_center">{this.state.reference} | {this.state.description} | {localStorage.getItem('generoMusica')}</p>
              <p className="w_95 align_center font_bold font_medium marginTopAll_small">S/. {this.state.monto}</p>
            </div>
            <div className="frmBeats w_95 w_40_desktop section_middle_center">
              <form method="post" action="https://gateway.payulatam.com/ppp-web-gateway/">
                <input name="merchantId"      type="hidden"   value={contentTypes.merchantId} />
                <input name="referenceCode"   type="hidden"   value={this.state.reference} />
                <input name="description"     type="hidden"   value={this.state.description} />
                <input name="amount"          type="hidden"   value={this.state.monto} />
                <input name="tax"             type="hidden"   value="1" />
                <input name="taxReturnBase"   type="hidden"   value="0" />
                <input name="signature"       type="hidden"   value={this.state.signature} />
                <input name="accountId"       type="hidden"   value={contentTypes.accountId} />
                <input name="currency"        type="hidden"   value={contentTypes.moneda} />
                <input name="extra1"          type="hidden"   value={this.state.nroPedido} />
                {/* <input name="lng"             type="hidden"   value="es" /> */}
                <input name="buyerFullName"   type="hidden"   value={this.state.nombres} />
                <input name="buyerEmail"      type="hidden"   value={this.state.email} />
                <input name="telephone"       type="hidden"   value={this.state.phone} />
                <input name="test"            type="hidden"   value="0" />
                <input name="responseUrl"     type="hidden"   value="https://beatsmusica.com/respuestapago/" />
                <input name="confirmationUrl" type="hidden"   value="https://beatsmusica.com/confirmapago/" />
                <input name="Submit" type="submit" value="PAGAR AHORA" className="button w_100 font_medium" />
              </form>
              <p className="w_100 align_center whiteColor marginTop_big font_small">
                Estamos a un paso para culminar con tu pedido
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
