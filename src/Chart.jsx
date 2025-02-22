import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

//data initialisation
let base = +new Date(1968, 9, 3);
let oneDay = 24 * 3600 * 1000;
let date = [];
let data = [Math.random() * 300];
for (let i = 1; i < 20000; i++) {
  var now = new Date((base += oneDay));
  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
  data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}

let base1 = +new Date(1986, 9, 3);
let oneDay1 = 24 * 3600 * 1000;
let date1 = [];
let data1 = [Math.random() * 300];
for (let i = 1; i < 20000; i++) {
  var now1 = new Date((base1 += oneDay1));
  date1.push(
    [now1.getFullYear(), now1.getMonth() + 1, now1.getDate()].join('/'),
  );
  data1.push(Math.round((Math.random() - 0.5) * 20 + data1[i - 1]));
}

console.log(data);

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Инициализация графика
    const chart = echarts.init(chartRef.current);
    // Опции графика (пример: линейный график)
    const options = {
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        },
      },
      legend: {
        show: 'true',
        pageButtonPosition: 'start',
        bottom: 'top',
      },
      title: {
        left: 'center',
        text: 'Диаграмма значений',
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date,
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 100,
        },
        {
          start: 0,
          end: 100,
        },
      ],
      series: [
        {
          name: 'Random Data1',
          type: 'line',
          symbol: 'none',
          sampling: 'lttb',
          itemStyle: {
            color: 'rgb(255, 70, 131)',
          },
          // areaStyle: {
          //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //     {
          //       offset: 0,
          //       color: 'rgb(255, 158, 68)',
          //     },
          //     {
          //       offset: 1,
          //       color: 'rgb(255, 70, 131)',
          //     },
          //   ]),
          // },
          data: data,
        },
        {
          name: 'Random Data2',
          type: 'line',
          symbol: 'none',
          sampling: 'lttb',
          itemStyle: {
            color: 'rgb(70, 70, 131)',
          },
          // areaStyle: {
          //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //     {
          //       offset: 0,
          //       color: 'rgb(255, 158, 68)',
          //     },
          //     {
          //       offset: 1,
          //       color: 'rgb(255, 70, 131)',
          //     },
          //   ]),
          // },
          data: data1,
        },
      ],
    };

    // Установка опций
    chart.setOption(options);

    // Очистка при размонтировании
    return () => {
      chart.dispose();
    };
  }, [data]); // Пустой массив зависимостей, чтобы эффект запускался только один раз

  return <div ref={chartRef} style={{ width: '100%', height: '600px' }} />;
};

export default ChartComponent;
