import React from 'react';
import ReactDOM from 'react-dom';

import Team from './Team';

describe('Team ', () => {
  let props;

  beforeEach(() => {
    props = {
      clickHandler: () => {}
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Team { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
