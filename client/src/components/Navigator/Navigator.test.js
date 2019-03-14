import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigator from './Navigator';

describe('Navigator ', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router>
        <Navigator />
    </Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
