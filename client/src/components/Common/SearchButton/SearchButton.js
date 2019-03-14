import React from 'react';
import './SearchButton.css';
import PropTypes from 'prop-types';

class SearchButton extends React.Component {
  render () {
    return (
        <div className="button">
            <button type="button" className="github-search" onClick={ this.props.clickHandler }>Search</button>
        </div>
    );
  }
}
SearchButton.propTypes = {
  clickHandler: PropTypes.func.isRequired
};

SearchButton.defaultProps = {
  /* eslint-disable no-console */
  clickHandler: () => { console.error('function is not provided'); }
};

export default SearchButton;
