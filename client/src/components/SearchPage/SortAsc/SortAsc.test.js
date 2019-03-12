import React from 'react';
import ReactDOM from 'react-dom';

import SortAsc from './SortAsc';

describe('SortAsc ', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SortAsc />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
