import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import NewPlace from './places/pages/NewPlace';
import User from './user/pages/Users';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <User />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;