import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';

import { findByAttr, storeFactory } from '../../utils/testUtils';
import TrandsPage from './TrandsPage';

describe('TrandsPage ', () => {
  let setup;
  let defaultProps;

  beforeEach(() => {
    defaultProps = { children: <div data-test="trands-chield" ></div> };

    setup = (props = defaultProps, initialState = {}) => {
      const store = storeFactory(initialState);
      const wrapper = shallow(
          <Router>
              <TrandsPage { ...props } store={ store } />
          </Router>
      );
      return wrapper;
    };
  });

  it('renders without crashing', () => {
    const wrapper = setup();
    const component = findByAttr(wrapper, 'trands-page');

    expect(component)
      .toBeTruthy();
  });
});
