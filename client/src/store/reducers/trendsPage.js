import actionTypes from '../actions/actionTypes';

const defaultState = {
  languageTrends: []
};

export const trendsPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_TRENDS:
      return {
        ...state,
        languageTrends: action.payload
      };
    default:
      return state;
  }
};
