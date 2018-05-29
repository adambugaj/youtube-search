import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import searchValueReducer from '../reducers/results';
import mainVideoReducer from '../reducers/mainVideo';
import authReducer from '../reducers/auth';

// Store to inaczej core aplikacji, przez który przesyłane są dane do wszystkich komponentów
export default () => {
  const store = createStore(
    combineReducers({
      value: searchValueReducer,
      mainVideo: mainVideoReducer,
      auth: authReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
