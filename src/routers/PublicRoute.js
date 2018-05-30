import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => {
  return (
    <Route {...rest} component={(props) => (
      !isAuthenticated ? (
          <Component {...rest} />)
        : (<Redirect to="/dashboard" />)
    )}/>
  )
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.uid
  }
};
export default connect(mapStateToProps)(PublicRoute);
