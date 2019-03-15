import React from 'react';
import ReactDOM from 'react-dom';

import Feature from './Feature';

describe('Feature ', () => {
  let props;

  beforeEach(() => {
    props = {
      clickHandler: () => {}
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Feature { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
