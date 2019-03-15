import { getTrends } from './trendsPage';
import { storeFactory } from '../../utils/testUtils';
import actionTypes from './actionTypes';

describe('trendsPage action ', () => {
  const initialState = {};
  let store;

  beforeEach(() => {
    store = storeFactory(initialState);
  });

  afterEach(() => {
    fetch.resetMocks();
  });

  it('getTrends change state on successfull request', async () => {
    const testResault = [{ data: 'test' }];
    fetch.mockResponseOnce(JSON.stringify(testResault));

    store = storeFactory({
      trendsPage: {
        languageTrends: []
      }
    });
    await store.dispatch(getTrends());

    const state = store.getState().trendsPage.languageTrends;

    expect(state)
      .toEqual(testResault);
  });

  it('getTrends change state on unsuccessfull request', async () => {
    const testResault = 'fake error message';
    fetch.mockReject(testResault);

    store = storeFactory({
      common: {
        errors: []
      }
    });
    await store.dispatch(getTrends());

    const state = store.getState().common.errors;

    expect(state)
      .toEqual({
        [actionTypes.GET_TRENDS]: testResault
      });
  });
});
