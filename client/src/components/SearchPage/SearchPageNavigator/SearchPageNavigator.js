import React from 'react';
import { NavLink } from 'react-router-dom';

const SearchPageNavigator = () => (
    <React.Fragment>
        <div className="view-navigator" style={ { float: 'right' } }>
            <NavLink exact activeStyle={ { color: '#222' } } to="/search/list"> List View
            </NavLink>{' | '}
            <NavLink activeStyle={ { color: '#222' } } to="/search/chart"> Chart View
            </NavLink>
        </div>
    </React.Fragment>
);

export default SearchPageNavigator;
