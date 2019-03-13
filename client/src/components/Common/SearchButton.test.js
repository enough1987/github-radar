import React from 'react';
import ReactDOM from 'react-dom';

import SearchButton from './SearchButton';

describe('SearchButton ', () => {
  let props;

  beforeEach(() => {
    props = {
      clickHandler: () => {}
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchButton { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
