import React, { Component } from 'react';
import './ContactPage.css';

export class ContactPage extends Component {
  render () {
    return (
        <div className='contact-page-content'
          data-test="contact-page">
            <div className="title">Contact Us</div>
            <div className="content">
                <p className="team-info">EPAM GitHub Radar Delivery Team</p>
                <p className="address-info">3/F, Block 5, Vision Shenzhen Business Park,9th Gaoxin South Road,
                    <br />Shenzhen Hi-tech Industrial Park,Nanshan District,
                    <br />Shenzhen,Guangdong, China 518057</p>
                <a className="address-info__office-map" href="http://j.map.baidu.com/U-9oO"><strong>MAP</strong></a>
                <p className="phone-info">P: +86-755-36899008</p>
            </div>
        </div>
    );
  }
}

export default ContactPage;
