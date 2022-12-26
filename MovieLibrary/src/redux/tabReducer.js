export const initialState = {
  selectedTab: 'home',
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_TAB':
      return {
        ...state,
        selectedTab: action.payload,
      };
    default:
      return state;
  }
};
export default tabReducer;
