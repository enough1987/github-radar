import React from 'react';
import ReactDOM from 'react-dom';

import Searchbox from './Searchbox';

describe('Searchbox ', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Searchbox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
