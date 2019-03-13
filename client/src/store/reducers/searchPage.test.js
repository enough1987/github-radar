import { userListReducer } from './searchPage';

describe('searchPage reducer ', () => {
  it('FETCH_USERS, LOAD_USERS, PREV_USERS, NEXT_USERS return payload', () => {
    const results = [
      userListReducer([], { type: 'FETCH_USERS', payload: { test: 'test1' } }),
      userListReducer([], { type: 'LOAD_USERS', payload: { test: 'test2' } }),
      userListReducer([], { type: 'PREV_USERS', payload: { test: 'test3' } }),
      userListReducer([], { type: 'NEXT_USERS', payload: { test: 'test4' } })
    ];
    expect(results)
      .toEqual([
        { test: 'test1' },
        { test: 'test2' },
        { test: 'test3' },
        { test: 'test4' }
      ]);
  });

  it('FETCH_USERS_FAIL, LOAD_USERS_FAIL, PREV_USERS_FAIL, NEXT_USERS_FAIL, SEARCH_USERS_FAIL return error', () => {
    const results = [
      userListReducer([], { type: 'FETCH_USERS_FAIL', error: { test: 'test1' } }),
      userListReducer([], { type: 'LOAD_USERS_FAIL', error: { test: 'test2' } }),
      userListReducer([], { type: 'PREV_USERS_FAIL', error: { test: 'test3' } }),
      userListReducer([], { type: 'NEXT_USERS_FAIL', error: { test: 'test4' } }),
      userListReducer([], { type: 'SEARCH_USERS_FAIL', error: { test: 'test5' } })
    ];
    expect(results)
      .toEqual([
        { test: 'test1' },
        { test: 'test2' },
        { test: 'test3' },
        { test: 'test4' },
        { test: 'test5' }
      ]);
  });

  it('SORT_USERS should sort', () => {
    const result = userListReducer([
      { test: 'test3' }, { test: 'test1' }, { test: 'test2' }
    ], { type: 'SORT_USERS', sortBy: 'test', seq: 'asc' });

    expect(result)
      .toEqual([
        { test: 'test1' },
        { test: 'test2' },
        { test: 'test3' }
      ]);
  });

  it('SEARCH_USERS should return items', () => {
    const result = userListReducer([], { type: 'SEARCH_USERS',
      payload: {
        items: [{
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
      } });

    expect(result)
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
});
