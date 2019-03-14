import React, { Component } from 'react';
import Introduction from '../../components/AboutPage/Introduction/Introduction';
import Feature from '../../components/AboutPage/Feature/Feature';
import Team from '../../components/AboutPage/Team/Team';
import './AboutPage.css';

export default class AboutPage extends Component {
  render () {
    return (
        <div className="about">
            <Introduction />
            <Feature />
            {/* <Team /> */}
        </div>
    );
  }
}
