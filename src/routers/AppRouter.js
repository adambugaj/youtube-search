import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/SearchComponent';
import Header from '../components/Header';
import VideoList from '../components/VideoList';
import { searchResult } from '../actions/results';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// AppRouter Łączy komponenty w całosc i wyswietla na jednej stronie
const AppRouter = (props) => {
console.log(props.value);
 return (
    <div>
      <MuiThemeProvider>
        <Header />
      </MuiThemeProvider>
      <Search
        onSubmit={// Zatwierdza nową listę
          (imagesArray) => {
          props.dispatch(searchResult(imagesArray));
        }}
      />
      <VideoList />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    value: state.value
  };
}

export default connect(mapStateToProps)(AppRouter);
