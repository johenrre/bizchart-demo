import React, { Component } from 'react';
import './chart.css';
import { Chart, Geom, Axis, Label, Tooltip, Guide } from 'bizcharts';
import data from './data5';

const { Line, Html } = Guide;

class Chart4 extends Component {
  render() {
    const cols = {
      sales: {
        tickInterval: 20,
      },
    };
    console.log('data', data);

    return (
      <div className="App">
        <Chart height={300} data={data} scale={cols} forceFit>
          <Axis name="time" />
          <Axis name="value" visible={false} />
          <Tooltip
            crosshairs={{
              type: 'y',
            }}
          />
          <Geom
            type="interval"
            position="time*value"
            color={'name'}
            adjust={[
              {
                type: 'dodge',
                marginRatio: 1 / 32,
              },
            ]}
          />
        </Chart>
      </div>
    );
  }
}

export default Chart4;
