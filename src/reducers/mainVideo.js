
const searchValueReducerDefault = [];

const mainVideoReducer = (state = searchValueReducerDefault, action) => {
  switch (action.type) {
    case 'MAIN_VIDEO':
      return action.mainVideo;
    default:
      return state;
  }

};

export default mainVideoReducer;
