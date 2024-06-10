import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className="flex bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
