import React from 'react';
import { Chart, Axis, Coord, Geom, Guide, Shape } from 'bizcharts';

const { Html, Arc } = Guide;

// 下面的代码会被作为 cdn script 注入 注释勿删
// CDN START
Shape.registerShape('point', 'pointer', {
  drawShape(cfg, group) {
    let point = cfg.points[0]; // 获取第一个标记点
    point = this.parsePoint(point);
    const center = this.parsePoint({ // 获取极坐标系下画布中心点
      x: 0,
      y: 0,
    });
    // 绘制指针
    group.addShape('line', {
      attrs: {
        x1: center.x,
        y1: center.y,
        x2: point.x,
        y2: point.y - 20,
        stroke: cfg.color,
        lineWidth: 5,
        lineCap: 'round',
      },
    });
    return group.addShape('circle', {
      attrs: {
        x: center.x,
        y: center.y,
        r: 12,
        stroke: cfg.color,
        lineWidth: 4.5,
        fill: '#fff',
      },
    });
  },
});

const data = [
  { value: 5.6 },
];
const cols = {
  value: {
    min: 0,
    max: 9,
    tickInterval: 9,
    nice: false,
    // tickCount: 3,
  },
};

class Chart6 extends React.Component {
  render() {
    return (
      <Chart height={400} data={data} scale={cols} padding={[20, 20, 20, 20]} forceFit>
        <Coord type="polar" 
        startAngle={-9 / 8 * Math.PI}  // 开始的角度
        endAngle={1 / 8 * Math.PI}   // 结束的角度
        radius={1} //缩放比例
        />
        <Axis
          name="value"
          zIndex={2}
          line={null}
          // 坐标线样式
          label={{
            offset: -18,
            textStyle: {
              fontSize: 18,
              textAlign: 'center',
              textBaseline: 'middle',
            },
          }}
          // 设置坐标轴文本的样式
          // subTickCount={4}
          // 当前坐标轴次刻度线个数。
          subTickLine={{
            length: -8,
            stroke: 'red',
            strokeOpacity: 1,
          }}
          tickLine={{
            length: -18,
            stroke: 'red',
            strokeOpacity: 1,
          }}
        />
        <Axis name="1" visible={false} />
        <Guide>
          <Arc
            zIndex={0}
            start={[0, 0.5]}
            end={[9, 0.5]}
            style={{ // 底灰色
              stroke: '#CBCBCB',
              lineWidth: 30,
            }}
          />
          <Arc
            zIndex={1}
            start={[0, 0.5]}
            end={[data[0].value, 0.5]}
            style={{
              stroke: '#1890FF',
              lineWidth: 18,
            }}
          />
        </Guide>
        <Geom
          type="point"
          position="value*1"
          shape="pointer"
          color="red"
          active={false}
          style={{ stroke: 'red', lineWidth: 1 }}
        />
      </Chart>
    );
  }
}

export default Chart6;
