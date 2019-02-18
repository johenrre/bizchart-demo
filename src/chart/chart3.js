import React, { Component } from 'react';
import './chart.css';
import { Chart, Geom, Axis, Coord, Tooltip } from 'bizcharts';

import DataSet from '@antv/data-set'

import data from './data3';

class Chart3 extends Component {
  render() {
    const {
			unit = '元/吨钢',
			colors = ['#3023AE', '#53A0FD', '#B4EC51'],
			valueFormatter = val => `${val.toFixed(2) + ' ' + unit}`,
    } = this.props

		const ds = new DataSet()
    const dv = ds.createView().source(data)
  
		dv.transform({
			type: 'map',

			callback(row) {
				// 加工数据后返回新的一行，默认返回行数据本身
				row.range = [row.lowest, row.highest]
				row.val = valueFormatter(row.highest - row.lowest)
				return row
			},
    })

    const cols = {
      range: {
        min: 0, // 定义数值范围的最小值
      },
    };
    console.log('dv', dv);

    return (
      <div className="App">
        <Chart
          height={165}
          data={dv}
          padding={[30, 65, 30, 70]}
          forceFit
        >
          {/* <Coord transpose={true} /> */}
          {/* {旋转用的} */}
          <Tooltip
            g2-tooltip={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: '#fff',
            }}
          />
          <Axis
            name="yAxis"
            visible={false}
            label={{
              textStyle: val => {
                const style = { display: 'none' };
                if (val === '购入量' || val === '使用量') {
                  style.fill = colors[2];
                  style.fontSize = '17';
                }
                return style;
              },
            }}
          />
          <Axis name="range" visible={false} />
          <Geom
            type="interval"
            size={40}
            position="yAxis*range"
            color={colors[1]}
          ></Geom>
        </Chart>
      </div>
    );
  }
}

export default Chart3;
