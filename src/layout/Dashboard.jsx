import React from 'react';
import Blood from '../assets/blood.png';
import CardBlood from '../components/CardBlood';
import DoughnutChart from '../components/DoughnutChart';
import LineChart from '../components/LineChart';

const Dashboard = () => {
    return (
        <div className="flex flex-col px-10">
            <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                    <h1 className="text-[32px] font-bold">Dashboard</h1>
                    <p className='text-[#a3a3a3] font-medium'>Hi, Farhan. Welcome back to GulaSehat!</p>
                </div>
                <div>
                    <div className='flex bg-[#FF5B5B] bg-opacity-25 max-w-[293px] rounded-lg cursor-pointer py-1 px-6 items-center gap-6'>
                        <img src={Blood} alt="Blood" />
                        <p className='text-lg font-bold text-[#DA1515]'>Input Gula Darah</p>
                    </div>
                </div>
            </div>
            <main className='grid mt-9 grid-cols-4 gap-6'>
                <CardBlood value={70} desc="Terkini" />
                <CardBlood value={85} desc="Rata-rata" />
                <CardBlood value={100} desc="Tertinggi" />
                <CardBlood value={69} desc="Terendah" />
            </main>
            <section className='flex gap-6 mt-9'>
                <div className='bg-white px-10 py-8 rounded-lg shadow-md'>
                    <p className='text-[#464255] font-bold text-2xl'>Gula Darah Bulan Ini</p>
                    <div className='flex gap-10 mt-5' >
                        <div className='flex flex-col items-center'>
                            <DoughnutChart value={81} label="Tinggi" color="#FF5B5B" />
                        </div>
                        <div className='flex flex-col items-center'>
                            <DoughnutChart value={22} label="Normal" color="#00B074" />
                        </div>
                        <div className='flex flex-col items-center'>
                            <DoughnutChart value={62} label="Rendah" color="#2D9CDB" />
                        </div>
                    </div>
                </div>
                <div className='bg-white px-10 py-8 rounded-lg shadow-md w-full'>
                    <p className='text-[#464255] font-bold text-2xl'>Grafik Histori Gula Darah</p>
                    <div className='flex mt-5 h-[250px] w-full'>
                        <LineChart />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
