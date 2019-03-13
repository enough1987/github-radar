import React from 'react';
import ReactDOM from 'react-dom';

import Detail from './Detail';

describe('Detail ', () => {
  let props;

  beforeEach(() => {
    props = {
      idx: 1,
      item: {},
      onEdit: () => {},
      onDelete: () => {}
    };
  });

  it('renders without crashing', () => {
    const tbody = document.createElement('tbody');
    ReactDOM.render(<Detail { ...props } />, tbody);
    ReactDOM.unmountComponentAtNode(tbody);
  });
});
