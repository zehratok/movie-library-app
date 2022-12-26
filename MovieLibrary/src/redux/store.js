import {combineReducers} from 'redux';
import movieIdReducer from './movieIdReducer';
import {createStore} from 'redux';

const store = createStore(
  combineReducers({
    movieIdReducer: movieIdReducer,
  }),
);

export default store;
