import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';

import { findByAttr } from '../../utils/testUtils';
import App from './App';

describe('App ', () => {
  let setup;
  let defaultProps;

  beforeEach(() => {
    defaultProps = { };

    setup = (props = defaultProps) => {
      const wrapper = shallow(
          <Router>
              <App { ...props } />
          </Router>
      );
      return wrapper;
    };
  });

  it('renders without crashing', () => {
    const wrapper = setup();
    const component = findByAttr(wrapper, 'App');

    expect(component)
      .toBeTruthy();
  });
});
