import React, { Component } from 'react';

import Chart from '../../components/Chart/Chart';

export class TrandsPage extends Component {
  render () {
    return (
        <div className='trands-page-content'
          data-test="trands-page">

            <Chart />

        </div>
    );
  }
}

export default TrandsPage;
