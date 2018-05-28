import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const DashboardPage = (props) => {
  console.log(props.videoId)
  return (
    <div className="content-conatainer_maincontent">
      <p>works</p>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  startLogin: () => dispatch(startLogin())
}

export default connect(undefined, mapDispatchToProps)(DashboardPage);
