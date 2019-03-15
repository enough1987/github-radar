import { combineReducers } from 'redux';

import { searchPageReducer } from './searchPage';
import { trendsPageReducer } from './trendsPage';
import { commonReducer } from './common';

export default combineReducers({
  common: commonReducer,
  searchPage: searchPageReducer,
  trendsPage: trendsPageReducer
});
