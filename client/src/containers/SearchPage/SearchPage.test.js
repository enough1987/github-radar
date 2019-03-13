import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';

import { findByAttr, storeFactory } from '../../utils/testUtils';
import SearchPage from './SearchPage';

describe('SearchPage ', () => {
  let setup;
  let defaultProps;
  let searchUsers;

  beforeEach(() => {
    searchUsers = jest.fn();
    defaultProps = { children: <div data-test="search-chield" ></div>, searchUsers };

    setup = (props = defaultProps, initialState = {}) => {
      const store = storeFactory(initialState);
      const wrapper = shallow(
          <Router>
              <SearchPage { ...props } store={ store } />
          </Router>
      );
      return wrapper;
    };
  });

  it('renders without crashing', () => {
    const wrapper = setup();
    const component = findByAttr(wrapper, 'search-page');

    expect(component)
      .toBeTruthy();
  });
});
