
const commonActionTypes = {
  REQUEST_FAIL: 'REQUEST_FAIL',
  IS_LOADING: 'IS_LOADING'
};

const trendsPageActionTypes = {
  GET_TRENDS: 'GET_TRENDS'
};

const searchPageActionTypes = {
  SORT_USERS: 'SORT_USERS',
  SEARCH_USERS: 'SEARCH_USERS'
};

export default {
  ...commonActionTypes,
  ...trendsPageActionTypes,
  ...searchPageActionTypes
};
