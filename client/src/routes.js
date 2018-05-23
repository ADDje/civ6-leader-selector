import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainMenu from './components/MainMenu';
import Body from './containers/BodyContainer';

export const mainRoutes = (
  <Switch>
    <Route exact path='/' component={MainMenu} />
    <Route path='/lobby' component={Body} />
    <Route path='/solo' component={Body} />
  </Switch>
)
