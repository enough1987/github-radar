import React from 'react';
import ReactDOM from 'react-dom';

import Searchbox from './Searchbox';

describe('Searchbox ', () => {
    
  let props;

  beforeEach(() => {
    props = { 
      onChange: ()=> {}
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Searchbox  { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
