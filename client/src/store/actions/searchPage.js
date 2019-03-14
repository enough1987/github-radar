
const headers = {
  'Content-type': 'application/json',
  'Accept': 'application/json'
};

export const searchUsers = keyword => dispatch => {
  return fetch(`/api/github/search/${keyword}`, {
    method: 'GET',
    headers
  })
    .then(res => res.json())
    .then(
      (data) => dispatch({ type: 'SEARCH_USERS', payload: data }),
      (error) => dispatch({ type: 'SEARCH_USERS_FAIL', error }));
};

export const sortAction = (sortBy, seq) => ({
  type: 'SORT_USERS',
  sortBy: sortBy,
  seq: seq
});

// 1. Action creators
export const addReposAction = jsonResult => ({
  type: 'ADD_TWEETS',
  repos: jsonResult
});

export const userChangedAction = value => ({
  type: 'USER_CHANGED',
  value: value
});

export const loadingChangedAction = isLoading => ({
  type: 'IS_LOADING',
  isLoading: isLoading
});

export const loadReposAction = user => dispatch => {
  const url = '/api/github/' + user;
  dispatch(loadingChangedAction(true));

  return fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(data => {
      dispatch(loadingChangedAction(false));
      dispatch(addReposAction(data));
      return true;
    })
    /* eslint-disable no-console */
    .catch(console.error);
};
