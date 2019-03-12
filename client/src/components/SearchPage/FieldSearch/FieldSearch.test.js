import React from 'react';
import ReactDOM from 'react-dom';
import FieldSearch from './FieldSearch';

describe('FieldSearch ', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FieldSearch />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
