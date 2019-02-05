import React, { Component } from 'react';
import Header from '../share/header';
import Footer from '../share/footer';

import pico from '../../images/pico.svg';

import { contentTypes, url } from '../share/settings';

import md5 from "react-native-md5";

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
      nroPedido: ''
    };
  }
  _searchUser = (id) => {
    // if(email !== ""){
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
          email: jsonget.results[0].email
        })
        
      });
    // }
  }
  _getInfoDescripcion = () =>{
    let kit = localStorage.getItem('selectKit').split(',');
    let cantante = localStorage.getItem('selectCantante');
    let referencia = '';

    let hex_md5v = md5.hex_md5( contentTypes.apiKey+"~"+contentTypes.merchantId+"~"+this.state.reference+"~"+this.state.monto+"~"+contentTypes.moneda );

    if (cantante === 'Dúo'){
      referencia = 'Kit Dúo';
    } else {
      referencia = 'Kit Solista';
    }

    this.setState({
      description: kit[0],
      reference: referencia,
      monto: kit[1],
      signature: hex_md5v
    })
  }

  _nroPedido = ()=> {
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDay();

    this.setState({
      nroPedido: y+''+m+''+d
    })
    // var mm = m < 10 ? '0' + m : m;
    // var dd = d < 10 ? '0' + d : d;
    // return '' + y + mm + dd;
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
            <div className="frmBeats w_95 w_40_desktop">
              <form method="post" action="https://gateway.payulatam.com/ppp-web-gateway/">
                <input name="merchantId"    type="hidden"  value={contentTypes.merchantId} />
                <input name="accountId"     type="hidden"  value={contentTypes.accountId} />
                <input name="description"   type="hidden"  value={this.state.description} />
                <input name="referenceCode" type="hidden"  value={this.state.reference} />
                <input name="amount"        type="hidden"  value={this.state.monto} />
                <input name="tax"           type="hidden"  value="0.00" />
                <input name="taxReturnBase" type="hidden"  value="0.00" />
                <input name="currency"      type="hidden"  value={contentTypes.moneda} />
                <input name="extra1"        type="hidden"  value={this.state.nroPedido} />
                <input name="lng" type="hidden" value="es" />
                <input name="signature"     type="hidden"  value={this.state.signature} />
                <input name="buyerFullName" type="hidden"  value={this.state.nombres} />
                <input name="test"            type="hidden"  value="0" />
                <input name="buyerEmail"      type="hidden"  value={this.state.email} />
                <input name="responseUrl"     type="hidden"  value="https://beatsmusica.com/respuestapago/" />
                <input name="confirmationUrl" type="hidden"  value="https://beatsmusica.com/confirmapago/" />
                <input name="Submit" type="submit" value="Pagar" className="pagar" />
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
