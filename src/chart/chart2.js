import React, { Component } from 'react';
import './chart.css';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';

import data from './data2';

class Chart2 extends Component {
  render() {
    const { unit = '元/吨钢', maxVal = 14, colors = ['#E87C4E', '#71C8DA'] } = this.props;

    const cols = {
      value: {
        min: 0, // 定义数值范围的最小值
        max: maxVal, //
        tickCount: 5, // 定义坐标轴刻度线的条数，默认为 5
      },
      pressure: {
        min: 0, // 定义数值范围的最小值
        max: 3, //
        tickCount: 5, // 定义坐标轴刻度线的条数，默认为 5
      },
    };
    return (
      <div className="App">
        <Chart height={165} data={data} scale={cols} padding={[40, 30, 20, 40]} forceFit>
          <Axis name="time" />
          <Axis name="value" />
          <Tooltip
            crosshairs={{
              type: 'y',
            }}
          />

          <span className="leftUnit">%</span>
          <span className="rightUnit">m³/小时</span>
          <Geom
            type="line"
            position="time*value"
            size={2}
            color={['process', colors]}
            shape={'hv'}
          />
          <Geom
            type="line"
            position="time*pressure"
            size={1}
            color={colors[1]}
            shape="smooth"
          />
        </Chart>
      </div>
    );
  }
}

export default Chart2;
