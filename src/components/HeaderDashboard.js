import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { startLogout } from '../actions/auth';

// Header for logged-in users
const HeaderDashboard = ({ startLogout }) => {
  return (
    <MuiThemeProvider>
      <div className="input-group">
        <AppBar
          title="Youtube Search"
          //iconElementRight={this.state.logged ? <Logged /> : <Login />}
          iconElementRight={<FlatButton onClick={startLogout} label="Logout" />}
        />
      </div>
    </MuiThemeProvider>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(HeaderDashboard);
