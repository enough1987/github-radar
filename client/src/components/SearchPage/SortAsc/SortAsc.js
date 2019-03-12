import React from 'react';
import { PropTypes } from 'prop-types';

const SortAsc = ({ sort, name }) => (
    <button
      type="button"
      title={ 'sort by ' + name }
      className="link-button"
      onClick={ () => sort(name, 'asc') }>
        <i className="fa fa-sort-up fa-lg"></i>
    </button>
);
SortAsc.propTypes = {
  name: PropTypes.string.isRequired,
  sort: PropTypes.func.isRequired
};

export default SortAsc;
