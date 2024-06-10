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
        <div className="relative flex flex-col justify-center items-center w-36 h-36">
            <canvas ref={chartRef} />
            <div className="absolute bottom-16 flex items-center justify-center">
                <span className="text-2xl font-bold">{value}%</span>
            </div>
            <div className="text-center mt-2">
                <p className="text-sm font-medium">{label}</p>
            </div>
        </div>
    );
};

export default DoughnutChart;
