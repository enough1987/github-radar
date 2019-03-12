import React from 'react';
import ReactDOM from 'react-dom';

import SearchPageNavigator from './SearchPageNavigator';

describe('SearchPageNavigator ', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchPageNavigator />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
