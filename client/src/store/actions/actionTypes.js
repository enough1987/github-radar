
const commonActionTypes = {
  REQUEST_FAIL: 'REQUEST_FAIL',
  IS_LOADING: 'IS_LOADING'
};

const trandsPageActionTypes = {
  GET_TRANDS: 'GET_TRANDS'
};

const searchPageActionTypes = {
  SORT_USERS: 'SORT_USERS',
  SEARCH_USERS: 'SEARCH_USERS'
};

export default {
  ...commonActionTypes,
  ...trandsPageActionTypes,
  ...searchPageActionTypes
};
