import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
<<<<<<< HEAD
=======
import User from './user/pages/Users';
>>>>>>> 3370bed89f021654bfa34f967a4a151eb4263246
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
<<<<<<< HEAD
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
=======
      <Switch>
        <Route path="/" exact>
          <User />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
>>>>>>> 3370bed89f021654bfa34f967a4a151eb4263246
    </Router>
  );
};

export default App;
