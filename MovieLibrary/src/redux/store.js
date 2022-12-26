import {combineReducers} from 'redux';
import movieIdReducer from 'redux/movieIdReducer';
import shownMoviesReducer from 'redux/shownMoviesReducer';
import {createStore} from 'redux';

const store = createStore(
  combineReducers({
    movieIdReducer: movieIdReducer,
    shownMoviesReducer: shownMoviesReducer,
  }),
);

export default store;
