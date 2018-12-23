import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Header from "./header";
import Home from './home/home';
// import About from "./about/about"
import Corporativo from './corporativo/corporativo';

function CustomLinkExample() {
  return (
    <Router>
      <div className="w_100 section_middle_center">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/corporativo" component={Corporativo} />
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
