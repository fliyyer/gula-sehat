import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-end items-center px-8 py-4 bg-gray-100">
      <span className="mr-4 text-gray-800">
        Hello, <span className="font-bold">username</span>
      </span>
      <img
        src="https://via.placeholder.com/40"
        alt="Avatar"
        className="w-[50px] h-[50px] rounded-full"
      />
    </div>
  );
};

export default Navbar;
