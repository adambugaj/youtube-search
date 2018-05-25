const MainContent = (props) => {
  const key = 'AIzaSyBn2mtLpsUWsVx9P49PoJXFyhuy51b7xUk';
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${45}&type=video&key=${key}`;

  const searchOptions = {
    key: key,
    part: 'snippet',
    maxResults: 10,
  };

  fetch(apiUrl)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    result.items.map((video) => {
      console.log(video.snippet.thumbnails.medium.url);
    });
  });
  return (
    <div className="content-conatainer1">
      <MuiThemeProvider>
        <Card>
          <CardTitle title={`Nazwa: ${props.transactionName}`} />
          <CardText>

            <div>
              <iframe
                width="200"
                height="200"
                src="https://www.youtube.com/embed/MLeIyy2ipps"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen>
              </iframe>
              <p>Text: <strong>{props.searchInput}</strong></p>
            </div>
            
          </CardText>
        </Card>
      </MuiThemeProvider>
    </div>
  )
}
