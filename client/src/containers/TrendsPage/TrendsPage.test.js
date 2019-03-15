import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';

import { findByAttr, storeFactory } from '../../utils/testUtils';
import TrendsPage from './TrendsPage';

describe('TrendsPage ', () => {
  let setup;
  let defaultProps;

  beforeEach(() => {
    defaultProps = { children: <div data-test="trends-chield" ></div> };

    setup = (props = defaultProps, initialState = {}) => {
      const store = storeFactory(initialState);
      const wrapper = shallow(
          <Router>
              <TrendsPage { ...props } store={ store } />
          </Router>
      );
      return wrapper;
    };
  });

  it('renders without crashing', () => {
    const wrapper = setup();
    const component = findByAttr(wrapper, 'trends-page');

    expect(component)
      .toBeTruthy();
  });
});
