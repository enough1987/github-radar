import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Searchbox from '../../components/Searchbox/Searchbox';
import * as ListAction from '../../store/actions/searchPage';
import Banner from '../../components/Banner/Banner';
import Loader from '../../components/Loader/Loader';

export class SearchPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isSearching: false,
      displayBanner: true,
      loading: false
    };
  }

    handleGlobalSearch = value => {
      this.setState({
        displayBanner: false,
        loading: true
      });
      this.props.searchUsers(value)
        .then(() => this.setState({ isSearching: true, loading: false }))
        .catch(() => this.setState({ isSearching: true, loading: false }));
    }

    render () {
      return (
          <div className={ 'search-page-content' + (this.state.displayBanner ? '' : '-full-view') }
            data-test="search-page">
              { this.state.loading && <Loader/> }
              { this.state.displayBanner && <Banner/> }
              <div className={ 'row' + (this.state.displayBanner ? ' search-box' : '') }>
                  <div className="col-md-10">
                      <Searchbox onChange={ this.handleGlobalSearch } />
                  </div>
              </div>
              { !this.state.displayBanner && this.props.children }
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

export default withRouter(connect(
  null,
  mapDispatchToProps
)(SearchPage));
