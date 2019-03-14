/* eslint react/no-array-index-key: 0 */ // --> OFF
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import './Chart.css';
import userListMock from '../../../assets/userList';

import CanvasJSReact from '../../../assets/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const colors = [ '#3f587f', '#56e2a3', '#c5f722', '#f76e4c', '#f7f44c' ];

export class Chart extends Component {
  getChartOptions = () => {
    const options = [];

    Object.entries(userListMock).forEach(
      ([key, list], index) => {
        const dataPoints = list.map((item) => {
          return {
            x: new Date(item.date),
            y: item.total_count
          };
        });
        options[index] = {
          name: key,
          dataPoints
        };
      }
    );

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
      data: options.map((item, index) => {
        return {
          type: 'spline',
          name: item.name,
          color: colors[index],
          showInLegend: true,
          xValueFormatString: 'MMM YYYY',
          yValueFormatString: '#,##0',
          dataPoints: item.dataPoints
        };
      })
    };
  }

  getListOfNames = (chartOptions) => {
    return chartOptions.data.map((item, index) => {
      return <div key={ index }
        style={ { color: colors[index] } }>
          { '- ' + item.name }
      </div>;
    });
  }

  render () {
    const chartOptions = this.getChartOptions();
    const listOfNames = this.getListOfNames(chartOptions);

    return (
        <div className="row" style={ { paddingTop: 10 } }
          data-test="data-chart" >
            <div className="chart-left col-10" >
                <CanvasJSChart options = { chartOptions }
                /* onRef = {ref => this.chart = ref} */
                />
            </div>
            <div className="chart-right col-2">
                { listOfNames }
            </div>
        </div>
    );
  }
}

Chart.propTypes = {
  // userList: PropTypes.arrayOf(
  //  PropTypes.object
  // ).isRequired // TODO: with real data change to required
};

Chart.defaultProps = {
  // userList: []
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
