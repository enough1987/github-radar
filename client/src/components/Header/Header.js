import React from 'react';
import Navigator from '../Navigator/Navigator';
import { withRouter } from 'react-router';

import './Header.css';

const headerLogoImage = require('../../assets/images/logo_white-blue.svg');

const Header = () => (
    <React.Fragment>
        <div className="header">
            <div className="header-fixed">
                <div className="container">
                    <img className="header_logo" src={ headerLogoImage } alt="Logo" />
                    <span className="header-cut-line">|</span>
                    <h1>GitHub Radar POC</h1>
                    <Navigator />
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default withRouter(Header);
