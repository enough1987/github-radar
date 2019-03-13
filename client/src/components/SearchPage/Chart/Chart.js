import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { sortArrayByfield } from '../../../utils';

let CanvasJS = require('../../../assets/canvasjs.min');
CanvasJS = CanvasJS.Chart ? CanvasJS : window.CanvasJS;

export class Chart extends Component {
    renderColumnChart = () => {
      const sortedList = this.props.userList.sort(sortArrayByfield('stars'));

      const dataPoints = sortedList.map((item) => {
        return {
          label: item.name,
          y: item.stars
        };
      });

      var chart = new CanvasJS.Chart('chartColumnContainer', {
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
      });
      chart.render();
    }

    componentDidMount () {
      this.renderColumnChart();
    }

    componentDidUpdate () {
      this.renderColumnChart();
    }

    render () {
      return (
          <div className="row" style={ { paddingTop: 10 } }
            data-test="data-chart" >
              <div id="chartColumnContainer"
                style={ { height: '300px', width: '100%' } }>
              </div>
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
