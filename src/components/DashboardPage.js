import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import HeaderDashboard from './HeaderDashboard';
import MainContent from './MainContent';

const DashboardPage = (props) => {
  console.log(props.mainVideo.videoId)
  return (
    <div >
      <HeaderDashboard />
      <div className="content-conatainer">
        <MainContent
          videoId={props.mainVideo.videoId}
          videoTitle={props.mainVideo.videoTitle}
          videoDesc={props.mainVideo.videoDesc} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    mainVideo: state.mainVideo
  };
}

export default connect(mapStateToProps)(DashboardPage);
