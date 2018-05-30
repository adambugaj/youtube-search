import React from 'react';
import { connect } from 'react-redux';
import Search from './SearchComponent';
import VideoList from './VideoList';
import { searchResult } from '../actions/results';
import { mainVideo } from '../actions/mainVideo';
import MainContent from './MainContent';

// Shows the interface with search input, main content, and a list of videos
const View = (props) => {
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
  return {
    value: state.value,
    mainVideo: state.mainVideo,
  };
}

export default connect(mapStateToProps)(View);
