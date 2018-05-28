import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { Card, CardMedia, CardText, CardActions, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { showVideo } from '../actions/results';
import MainContent from './MainContent';

// Pokazuje listę zapisanych transakcji
class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: '',
      videoTitle: '',
      videoDesc: '',
      channelName: '',
    };
  };

onClickImage = (video, title, description, id) => {
  this.setState(() => ({
    videoId: video,
    videoTitle: title,
    videoDesc: description,
  }))
}

  render() {
    console.log(this.state.videoId);
    return (
      <div>
      <div className="content-conatainer">
        <MainContent
          videoId={this.state.videoId} videoTitle={this.state.videoTitle} videoDesc={this.state.videoDesc}
        />
      </div>
        <div className={ !!this.state.videoId ? "content-conatainer_aftervideoloaded" : "content-conatainer-main" }>
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
  console.log(state);
  return {
    value: state.value,
  };
}

export default connect(mapStateToProps)(VideoList);
