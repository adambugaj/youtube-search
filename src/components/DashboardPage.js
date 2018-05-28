import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import HeaderDashboard from './HeaderDashboard';
import MainContent from './MainContent';
import View from './ViewComponent';

const DashboardPage = (props) => {
  console.log(props.mainVideo.videoId)
  return (
    <div >
      <HeaderDashboard />
      <View />
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
