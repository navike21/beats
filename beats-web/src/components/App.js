import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './home/home';
import Corporativo from './corporativo/corporativo';
import Beatsmovil from './beatsmovil/beatsmovil';
import Pedido from './pedidos/pedido';
import Personas from './pedidos/personas';

import BeatsLove from './pedidos/beatsLove/beatsLove';
import LosBeats from './pedidos/losBeats/losBeats';
import HablaBeats from './pedidos/hablaBeats/hablaBeats';
import GeneroMusical from './pedidos/generoMusical/generoMusical';
import Cantada from './pedidos/generoMusical/cantada';
import kitBeats from './pedidos/generoMusical/kitBeats';
import registerUser from './pedidos/register';

function CustomLinkExample() {
  return (
    <Router>
      <div className="w_100 section_middle_center">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/corporativo" component={Corporativo} />
          <Route exact path="/beatsmovil" component={Beatsmovil} />
          <Route exact path="/pedido" component={Pedido} />
          <Route exact path="/pedido/personas" component={Personas} />
          <Route exact path="/beats-love" component={BeatsLove} />
          <Route exact path="/los-beats" component={LosBeats} />
          <Route exact path="/habla-beats" component={HablaBeats} />
          <Route exact path="/genero-musical" component={GeneroMusical} />
          <Route exact path="/genero-musical/select-cantante" component={Cantada} />
          <Route exact path="/genero-musical/select-cantante/kit-beats" component={kitBeats} />
          <Route exact path="/register" component={registerUser} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

function NoMatch({ location }) {
  return (
    <div>
      <h3>Error 404</h3>
    </div>
  );
}

export default CustomLinkExample;
