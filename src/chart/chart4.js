import React, { Component } from 'react';
import './chart.css';
import { Chart, Geom, Axis, Label, Tooltip, Guide } from 'bizcharts';
import data from './data4';

const { Line, Html } = Guide


class Chart4 extends Component {
  render() {
    const cols = {
      sales: {
        tickInterval: 20,
      },
    };

    return (
      <div className="App">
        <Chart height={400} data={data} scale={cols} forceFit>
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
            color={[
              'value',
              value => {
                if (value > 60) {
                  return 'rgba(123, 147, 187, 1)';
                }

                return 'rgba(19, 188, 210, 1)';
              },
            ]}
          >
            <Label content="value" offset={9} />
          </Geom>

          <Guide>
              <Line
                start={(xScale, yScale) => {
                  return [xScale.time.values[0], 50]
                }}
                end={(xScale, yScale) => {
                  const l = xScale.time.values.length
                  return [xScale.time.values[l - 1], 50]
                }}
                lineStyle={{
                  stroke: 'rgba(123, 147, 187, 1)', // 线的颜色
                }}
              />
          </Guide>
        </Chart>
      </div>
    );
  }
}

export default Chart4;
