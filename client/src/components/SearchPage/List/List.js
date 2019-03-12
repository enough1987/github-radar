/* eslint react/no-array-index-key: 0 */ // --> OFF
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as ListAction from '../../../store/actions';
import { searchFields } from '../../../store/reducers';
import Header from '../Header/Header';
import Detail from '../Detail/Detail';

export class List extends Component {
    state = {
      totalPage: 1,
      totalUsers: 0,
      searchValue: '',
      searchField: '',
      done: false
    };

    handleSearch = (e, field) => {
      let keyword = e.target.value;
      if (keyword) {
        this.setState({ searchValue: keyword.trim().toLowerCase(), searchField: field });
      } else {
        this.setState({ searchValue: '', searchField: '' });
      }
      e.preventDefault();
    }

    render () {
      const { userList, sortAction } = this.props;
      const { searchValue, searchField } = this.state;
      let list = []; let totalIdx = 0;
      if (searchField && searchValue) {
        list = searchFields(userList, searchField, searchValue) || [];
      } else {
        list = userList || [];
        totalIdx = list.length;
      }

      return (
          <div className="row" style={ { paddingTop: 10 } }>
              <table className="table table-bordered">
                  <Header sort={ sortAction } onSearch={ this.handleSearch }/>
                  <tbody>
                      {Array.isArray(list) && list.map((item, i) => (
                          <Detail
                            key={ i + totalIdx }
                            item={ item }
                            idx={ i }
                          />
                      ))}
                  </tbody>
              </table>
          </div>
      );
    }
}

List.propTypes = {
  userList: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  sortAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    userList: state.userList,
    total: state.total
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ListAction, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
