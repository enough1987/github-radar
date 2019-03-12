import React from 'react';
import { Navigator } from '../components';
import '../assets/css/components/header.css';

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

export default Header;
