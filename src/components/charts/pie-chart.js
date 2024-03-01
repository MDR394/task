import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function PieChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(myChartRef, {
      type: 'pie',
      data: {
        labels: ['Jan:600', 'Feb:100', 'Mar:200'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [600, 100, 200],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} style={{ width: '300px', height: '300px' }} />
    </div>
  );
}

export default PieChart;
