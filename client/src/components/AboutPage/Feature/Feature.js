import React from 'react';
import './Feature.css';

const Feature = () => (
    <div className="about-feature">
        <h2>Technologies</h2>
        <div className="feature-content">
            <div className="row">
                <div className="feature-item">
                    <div className="feature-item-icon">
                        <i className="fa fa-database"></i>
                    </div>
                    <div className="feature-item-desc">
                        <h4>GraphQL</h4>
                        <p>A query language for APIs and a runtime for fulfilling those queries with your existing data.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-item-icon">
                        <i className="fa fa-bar-chart"></i>
                    </div>
                    <div className="feature-item-desc">
                        <h4>D3 and charts</h4>
                        <p>Something about D3 and charts</p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-item-icon">
                        <i className="fa fa-jsfiddle"></i>
                    </div>
                    <div className="feature-item-desc">
                        <h4>React</h4>
                        <p>Redux<br/>React-router-dom<br/>Redux-form</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="feature-item">
                    <div className="feature-item-icon">
                        <i className="fa fa-server"></i>
                    </div>
                    <div className="feature-item-desc">
                        <h4>Microservices</h4>
                        <p>An architectural style that structures an application as a collection of services.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-item-icon">
                        <i className="fa fa-server"></i>
                    </div>
                    <div className="feature-item-desc">
                        <h4>Kafka</h4>
                        <p>A distributed streaming platform.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-item-icon">
                        <i className="fa fa-server"></i>
                    </div>
                    <div className="feature-item-desc">
                        <h4>Spark</h4>
                        <p>Something about Spark</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Feature;
