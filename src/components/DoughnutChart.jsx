import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = ({ value, label, color }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const data = {
      datasets: [
        {
          data: [value, 100 - value],
          backgroundColor: [color, '#e0e0e0'],
          borderWidth: 0,
        },
      ],
    };

    const options = {
      cutout: '70%',
      plugins: {
        tooltip: {
          enabled: false,
        },
      },
    };

    if (chartRef.current) {
      chartInstance = new Chart(chartRef.current, {
        type: 'doughnut',
        data: data,
        options: options,
      });
      chartRef.current.chartInstance = chartInstance;
    }
    return () => {
      if (chartRef.current && chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, [value, color]);

  return (
    <div className="relative flex flex-col justify-center items-center w-52 h-52">
      <canvas ref={chartRef} />
      <div className="absolute bottom-[100px] flex items-center justify-center">
        <span className="text-4xl font-bold">{value}%</span>
      </div>
      <div className="text-center mt-6">
        <p className="text-lg text-[#464255] font-semibold">{label}</p>
      </div>
    </div>
  );
};

export default DoughnutChart;
