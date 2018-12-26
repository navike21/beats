import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './home/home';
import Corporativo from './corporativo/corporativo';
import Beatsmovil from './beatsmovil/beatsmovil';
import Pedido from './pedidos/pedido';
import Personas from './pedidos/personas';

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
