import React, {Component} from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { startLogin } from '../actions/auth';


class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Header = ({ startLogin }) => {
  console.log(startLogin);
  return (
    <MuiThemeProvider>
      <div>
        <AppBar
          title="Youtube Search"
          //iconElementRight={this.state.logged ? <Logged /> : <Login />}
          iconElementRight={<FlatButton onClick={startLogin} label="Login" />}
        />
      </div>
    </MuiThemeProvider>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Header);
