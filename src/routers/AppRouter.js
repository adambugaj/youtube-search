import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ViewComponent from '../components/ViewComponent';
import DashboardPage from '../components/DashboardPage';

// AppRouter Łączy komponenty w całosc i wyswietla na jednej stronie
const AppRouter = (props) => {
 return (
   <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={ViewComponent} exact={true} />
          <Route path="/dashboard" component={DashboardPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    value: state.value
  };
}

export default connect(mapStateToProps)(AppRouter);
