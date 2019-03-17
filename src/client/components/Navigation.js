import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as routes from '../constants/routes';
import Landing from '../containers/Landing';
import Host from '../containers/Host';
import Join from '../containers/Join';
import Game from '../containers/Game';

const Navigation = () => (
  <div>
    <Switch>
      <Route exact path={routes.LANDING} component={Landing} />
      <Route exact path={routes.HOST} component={Host} />
      <Route exact path={routes.JOIN} component={Join} />
      <Route exact path={routes.GAME} component={Game} />
    </Switch>
  </div>
);

export default Navigation;
