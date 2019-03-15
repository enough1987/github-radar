import { sortAction, searchUsers } from './searchPage';
import { storeFactory } from '../../utils/testUtils';
import actionTypes from './actionTypes';

describe('searchPage action ', () => {
  const initialState = {};
  let store;

  beforeEach(() => {
    store = storeFactory(initialState);
  });

  afterEach(() => {
    fetch.resetMocks();
  });

  it('sortAction change state', async () => {
    store = storeFactory({
      searchPage: {
        userList: [
          { test: 'test2' }, { test: 'test1' }, { test: 'test3' }
        ]
      }
    });
    await store.dispatch(sortAction('test', 'asc'));

    const state = store.getState().searchPage;

    expect(state)
      .toEqual({
        userList: [
          { test: 'test1' }, { test: 'test2' }, { test: 'test3' }
        ]
      });
  });

  it('searchUsers change state on successfull request', async () => {
    const testResault = { items: [{
      'name': 'test',
      'forks': 'test',
      'stargazers_count': 'test',
      'size': 'test',
      'html_url': 'test',
      'language': 'test',
      'description': 'test',
      'created_at': 'test',
      'updated_at': 'test'
    }]
    };
    fetch.mockResponseOnce(JSON.stringify(testResault));

    store = storeFactory({
      searchPage: {
        userList: []
      }
    });
    await store.dispatch(searchUsers('javascript'));

    const state = store.getState().searchPage.userList;

    expect(state)
      .toEqual([{
        'name': 'test',
        'forks': 'test',
        'stars': 'test',
        'size': 'test',
        'url': 'test',
        'language': 'test',
        'desc': 'test',
        'created': 'test',
        'updated': 'test'
      }]);
  });

  it('SEARCH_USERS change state on unsuccessfull request', async () => {
    const testResault = 'fake error message';
    fetch.mockReject(testResault);

    store = storeFactory({
      common: {
        errors: []
      }
    });
    await store.dispatch(searchUsers('javascript'));

    const state = store.getState().common.errors;

    expect(state)
      .toEqual({
        [actionTypes.SEARCH_USERS]: testResault
      });
  });
});
