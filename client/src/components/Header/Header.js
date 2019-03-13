import React from 'react';
import Navigator from '../Navigator/Navigator';
import { withRouter } from 'react-router';

import './Header.css';

const Header = () => (
    <React.Fragment>
        <div className="header">
            <div className="container">
                <h1>GitHub Radar POC</h1>
                <Navigator />
            </div>
        </div>
    </React.Fragment>
);

export default withRouter(Header);
