import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PublicDashboard from '../components/PublicDashboard';
import PrivateDashboard from '../components/PrivateDashboard';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => {
 return (
   <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={PublicDashboard} exact={true} />
          <PrivateRoute path="/dashboard" component={PrivateDashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
