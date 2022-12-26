import {combineReducers} from 'redux';
import movieIdReducer from 'redux/movieIdReducer';
import shownMoviesReducer from 'redux/shownMoviesReducer';
import tabReducer from 'redux/tabReducer';
import {createStore} from 'redux';

const store = createStore(
  combineReducers({
    movieIdReducer: movieIdReducer,
    shownMoviesReducer: shownMoviesReducer,
    tabReducer: tabReducer,
  }),
);

export default store;
