import React from 'react';
import ReactDOM from 'react-dom';
import FieldSearch from './FieldSearch';

describe('FieldSearch ', () => {
  let props;

  beforeEach(() => {
    props = {
      onSearch: () => {},
      name: 'FieldSearch'
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FieldSearch { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
