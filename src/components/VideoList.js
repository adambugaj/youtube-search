import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardMedia, CardText, CardActions, CardTitle } from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
import { mainVideo } from '../actions/mainVideo';

// Shows the list of videos
class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: '',
      openSnackbar: true,
    };
  };
  // When the image or title is clicked it will send video data to main MainContent component
  onClickImage = (video, title, description, id) => {
    this.setState(() => ({
      videoId: video,
    }));
    this.props.mainVideo({
      videoId: video,
      videoTitle: title,
      videoDesc: description,
    });
  }
  // Closes popup
  handleRequestClose = () => {
    this.setState({
      openSnackbar: false,
    });
  };

  render() {
    return (
      <div>
        <div className={ !!this.props.video.videoId ? "content-conatainer_aftervideoloaded" : "content-conatainer-main" }>
          <MuiThemeProvider>
            <div>
              {this.props.value.data.length !== 0 ? this.props.value.data.map((vid) => {
                  return <CardMedia
                     className="video_list"
                     onClick={this.onClickImage.bind(this, vid.videoId, vid.title, vid.description)}
                     vid-key="as"
                     key={vid.title + Math.random()}
                     overlay={<CardTitle title={`${vid.title.substring(0, 20)}...`}
                     subtitle={vid.channelName}
                     style={{cursor:'pointer'}}
                   />}
                   >
                   <img
                     className="input-group"
                     alt={vid.title}
                     src={vid.image}
                   />
                </CardMedia>
              }) : <Snackbar
              open={this.state.openSnackbar}
              message="Please type once again or check the internet connection."
              autoHideDuration={4000}
              onRequestClose={this.handleRequestClose}
            />}
          </div>
        </MuiThemeProvider>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.value,
    video: state.mainVideo
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      mainVideo: (video) => {
        return dispatch(mainVideo(video))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
