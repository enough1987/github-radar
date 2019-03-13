import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigator = () => (
    <React.Fragment>
        <div className="navigator">
            <NavLink className="nav-link" activeclassname="active" to="/search/">Search</NavLink>{' | '}
            <NavLink exact className="nav-link" activeclassname="active" to="/about">About</NavLink>{' | '}
            <NavLink exact className="nav-link" activeclassname="active" to="/contact">Contact</NavLink>
        </div>
    </React.Fragment>
);

export default Navigator;
