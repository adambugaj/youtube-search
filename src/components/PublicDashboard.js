import React from 'react';
import { connect } from 'react-redux';
import Search from './SearchComponent';
import Header from './Header';
import VideoList from './VideoList';
import { searchResult } from '../actions/results';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainContent from './MainContent';
import CircularProgress from 'material-ui/CircularProgress';
import View from './ViewComponent';

// AppRouter Łączy komponenty w całosc i wyswietla na jednej stronie
const PublicDashboard = (props) => {
console.log(props);
 return (
    <div>
      <Header />
      <View />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    value: state.value,
    mainVideo: state.mainVideo
  };
}

export default connect(mapStateToProps)(PublicDashboard);
