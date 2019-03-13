import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { sortArrayByfield } from '../../../utils';

import CanvasJSReact from '../../../assets/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class Chart extends Component {
  getChartOptions = () => {
    const sortedList = this.props.userList.sort(sortArrayByfield('stars'));

    const dataPoints = sortedList.map((item) => {
      return {
        label: item.name,
        y: item.stars
      };
    });

    return {
      title: {
        text: 'Column chart'
      },
      data: [
        {
          type: 'column',
          bevelEnabled: true,
          indexLabelPlacement: 'inside',
          dataPoints
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
  ).isRequired
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
