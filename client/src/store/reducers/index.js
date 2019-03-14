import { combineReducers } from 'redux';

import { userListReducer } from './searchPage';

export default combineReducers({
  userList: userListReducer
});
