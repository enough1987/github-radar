import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';

import { findByAttr, storeFactory } from '../../../utils/testUtils';

import List from './List';

describe('List ', () => {
  let setup;
  let defaultProps;
  let sortAction;

  beforeEach(() => {
    sortAction = jest.fn();
    defaultProps = { userList: [], sortAction };

    setup = (props = defaultProps, initialState = {}) => {
      const store = storeFactory(initialState);
      const wrapper = shallow(
          <Router>
              <List { ...props } store={ store } />
          </Router>
      );
      return wrapper;
    };
  });

  afterEach(() => {
    sortAction.mockClear();
  });

  it('renders without crashing', () => {
    const wrapper = setup();
    const component = findByAttr(wrapper, 'search-page');

    expect(component)
      .toBeTruthy();
  });
});
