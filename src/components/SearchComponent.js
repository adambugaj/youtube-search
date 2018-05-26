import React from 'react';
import { connect } from 'react-redux';
// Material design components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

// Jak przekazywac dane z tego komponentu do DashboardPage - przetestowac!
const SearchInput = () => {
  return (
    <div>
      <TextField
          hintText="Search for videos"
          type="text"
          className="search-input"
      />
        <FlatButton
          label="Submit"
          className="search-input_button"
         />
    </div>
  );
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  };

  onChangeInput = (e) => {
    const value = e.target.value;

    this.setState(() => ({ searchInput: value }));
    // Youtube Api
    const key = 'AIzaSyBn2mtLpsUWsVx9P49PoJXFyhuy51b7xUk';
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${value}&type=video&key=${key}`;
    fetch(apiUrl)
    .then((response) => response.json())
    .then((result) => {
      result.items.map((video) => {
        const getImage = video.snippet.thumbnails.medium.url;
        const getTitle = video.snippet.title.substring(0, 30);
        const getDescription = video.snippet.description.substring(0, 100);
        const getVideoId = video.id.videoId;

        // It prevents from duplicate loop
        if(this.state.images.length + 1 > 5) {
          this.state.images = [];
        }

        this.setState(() => ({
          images: [...this.state.images, {
            image: getImage,
            title: getTitle,
            description: getDescription,
            videoId: getVideoId,
          }]
        }));
      });
    }).catch((err) => {
      console.log(err, 'wait to fix it');
    });
  };

// Po zatwierdzeniu przyciskiem submit wysyłamy dane do obiektu
  onSubmit = (e) => {
      e.preventDefault();
      console.log(this.state.images);
      this.props.onSubmit({
        images: this.state.images,
      });
    };

// Interfejs aplikacji oraz komponenty material-ui
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
        <p>this is what you typed {this.state.searchInput}</p>
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
