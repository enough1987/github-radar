import React, { Fragment, Component } from 'react';

// TODO: it is not used
export const loadingDefer = ms => {
  const promise = new Promise((resolve, reject) => {
    ms = ms || 2000; // default is 2 seconds
    setTimeout(() => resolve('user-login'), ms);
  });
  return promise;
};

export const isEmpty = prop => {
  return prop === null || prop === undefined ||
    (prop.hasOwnProperty('length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0);
};

export const areEqualShallow = (a, b) => {
  for (let key in a) {
    if (!(key in b) || a[key] !== b[key]) {
      return false;
    }
  }
  for (let key in b) {
    if (!(key in a)) {
      return false;
    }
  }
  return true;
};

// TODO: it is not used
export const Loading = loadingProp => WrappedComponent => {
  return class Loading extends Component {
    render () {
      return isEmpty(this.props[loadingProp])
        ? <Fragment>
            <div className="loader"/>
        </Fragment>
        : <WrappedComponent { ...this.props }/>;
    }
  };
};

export const sortArrayByfield = (field) => (a, b) => {
  if (a[field] < b[field]) { return -1; }
  if (a[field] > b[field]) { return 1; }
  return 0;
};

export const searchFields = (state, field, keyword) => {
  return state.filter(ul => ul[field] && ul[field].toLowerCase().indexOf(keyword) !== -1);
};
