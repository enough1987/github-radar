import React from 'react';
import ReactDOM from 'react-dom';

import Introduction from './Introduction';

describe('Introduction ', () => {
  let props;

  beforeEach(() => {
    props = {
      clickHandler: () => {}
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Introduction { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
