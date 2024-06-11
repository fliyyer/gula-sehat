import React from 'react';
import Blood from '../assets/blood.png';
import { FaArrowUp } from 'react-icons/fa';

const CardBlood = (props) => {
  const { value, desc } = props;
  return (
    <div className="bg-white shadow-xl p-5 gap-3 rounded-xl flex items-center">
      <div className="bg-[#FF5B5B] bg-opacity-30 p-2 rounded-full">
        <img className="w-[70px]" src={Blood} alt="Blood" />
      </div>
      <div>
        <p className="text-[46px] text-[#464255] font-bold">
          {value} <span className="text-base"> mg/dL</span>
        </p>
        <p className="text-[#464255]">Gula Darah {desc}</p>
        <div className="flex mt-1 items-center gap-2">
          <div className="bg-[#00A389] bg-opacity-30 p-2 rounded-full">
            <FaArrowUp className="text-green-900 text-sm" />
          </div>
          <p className="text-[#a3a3a3]">4%</p>
        </div>
      </div>
    </div>
  );
};

export default CardBlood;
