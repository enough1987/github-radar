import React from 'react';
import ReactDOM from 'react-dom';

import AboutPage from './AboutPage';

describe('AboutPage ', () => {
  let props;

  beforeEach(() => {
    props = {
      clickHandler: () => {}
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AboutPage { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
