import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ViewComponent from '../components/ViewComponent';
import PublicDashboard from '../components/PublicDashboard';
import DashboardPage from '../components/DashboardPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();
// AppRouter Łączy komponenty w całosc i wyswietla na jednej stronie
const AppRouter = (props) => {
 return (
   <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={PublicDashboard} exact={true} />
          <PrivateRoute path="/dashboard" component={DashboardPage} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    value: state.value
  };
}

export default connect(mapStateToProps)(AppRouter);
