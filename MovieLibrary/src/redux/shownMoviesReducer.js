export const initialState = {
  movies: [],
};

const shownMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SHOWN_MOVIES':
      return {...state, movies: action.payload};
    case 'ADD_SHOWN_MOVIE':
      const newMovie = action.payload;
      return {...state, movies: [...state.movies, newMovie]};
    case 'REMOVE_MOVIE':
      const filteredMovie = state.movies.filter(
        item => item.movieId !== action.payload,
      );
      return {...state, movies: filteredMovie};
    default:
      return state;
  }
};

export default shownMoviesReducer;
