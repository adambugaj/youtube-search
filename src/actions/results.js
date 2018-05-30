
const searchResult = ({
  data = [],
} = {}
) => ({
  type: "SEARCH_VALUE",
  value: {
    data,
  }
});

export { searchResult };
