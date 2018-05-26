import React from 'react';
import { connect } from 'react-redux';
import Search from './SearchComponent';
import Header from './Header';
import VideoList from './VideoList';
import { searchResult } from '../actions/results';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// AppRouter Łączy komponenty w całosc i wyswietla na jednej stronie
const View = (props) => {
console.log(props.value);
 return (
    <div>
      <Header />
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

export default connect(mapStateToProps)(View);
