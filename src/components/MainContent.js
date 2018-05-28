import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardMedia, CardText, CardActions, CardTitle } from 'material-ui/Card';

const MainContent = (props) => {
  console.log(props.videoId)
  return (

    <div className="content-conatainer_maincontent">
      {!!props.videoId &&
      <MuiThemeProvider>
          <Card>
            <CardMedia>
              <iframe
                width="250"
                height="320"
                src={`https://www.youtube.com/embed/${props.videoId}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen>
              </iframe>
            </CardMedia>
            <CardTitle title={`${props.videoTitle}`} />
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
    value: state.value
  };
}

export default connect(mapStateToProps)(MainContent);
