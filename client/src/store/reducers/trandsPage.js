import actionTypes from '../actions/actionTypes';

const defaultState = {
  languageTrands: []
};

export const trandsPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_LANGUAGE_TRANDS:
      return {
        ...state,
        languageTrands: action.languageTrands
      };
    default:
      return state;
  }
};
