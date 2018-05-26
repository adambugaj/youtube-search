
const searchResult = ({
  images = [],
} = {}
) => ({
  type: "SEARCH_VALUE",
  value: {
    images,
  }
});

const showVideo = ({
  videoId = '',
} = {}
) => ({
  type: "VIDEO_ID",
  data: {
    videoId,
  }
});

export { searchResult, showVideo };
