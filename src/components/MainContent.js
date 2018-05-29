import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardMedia, CardText, CardActions, CardTitle } from 'material-ui/Card';
import LikeDislikeButton from './LikeVideo';

const MainContent = (props) => {
  console.log(!!props.videoId)
  return (
    <div className="content-conatainer_maincontent">
      {!!props.videoId &&
      <MuiThemeProvider>
          <Card >
            <CardMedia >
              <iframe
                width="260"
                height="330"
                src={`https://www.youtube.com/embed/${props.videoId}`}
                frameBorder="0"
                allow="autoplay"
                allowFullScreen
              >
              </iframe>
            </CardMedia>
            <CardTitle title={`${props.videoTitle}`} />
            {props.auth &&
              <LikeDislikeButton />
            }
            <CardText>
              {props.videoDesc}
            </CardText>
          </Card>
      </MuiThemeProvider>
      }
    </div>

  )
}

const mapStateToProps = (state) => {
  return {
    value: state.value,
    mainVideo: state.mainVideo,
    auth: !!state.auth.uid
  };
}

export default connect(mapStateToProps)(MainContent);
