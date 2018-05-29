import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { Card, CardMedia, CardText, CardActions, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { mainVideo } from '../actions/mainVideo';
import MainContent from './MainContent';

// Pokazuje listę zapisanych transakcji
class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: '',
    };
  };

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

  render() {
    console.log(this.props);
    return (
      <div>

        <div className={ !!this.props.video.videoId ? "content-conatainer_aftervideoloaded" : "content-conatainer-main" }>
        <MuiThemeProvider>
          <Card >
            {this.props.value.length !== 0 && this.props.value.data.map((vid) => {
              return <CardMedia
                 className="video_list"
                 onClick={this.onClickImage.bind(this, vid.videoId, vid.title, vid.description)}
                 vid-key="as"
                 key={vid.title + Math.random()}
                 overlay={<CardTitle title={`${vid.title}...`}
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
            })}
          </Card>
        </MuiThemeProvider>
      </div>
      </div>
    )
  }
}

//transaction = {props} - przenosi dane transakcji, która użytkownik chce usunac do komponentu RemoveTransaction
const mapStateToProps = (state) => {
  return {
    value: state.value,
    video: state.mainVideo
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      mainVideo: (video) => {
          console.log(video)
        return dispatch(mainVideo(video))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
