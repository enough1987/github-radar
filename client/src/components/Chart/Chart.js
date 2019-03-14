/* eslint react/no-array-index-key: 0 */ // --> OFF
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import './Chart.css';
import userListMock from '../../assets/userList';
import * as ListAction from '../../store/actions/trandsPage';

import CanvasJSReact from '../../assets/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const colors = ['#56e2a3', '#c5f722', '#3f587f', '#f76e4c', '#f7f44c'];

export class Chart extends Component {
  constructor (props) {
    super(props);

    this.props.getTrands();
  }

  getChartOptions = () => {
    const options = [];

    Object.entries(userListMock).forEach(
      ([key, list], index) => {
        const dataPoints = list.map((item) => {
          return {
            label: item.date,
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
      // https://canvasjs.com/docs/charts/basics-of-creating-html5-chart/formatting-date-time/
      theme: 'light2',
      animationEnabled: true,
      title: {
        text: 'Language trands'
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor: 'pointer',
        itemclick: this.toggleDataSeries
      },
      axisX: {
        valueFormatString: 'YYYY',
        labelAngle: -50
      },
      data: options.map((item, index) => {
        return {
          type: 'spline',
          name: item.name,
          color: colors[index],
          showInLegend: true,
          dataPoints: item.dataPoints
        };
      })
    };
  }

  /* // TODO: remove
  getListOfNames = (chartOptions) => {
    return chartOptions.data.map((item, index) => {
      return <div key={ index } >
          <b style={ { color: colors[index] } } > - </b>
          { item.name }
      </div>;
    });
  }
  */

  render () {
    const chartOptions = this.getChartOptions();

    /* eslint-disable no-console */
    console.log(this.props.languageTrands, this.props);

    return (
        <div className="data-chart-container row" style={ { paddingTop: 45 } }
          data-test="data-chart" >
            <CanvasJSChart options = { chartOptions }
              /* onRef = {ref => this.chart = ref} */
            />
        </div>
    );
  }
}

Chart.propTypes = {
  languageTrands: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  getTrands: PropTypes.func.isRequired,
  /* eslint-disable react/no-unused-prop-types */
  errors: PropTypes.object,
  /* eslint-disable react/no-unused-prop-types */
  loading: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    languageTrands: state.trandsPage.languageTrands,
    errors: state.common.errors,
    loading: state.common.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ListAction, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);
