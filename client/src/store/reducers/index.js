import { combineReducers } from 'redux';

import { searchPageReducer } from './searchPage';
import { trandsPageReducer } from './trandsPage';
import { commonReducer } from './common';

export default combineReducers({
  common: commonReducer,
  searchPage: searchPageReducer,
  trandsPage: trandsPageReducer
});
