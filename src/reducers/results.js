
const searchValueReducerDefault = [];

const searchValueReducer = (state = searchValueReducerDefault, action) => {
  switch (action.type) {
    case 'SEARCH_VALUE':
      return action.value;
    default:
      return state;
  }

};

export default searchValueReducer;
