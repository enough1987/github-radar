import { trendsPageReducer } from './trendsPage';
import actionTypes from '../actions/actionTypes';

describe('trendsPage reducer ', () => {
  it('GET_TRENDS should return trends', () => {
    const trends = [{ 'language': 'javascript',
      'results': [
        { 'total_Count': 7460, 'date': '2009' },
        { 'total_Count': 20924, 'date': '2010' },
        { 'total_Count': 53746, 'date': '2011' },
        { 'total_Count': 121447, 'date': '2012' },
        { 'total_Count': 270039, 'date': '2013' },
        { 'total_Count': 427260, 'date': '2014' },
        { 'total_Count': 689296, 'date': '2015' },
        { 'total_Count': 1108564, 'date': '2016' },
        { 'total_Count': 1645594, 'date': '2017' },
        { 'total_Count': 2280057, 'date': '2018' }
      ]
    }];
    const result = trendsPageReducer({ languageTrends: [] }, { type: actionTypes.GET_TRENDS,
      payload: trends
    }).languageTrends;

    expect(result)
      .toEqual(trends);
  });
});
