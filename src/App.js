import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Player from './containers/Player';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/player' component={Player} />
      </Switch>
    );
  }
}

export default App;
