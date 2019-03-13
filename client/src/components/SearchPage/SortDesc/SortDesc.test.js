import React from 'react';
import ReactDOM from 'react-dom';

import SortDesc from './SortDesc';

describe('SortDesc ', () => {

  let props;

  beforeEach(() => {
    props = { name: 'desc', sort: ()=> {} };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SortDesc { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
