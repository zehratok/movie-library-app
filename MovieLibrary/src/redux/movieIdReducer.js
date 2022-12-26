export const initialState = {
  movieId: null,
};

const movieIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ID':
      return {...state, movieId: action.payload};
    case 'RESET_ID':
      return {...state, movieId: null};
    default:
      return state;
  }
};

export default movieIdReducer;
