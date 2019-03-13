import { sortAction } from './searchPage';
import { storeFactory } from '../../utils/testUtils';

describe('searchPage action ', () => {
  const initialState = [];
  let store;

  beforeEach(() => {
    store = storeFactory(initialState);
  });

  afterEach(() => {
  });

  it('sortAction change state', async () => {
    store = storeFactory({
      userList: [
        { test: 'test2' }, { test: 'test1' }, { test: 'test3' }
      ]
    });
    await store.dispatch(sortAction('test', 'asc'));

    const state = store.getState().userList;

    expect(state)
      .toEqual([
        { test: 'test1' }, { test: 'test2' }, { test: 'test3' }
      ]);
  });
});
