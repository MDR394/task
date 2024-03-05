import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function PieChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: [
          "50% - PRESALE",
          "30% - STAKING AND CAPITATION REWARD",
          "10% - DEX",
          "10% - COMMUNITY REWARD",
        ],
        datasets: [
          {
            label: "Numbers",
            data: [490, 300, 100, 100],
            backgroundColor: [
              "#3399FE",
              "rgb(255, 99, 132)",
              "#F8A243",
              "#44FF50",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: "bottom",
            align: "start",
            labels: {
              color: "white",
            },
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
      <canvas ref={chartRef} style={{ width: "300px", height: "300px" }} />
    </div>
  );
}

export default PieChart;
