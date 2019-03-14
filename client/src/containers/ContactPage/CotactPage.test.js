import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';

import { findByAttr, storeFactory } from '../../utils/testUtils';
import ContactPage from './ContactPage';

describe('ContactPage ', () => {
  let setup;

  beforeEach(() => {
    setup = (initialState = {}) => {
      const store = storeFactory(initialState);
      const wrapper = shallow(
          <Router>
              <ContactPage store={ store } />
          </Router>
      );
      return wrapper;
    };
  });

  it('renders without crashing', () => {
    const wrapper = setup();
    const component = findByAttr(wrapper, 'contact-page');

    expect(component)
      .toBeTruthy();
  });
});
