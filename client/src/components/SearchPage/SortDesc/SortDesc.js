import React from 'react';
import { PropTypes } from 'prop-types';

const SortDesc = ({ sort, name }) => (
    <button
      type="button"
      title={ 'sort by ' + name + ' desc' }
      className="link-button"
      onClick={ () => sort(name, 'desc') }>
        <i className="fa fa-sort-down fa-lg"></i>
    </button>
);
SortDesc.propTypes = {
  name: PropTypes.string.isRequired,
  sort: PropTypes.func.isRequired
};

export default SortDesc;
