/* eslint react/no-array-index-key: 0 */ // --> OFF
import React from 'react';
import PropTypes from 'prop-types';
import SearchButton from '../Common/SearchButton/SearchButton.js';

import Languages from '../../assets/languages';

class Searchbox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  render () {
    return (
        <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              name="global_search"
              alt="search all data source"
              onChange={ this.handleChange }
              ref={ /* eslint-disable no-return-assign */
                input => this.inputRef = input
              }
            />
            <div className="input-group-btn">
                <SearchButton clickHandler={ this.handleClick }>
                </SearchButton>
            </div>

            <select onChange={ this.handleSelectChange }>
                <option value="">--Languages--</option>
                {Languages.map((key, index) => (
                    <option key={ `${index}-${key}` } value={ key }>
                        {key}
                    </option>
                ))}
            </select>
        </div>
    );
  }

  handleSelectChange = e => {
    const val = e.target.value;
    if (val) {
      this.inputRef.value = e.target.value;
      this.setState({ search: e.target.value });
    } else {
      this.inputRef.value = '';
    }
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  }

  handleClick = e => {
    if (this.state.search) {
      this.props.onChange(this.state.search);
    } else {
      /* eslint-disable no-console */
      console.log('Please input searching creteria.');
    }
    e.preventDefault();
  }
}

Searchbox.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Searchbox;
