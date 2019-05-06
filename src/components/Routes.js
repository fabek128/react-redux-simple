import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './common/Header/Header';
import NoMatch from './common/NoMatch/NoMatch';
import Dashboard from './routes/Dashboard/container/DashboardContainer';

import './Routes.scss';

export default () => (
  <div className="routesSection">
    <Header />
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);