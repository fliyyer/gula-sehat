import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    const data = {
        labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
        datasets: [
            {
                label: 'Gula Darah',
                data: [90, 85, 100, 75, 95, 80, 70],
                fill: false,
                backgroundColor: '#FF5B5B',
                borderColor: '#FF5B5B',
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default LineChart;
