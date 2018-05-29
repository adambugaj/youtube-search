import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class LikeDislikeButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      message: ''
    };
  }

  onClickLike = () => {
    this.setState({
      open: true,
      message: 'like'
    });
  };

  onClickDislike = () => {
    this.setState({
      open: true,
      message: 'dislike'
    });
  }

  onDoubleClickDislike = () => {
    this.setState({
      message: ''
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
        <div className="content-conatainer">
          <RaisedButton
            onClick={this.onClickLike}
            disabled={this.state.message === 'like' && true}
            label="Like"
          />
          <RaisedButton
            onClick={this.onClickDislike}
            disabled={this.state.message === 'dislike' && true}
            label="Dislike"
          />
          <Snackbar
            open={this.state.open}
            message={this.state.message === 'like' ? 'You liked the video' : 'You disliked the video'}
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
        </div>
    );
  }
}
