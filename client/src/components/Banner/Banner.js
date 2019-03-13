import React from 'react';
import './Banner.css';

const Banner = () => (
    <React.Fragment>
        <div className="banner">
            <video className="background-video__container" autoPlay muted loop playsInline src="https://www.epam.com/content/dam/epam/homepage/iStock-916257392.mp4"></video>
            <p className="text">Find What You Need</p>
        </div>
    </React.Fragment>
);

export default Banner;
