import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';

describe('Header ', () => {
  
  let props;

  beforeEach(() => {
    props = { 
      onSearch: ()=> {},
      sort: ()=> {}
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
