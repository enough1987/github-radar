import { commonReducer } from './common';
import actionTypes from '../actions/actionTypes';

describe('common reducer ', () => {
  it('REQUEST_FAIL should change state', () => {
    const error = {
      errorType: 'test',
      error: 'error'
    };
    const result = commonReducer({
      errors: {}
    },
    { type: actionTypes.REQUEST_FAIL, ...error }
    ).errors;

    expect(result)
      .toEqual({
        [error.errorType]: error.error
      });
  });

  it('IS_LOADING should change state', () => {
    const log = {
      isLoadingType: 'test',
      isLoading: 'error'
    };
    const result = commonReducer({
      loading: {}
    },
    { type: actionTypes.IS_LOADING, ...log }
    ).loading;

    expect(result)
      .toEqual({
        [log.isLoadingType]: log.isLoading
      });
  });
});
