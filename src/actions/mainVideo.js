const mainVideo = ({
  videoId = '',
  videoTitle = '',
  videoDesc = '',
} = {}
) => ({
  type: "MAIN_VIDEO",
  mainVideo: {
    videoId,
    videoTitle,
    videoDesc,
  }
});

export { mainVideo };
