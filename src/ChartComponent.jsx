import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Инициализация графика
    const chart = echarts.init(chartRef.current);

    // Опции графика (пример: линейный график)
    const options = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
    };

    // Установка опций
    chart.setOption(options);

    // Очистка при размонтировании
    return () => {
      chart.dispose();
    };
  }, []); // Пустой массив зависимостей, чтобы эффект запускался только один раз

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default ChartComponent;
