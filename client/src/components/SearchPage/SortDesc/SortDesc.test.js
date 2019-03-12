import React from 'react';
import ReactDOM from 'react-dom';

import SortDesc from './SortDesc';

describe('SortDesc ', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SortDesc />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
