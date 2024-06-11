import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 overflow-x-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
