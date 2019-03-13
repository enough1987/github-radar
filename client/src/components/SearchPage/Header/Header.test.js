import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';

describe('Header ', () => {
  let props;

  beforeEach(() => {
    props = {
      onSearch: () => {},
      sort: () => {}
    };
  });

  it('renders without crashing', () => {
    const table = document.createElement('table');
    ReactDOM.render(<Header { ...props } />, table);
    ReactDOM.unmountComponentAtNode(table);
  });
});
