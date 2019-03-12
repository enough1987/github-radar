import React from 'react';
import { PropTypes } from 'prop-types';

let FieldSearch = ({ name, onSearch }) => (
    <div className="input-group">
        <input
          type="search"
          className="form-control"
          placeholder={ name }
          name="field_search"
          title="search in this page"
          onChange={ e => onSearch(e, name) }
        />
    </div>
);
FieldSearch.propTypes = {
  name: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default FieldSearch;
