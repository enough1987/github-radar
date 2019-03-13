import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import SearchPageNavigator from './SearchPageNavigator';

describe('SearchPageNavigator ', (shouldDisplay) => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router>
        <SearchPageNavigator />
    </Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
