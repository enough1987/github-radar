import { searchPageReducer } from './searchPage';

describe('searchPage reducer ', () => {
  it('SORT_USERS should sort', () => {
    const result = searchPageReducer({
      userList: [{ test: 'test3' }, { test: 'test1' }, { test: 'test2' }]
    },
    { type: 'SORT_USERS', sortBy: 'test', seq: 'asc' }
    ).userList;

    expect(result)
      .toEqual([
        { test: 'test1' },
        { test: 'test2' },
        { test: 'test3' }
      ]);
  });

  it('SEARCH_USERS should return items', () => {
    const result = searchPageReducer({ userList: [] }, { type: 'SEARCH_USERS',
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
      }
    }).userList;

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
