import React from 'react';
import { connect } from 'react-redux';
import Search from './SearchComponent';
import Header from './Header';
import VideoList from './VideoList';
import { searchResult } from '../actions/results';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// AppRouter Łączy komponenty w całosc i wyswietla na jednej stronie
class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: this.props.value.data,
    }
  }



  render() {
    console.log(!!this.props.value.data);
   return (
      <div>
        <Header />
        <Search
          onSubmit={// Zatwierdza nową listę
            (imagesArray) => {
            this.props.searchResult(imagesArray);
          }}
        />
        { !!this.state.loaded ? <p>Loading...</p> : <VideoList /> }
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    value: state.value
  };
}

const mapDispatchToProps = (dispatch) => ({
  searchResult: (video) => dispatch(searchResult(video))
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
