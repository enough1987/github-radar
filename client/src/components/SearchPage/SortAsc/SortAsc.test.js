import React from 'react';
import ReactDOM from 'react-dom';

import SortAsc from './SortAsc';

describe('SortAsc ', () => {
  let props;

  beforeEach(() => {
    props = { name: 'desc', sort: () => {} };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SortAsc { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
