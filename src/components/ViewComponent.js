import React from 'react';
import { connect } from 'react-redux';
import Search from './SearchComponent';
import Header from './Header';
import VideoList from './VideoList';
import { searchResult } from '../actions/results';
import { mainVideo } from '../actions/mainVideo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainContent from './MainContent';
import CircularProgress from 'material-ui/CircularProgress';

// AppRouter Łączy komponenty w całosc i wyswietla na jednej stronie
const View = (props) => {
console.log(props);
 return (
    <div>
      <Search
        onSubmit={// Zatwierdza nową listę
          (imagesArray, videoData) => {
          props.dispatch(searchResult(imagesArray));
          props.dispatch(mainVideo(videoData));
        }}
      />
      <div className="content-conatainer">
        <MainContent
          videoId={props.mainVideo.videoId} videoTitle={props.mainVideo.videoTitle} videoDesc={props.mainVideo.videoDesc}
        />
      </div>
      { props.value.length !== 0 && <VideoList /> }
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    value: state.value,
    mainVideo: state.mainVideo,
  };
}

export default connect(mapStateToProps)(View);
