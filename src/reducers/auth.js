export default (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
    console.log(action)
      return {
        uid: action.uid
      };
    case 'LOGOUT':
    console.log(action)
      return {};
    default:
      return state;
  }
};
