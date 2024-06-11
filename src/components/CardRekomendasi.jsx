import React from 'react';
import Avatar from '../assets/avatar.png';
import { FaStar } from 'react-icons/fa';
import Food from '../assets/food1.png';

const CardRekomendasi = () => {
  return (
    <div className="w-[500px] relative flex items-center">
      <div className="bg-[#FDFDFD] p-[30px] w-[450px] rounded-md shadow-sm">
        <div className="flex items-center gap-4">
          <img src={Avatar} alt="" />
          <div>
            <p className="text-[#464255] font-semibold text-lg">User</p>
            <span className="text-[#A3A3A3] text-sm">2 Days ago</span>
          </div>
        </div>
        <p className="max-w-[275px] text-[#464255] font-medium text-sm my-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text
        </p>
        <div className="flex items-center text-[#464255] gap-3 text-base font-semibold">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
          <p>5.0</p>
        </div>
      </div>
      <div className="absolute w-[200px] -right-16">
        <img src={Food} className="rounded-full" alt="" />
      </div>
    </div>
  );
};

export default CardRekomendasi;
