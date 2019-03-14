import { isLoadingAction } from './common';
import { storeFactory } from '../../utils/testUtils';

describe('common action ', () => {
  const initialState = {};
  let store;

  beforeEach(() => {
    store = storeFactory(initialState);
  });

  afterEach(() => {
  });

  it('isLoadingAction change state', async () => {
    store = storeFactory({
    });
    await store.dispatch(isLoadingAction(true, 'test'));

    const state = store.getState().common.loading;

    expect(state)
      .toEqual({
        'test': true
      });
  });
});
