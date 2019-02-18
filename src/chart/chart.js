import React, { Component } from 'react';
import './chart.css';
import { Chart, Geom, Axis, Tooltip, Legend, Guide } from 'bizcharts';


import data from './data';

class Chart1 extends Component {
  render() {
    const {
      unit = '元/吨钢',
      maxVal = 40,
      showArea = true,
      colors = ['#E87C4E', '#71C8DA'],
    } = this.props;
    const tickLine = {
      lineWidth: 1, // 刻度线宽
      stroke: '#ccc', // 刻度线的颜色
      length: 5, // 刻度线的长度, **原来的属性为 line**,可以通过将值设置为负数来改变其在轴上的方向
    };
    const cols = {
      plan: {
        min: 0, // 定义数值范围的最小值
        max: maxVal, //
        tickCount: 5, // 定义坐标轴刻度线的条数，默认为 5
      },
      happened: {
        min: 0, // 定义数值范围的最小值
        max: maxVal, //
        tickCount: 5, // 定义坐标轴刻度线的条数，默认为 5
      },
    };
    return (
      <div className="App">
        <div className="title">高炉煤气供需平衡图</div>
        <Chart height={340} data={data} scale={cols} padding={[40, 25, 20, 25]} forceFit={true}>
          <Axis name="time" />
          <Axis name="gaolu" tickLine={tickLine} grid={{
              lineStyle: {
                lineDash: null,
                stroke: "#182C52",
                lineWidth: '0.1',
              }
            }} />
          <Axis name="shaojie" visible={true} tickLine={tickLine} grid={{
              lineStyle: {
                lineDash: null,
                stroke: "#182C52",
                lineWidth: '0.1',
              }
            }} />
          <Legend position="top" name={'process'} marker={'hyphen'} />
          <Tooltip
            crosshairs={{
              type: 'line',
            }}
          />

          {showArea && (
            <Geom
              type="area"
              adjustType="stack"
              position="time*gaolu"
              color={['process', colors]}
            />
          )}
          {showArea && (
            <Geom
              type="area"
              adjustType="stack"
              position="time*shaojie"
              color={['process', colors]}
            />
          )}
          <span className='leftUnit'>%</span>
          <span className='rightUnit'>m³/小时</span>
          <Geom
            type="line"
            adjustType="stack"
            position="time*gaolu"
            size={2}
            color={['process', colors]}
          />
          <Geom
            type="line"
            adjustType="stack"
            position="time*shaojie"
            size={2}
            color={['process', colors]}
          />
        </Chart>
      </div>
    );
  }
}

export default Chart1;
