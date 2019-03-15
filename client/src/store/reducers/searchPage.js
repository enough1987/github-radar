import orderBy from 'lodash/orderBy';
import actionTypes from '../actions/actionTypes';

const defaultState = {
  userList: []
};

export const searchPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SORT_USERS:
      return {
        ...state,
        userList: orderBy(state.userList, [action.sortBy], [action.seq])
      };
    case actionTypes.SEARCH_USERS:
      if (Array.isArray(action.payload.items)) {
        const userList = action.payload.items.reduce((arr, item) => {
          arr.push({
            'name': item['name'],
            'forks': item['forks'],
            'stars': item['stargazers_count'],
            'size': item['size'],
            'url': item['html_url'],
            'language': item['language'],
            'desc': item['description'],
            'created': item['created_at'],
            'updated': item['updated_at']
          });
          return arr;
        }, []);
        return {
          ...state,
          userList
        };
      }
      return state; // TODO: can it be not an array?
    default:
      return state;
  }
};
