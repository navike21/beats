import React, { Component } from 'react';
import Header from '../share/header';
import Footer from '../share/footer';
import NuestraHistoria from './beatsLove/nuestraHistoria';
import Aniversario from './beatsLove/aniversario';
import Matrimonio from './beatsLove/matrimonio';
import Acontecimiento from './hablaBeats/acontecimiento';
import AniversarioSocial from './hablaBeats/aniversario';

import Familiar from './losBeats/familiar';
import Padres from './losBeats/padres';
import Hijos from './losBeats/hijos';
import Mascota from './losBeats/mascota';



export default class formulario extends Component {
  _selectForm = () =>{
    let categoria = localStorage.getItem("subCategoriaBeats");
    if(categoria === 'Nuestra Historia'){
      return <NuestraHistoria />
    } else if(categoria === 'Aniversario'){
      return <Aniversario />
    } else if(categoria === 'Matrimonio'){
      return <Matrimonio />
    }

    else if(categoria === 'Historia Familiar'){
      return <Familiar />
    } else if(categoria === 'Mis Padres'){
      return <Padres />
    } else if(categoria === 'Mis Hijos'){
      return <Hijos />
    } else if(categoria === 'Mi Mascota'){
      return <Mascota />
    }

    else if (categoria === 'Acontecimiento'){
      return <Acontecimiento />
    } else if(categoria === 'Aniversario Social'){
      return <AniversarioSocial />
    }
  }
  render() {
    return (
      <div className="w_100">
        <Header />
        {this._selectForm()}
        <Footer />
      </div>
    );
  }
}
