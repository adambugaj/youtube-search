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
    };
  };

onClickImage = (video) => {
  console.log(this.props);
  this.setState(() => ({ videoId: video }));
}
  render() {
    return (
      <div className="content-conatainer1">
        <MainContent videoId={this.state.videoId} />
        <MuiThemeProvider>
          <Card className="video_list">
            {this.props.value.length !== 0 && this.props.value.images.map((jpg) => {
             return <CardMedia
               className="video_list"
               onClick={this.onClickImage.bind(this, jpg.videoId)}
               data-key="as"
               key={jpg.title + Math.random()}
               overlay={<CardTitle title={`${jpg.title}...`} subtitle={`${jpg.description}...`} />}
             >
             <img
               className="input-group"
               alt={jpg.title}
               src={jpg.image}
             />

            </CardMedia>
            })}
          </Card>
        </MuiThemeProvider>
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
