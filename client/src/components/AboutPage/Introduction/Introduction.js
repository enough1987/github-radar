import React from 'react';
import './Introduction.css';

const staticText = "We are experiencing Kanban development, with the from Technical Radar project in EPAM's contribute site.";

const Introduction = (props) => (
    <div className="about-intro">
        <div className="container">
            <h2>Introduction</h2>
            <p className="intro-content">
                { staticText }
            </p>
        </div>
    </div>
);

export default Introduction;
