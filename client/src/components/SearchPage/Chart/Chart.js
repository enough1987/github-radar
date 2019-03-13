import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import userListMock from '../../../assets/userList';

import CanvasJSReact from '../../../assets/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class Chart extends Component {
  getChartOptions = () => {
    const options = [];

    Object.entries(userListMock).forEach(
      ([key, list], index) => {
        const dataPoints = list.map((item) => {
          return {
            x: new Date(item.date),
            y: item.stars
          };
        });
        options[index] = {
          name: key,
          dataPoints
        };
      }
    );

    console.log(options);

    return {
      theme: 'light2',
      animationEnabled: true,
      title: {
        text: 'Spline chart'
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor: 'pointer',
        itemclick: this.toggleDataSeries
      },
      data: [{
        type: 'spline',
        name: options[0].name,
        showInLegend: true,
        xValueFormatString: 'MMM YYYY',
        yValueFormatString: '#,##0',
        dataPoints: options[0].dataPoints
      },
      {
        type: 'spline',
        name: options[1].name,
        showInLegend: true,
        xValueFormatString: 'MMM YYYY',
        yValueFormatString: '#,##0',
        dataPoints: options[1].dataPoints
      },
      {
        type: 'spline',
        name: options[2].name,
        showInLegend: true,
        xValueFormatString: 'MMM YYYY',
        yValueFormatString: '#,##0',
        dataPoints: options[2].dataPoints
      },
      {
        type: 'spline',
        name: options[3].name,
        showInLegend: true,
        xValueFormatString: 'MMM YYYY',
        yValueFormatString: '#,##0',
        dataPoints: options[3].dataPoints
      },
      {
        type: 'spline',
        name: options[4].name,
        showInLegend: true,
        xValueFormatString: 'MMM YYYY',
        yValueFormatString: '#,##0',
        dataPoints: options[4].dataPoints
      }
      ]
    };
  }

  render () {
    const chartOptions = this.getChartOptions();

    return (
        <div className="row" style={ { paddingTop: 10 } }
          data-test="data-chart" >
            <CanvasJSChart options = { chartOptions }
              /* onRef = {ref => this.chart = ref} */
            />
        </div>
    );
  }
}

Chart.propTypes = {
  userList: PropTypes.arrayOf(
    PropTypes.object
  )// .isRequired // TODO: with real data change to required
};

Chart.defaultProps = {
  userList: []
};

const mapStateToProps = (state) => {
  return {
    userList: state.userList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);
