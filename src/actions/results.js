
const searchResult = ({
  images = [],
  title = [],
  description = [],
} = {}
) => ({
  type: "SEARCH_VALUE",
  value: {
    images,
  }
});

export { searchResult };
