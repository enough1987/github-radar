import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../../utils/testUtils';
import { Chart } from './Chart';

describe('Chart ', () => {
  /* eslint-disable no-unused-vars */
  let setup;
  let defaultProps;

  beforeEach(() => {
    defaultProps = { /* userList: [] */ };

    setup = (props = defaultProps, initialState = {}) => {
      const store = storeFactory(initialState);
      const wrapper = shallow(<Chart { ...props } store={ store } />);
      return wrapper;
    };
  });

  it('renders without crashing', () => {

  });
});
