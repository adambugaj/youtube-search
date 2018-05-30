import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardMedia, CardText, CardTitle } from 'material-ui/Card';
import LikeDislikeButton from './LikeVideo';

// Shows the video, which a user clicked
const MainContent = (props) => {
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
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                >
                </iframe>
              </CardMedia>
              <CardTitle title={`${props.videoTitle.substring(0, 30)}...`} />
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

export default MainContent;
