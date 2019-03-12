import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Searchbox from '../../components/Searchbox/Searchbox';
import SearchPageNavigator from '../../components/SearchPage/SearchPageNavigator/SearchPageNavigator';
import * as ListAction from '../../store/actions/searchPage';

export class SearchPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isSearching: false
    };
  }

    handleGlobalSearch = value => {
      this.props.searchUsers(value)
        .then(() => this.setState({ isSearching: true }))
        .catch(() => this.setState({ isSearching: true }));
    }

    render () {
      return (
          <div className="container" style={ { paddingTop: 48 } }>
              <div className="row">
                  <div className="col-md-10">
                      <SearchPageNavigator />
                      <Searchbox onChange={ this.handleGlobalSearch }/>
                  </div>
              </div>
              { this.props.children }

          </div>
      );
    }
}

SearchPage.propTypes = {
  children: PropTypes.object.isRequired,
  searchUsers: PropTypes.func.isRequired
};

SearchPage.defaultProps = {
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ListAction, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(SearchPage);
