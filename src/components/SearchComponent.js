import React from 'react';
import { connect } from 'react-redux';
// Material design components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchInput: '',
    };
  };

// When a user types, it searches for videodata and fetch it
  onChangeInput = (e) => {
    const value = e.target.value;
    this.setState(() => ({ searchInput: value }))
    // Youtube Api
    const key = 'AIzaSyBn2mtLpsUWsVx9P49PoJXFyhuy51b7xUk';
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=${key}`;

    // Connect with youtube api and fetch video data
    fetch(apiUrl)
    .then((response) => response.json())
    .then((result) => {
      result.items.map((video) => {

        const getImage = video.snippet.thumbnails.medium.url;
        const getTitle = video.snippet.title;
        const getDescription = video.snippet.description.substring(0, 100);
        const getVideoId = video.id.videoId;
        const getChannelId = video.snippet.channelId;
        const apiChannel = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${getChannelId}&key=${key}`

        fetch(apiChannel)
        .then((response) => response.json())
        .then((data) => {
          const getName = data.items[0].snippet.localized.title;
          const getSubs = data.items[0].statistics.subscriberCount;

          // It prevents from duplicate loop
          if(this.state.data.length + 1 > 10) {
            this.state.data = [];
          }
          this.setState(() => ({
            data: [...this.state.data, {
              image: getImage,
              title: getTitle,
              description: getDescription,
              videoId: getVideoId,
              channelName: getName,
              subsNumber: getSubs,
            }]
          }));
        });
      });
    }).catch((err) => {
      console.log(err, 'Erorr after fetching data from youtube Api');
    });
  };

// After submit, data are dispatched and videos are shown
  onSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit({
        data: !!this.state.data ? this.state.data : this.props.value.data,
      }, {
        mainVideo: {
          videoId: '',
          videoTitle: '',
          videoDesc: '',
        }
      });
    };

// Interface for search content
  render() {
    return (
      <div className="content-conatainer">
        <form onSubmit={this.onSubmit}>
        <MuiThemeProvider>
          <div>
            <TextField
                hintText="Search for videos"
                type="text"
                onChange={this.onChangeInput}
                value={this.state.searchInput}
                className="search-input"
            />
              <FlatButton
                type="submit"
                label="Submit"
                className="search-input_button"
               />
          </div>
        </MuiThemeProvider>
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    value: state.value
  };
};

export default connect(mapStateToProps)(Search);
