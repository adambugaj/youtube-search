import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import searchValueReducer from '../reducers/results';

// Store to inaczej core aplikacji, przez który przesyłane są dane do wszystkich komponentów
export default () => {
  const store = createStore(
    combineReducers({
      value: searchValueReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};
