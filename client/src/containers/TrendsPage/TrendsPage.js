import React, { Component } from 'react';

import Chart from '../../components/Chart/Chart';

export class TrendsPage extends Component {
  render () {
    return (
        <div className='trends-page-content'
          data-test="trends-page">

            <Chart />

        </div>
    );
  }
}

export default TrendsPage;
