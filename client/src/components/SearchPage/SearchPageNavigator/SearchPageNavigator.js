import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

const SearchPageNavigator = () => (
    <React.Fragment>
        <div className="view-navigator" style={ { float: 'right' } }>
            <NavLink exact activeStyle={ { color: '#39c2d7' } } to="/search/list"> List View
            </NavLink>{' | '}
            <NavLink activeStyle={ { color: '#39c2d7' } } to="/search/chart"> Chart View
            </NavLink>
        </div>
    </React.Fragment>
);

export default withRouter(SearchPageNavigator);
