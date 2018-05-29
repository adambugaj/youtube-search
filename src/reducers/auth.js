export default (state = {}, action) => {
  switch(action.type) {
    case 'Login':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
