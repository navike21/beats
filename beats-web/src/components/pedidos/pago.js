import React, { Component } from 'react';
import Header from '../share/header';
import Footer from '../share/footer';

import pico from '../../images/pico.svg';

import { contentTypes, url } from '../share/settings';
// import { Link } from 'react-router-dom';

// import md5 from "react-native-md5";
import md5 from 'md5';
import MetaTags from 'react-meta-tags';

export default class Pago extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      descriptionComplete: '',
      reference: '',
      monto: '',
      signature: '',
      nombres: '',
      email: '',
      phone: '',
      nroPedido: '',
      titleWeb: 'Beats música - Pedidos',
      slogan: 'Selecciona tu canción',
      descriptionWeb: 'Personaliza tu canción y realiza tu pedido',
      beatsIcon: 'https://beats-logo.png',
      beatsPortada: 'https://beatsmusica.com/static/media/portada.a4759fd8.png',
      urlWeb: 'https://beatsmusica.com/pedido',

      tipo: false,
      detailPedido: localStorage.getItem('detailPedido'),
      empresa: false
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
    let cliente = localStorage.getItem('detailPedido');
    let cantante = localStorage.getItem('selectCantante');
    let referencia = '';
    let precio = kit[1];
    let Api = contentTypes.apiKey;
    let merchantId = contentTypes.merchantId;
    let moneda = contentTypes.moneda;
    let detallePedidoCompleto = '';

    if (kit[0] === 'Beats Móvil'){
      referencia = 'pedido nro: ' + this._nroPedido();
      
      let detallePedido = JSON.parse(cliente);
      detallePedidoCompleto = detallePedidoCompleto + 'nombres: ' + detallePedido.nombres + ', ';
      detallePedidoCompleto = detallePedidoCompleto + 'email: ' + detallePedido.email + ', ';
      detallePedidoCompleto = detallePedidoCompleto + 'historia: ' + detallePedido.historia + '.';
    }
    else {
      detallePedidoCompleto = localStorage.getItem('categoriaBeats');
      if (cantante === 'Dúo'){
        referencia = 'pedido nro: ' + this._nroPedido() + ' - Kit Duo';
      } else {
        referencia = 'pedido nro: ' + this._nroPedido() + ' - Kit Solista';
      }
    }
    // console.log(Api+'~'+merchantId+'~'+referencia+'~'+precio+'~'+moneda);
    let hex_md5v = md5(Api+'~'+merchantId+'~'+referencia+'~'+precio+'~'+moneda);
    

    this.setState({
      description: kit[0],
      descriptionComplete: kit[0] +', '+ detallePedidoCompleto,
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

    return pedido_nro
}

  componentDidMount = () =>{
    this._searchUser(localStorage.getItem('solicitante'));
    this._getInfoDescripcion();
  
    this._sendPedido();
  }

  _sendMovilPedido = ( pago ) =>{
    // console.log(this.state.detailPedido);
    let detail = JSON.parse(this.state.detailPedido);
    fetch(`${url.link}/beats-movil/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Authorization: `JWT ${token}`
      },
      body: JSON.stringify({
        "nombres": 'Nro pedido:' +this._nroPedido()+ ' - ' + detail.nombres,
        "email": detail.email,
        "telefono": detail.telefono,
        "historia": detail.historia,
        "total_pago": pago,
        "pago": false,
        "entregado": false
      })
    })
    .then(result => result.json())
  }

  _sendNormalPedido = ( kit, pago ) =>{
    // console.log(this.state.detailPedido);
    fetch(`${url.link}/pedido-beats/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Authorization: `JWT ${token}`
      },
      body: JSON.stringify({
        "cliente": localStorage.getItem('solicitante'),
        "nro_pedido": localStorage.getItem('pedido_nro'),
        "detalle": this.state.detailPedido,
        "historia": localStorage.getItem('historia'),
        "categoria": localStorage.getItem('categoriaBeats'),
        "sub_categoria": localStorage.getItem('subCategoriaBeats'),
        "genero": localStorage.getItem('generoMusica'),
        "cantate": localStorage.getItem('selectCantante'),
        "kit": kit,
        "total_pago": pago,
        "pago": false,
        "entregado": false
      })
    })
    .then(result => result.json())
  }

  _sendPedido = () =>{
    let tipoPedido = localStorage.getItem('selectKit');
    // console.log(tipoPedido)
    if( tipoPedido !== null){
      let getDataPedido = tipoPedido.split(',');
    // console.log(tipoPedido);
      if(getDataPedido[0] === 'Beats Móvil'){
        this._sendMovilPedido( getDataPedido[1] )
      } else if(getDataPedido[0] === 'Beats empresas'){
        // console.log("beats empresas");
        this.setState({empresa: true});
      } else {
        // console.log("beats normal");
        this._sendNormalPedido( getDataPedido[0], getDataPedido[1] )
      }
      this.setState({
        tipo: true
      })
    }
  }

  render() {
    return (
      <div className="w_100">
        <MetaTags>
          <title>Beats música - Canciones personalizadas</title>
          <meta name="description" content={this.state.descriptionWeb} />
          <meta property="author" content={this.state.titleWeb} />
          <meta property="copyright" content={this.state.titleWeb} />

          <meta name="handheldFriendly" content="true" />
          <meta name="subject" content={this.state.titleWeb + ' - ' + this.state.slogan} />
          <meta name="language" content="Español" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="classification" content="business" />
          <meta name="url" content={this.state.urlWeb} />
          <meta name="identifier-URL" content={this.state.urlWeb} />
          <meta name="coverage" content="Worldwide" />
          <meta name="distribution" content="Global" />
          <meta name="rating" content="General" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={this.state.urlWeb} />
          <meta property="og:title" content={this.state.titleWeb} />
          <meta property="og:description" content={this.state.descriptionWeb} />
          <meta property="og:locale" content="es_PE" />
          <meta property="og:image" content={this.state.beatsPortada} />
          <meta property="og:image:url" content={this.state.beatsPortada} />
          <meta property="og:image:alt" content={this.state.titleWeb} />
          <meta property="og:site_name" content={this.state.titleWeb} />
          <meta property="fb:app_id" content="341860746216953" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@beats_musica" />
          <meta name="twitter:creator" content="@beats_musica" />
          <meta name="twitter:title" content={this.state.titleWeb} />
          <meta name="twitter:description" content={this.state.descriptionWeb} />
          <meta name="twitter:image" content={this.state.beatsPortada} />

          <meta property="og:title" content={this.state.titleWeb} />
          <meta property="og:image" content="https://beatsmusica.com/static/media/portada.a4759fd8.png" />
        </MetaTags>
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
                <input name="description"     type="hidden"   value={this.state.descriptionComplete} />
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
