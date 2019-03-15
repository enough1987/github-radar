import { isLoadingAction, requestFailAction } from './common';
import actionTypes from './actionTypes';

const headers = {
  'Content-type': 'application/json',
  'Accept': 'application/json'
};

export const getTrands = keyword => dispatch => {
  dispatch(isLoadingAction(true, actionTypes.GET_TRANDS));

  return fetch('http://ec2-54-222-208-228.cn-north-1.compute.amazonaws.com.cn:8000/api/github/trendlist', {
    method: 'GET',
    mode: 'no-cors',
    headers
  })
    .then(res => res.json())
    .then((data) => {
      dispatch({ type: actionTypes.GET_TRANDS, payload: data });
      dispatch(isLoadingAction(false, actionTypes.GET_TRANDS));
      return true;
    }).catch((error) => {
      dispatch(requestFailAction(error, actionTypes.GET_TRANDS));
      dispatch(isLoadingAction(false, actionTypes.GET_TRANDS));
    });
};
