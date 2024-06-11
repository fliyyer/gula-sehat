import React from 'react';
import Bg from '../assets/login.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div
      className="w-full h-screen flex justify-center flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}>
      <p className="text-[38px] font-bold text-white">Log In</p>
      <form
        action=""
        className="flex flex-col gap-4 w-1/3 mt-10 bg-[#F3F2F7] p-10 rounded-lg shadow-md">
        <label htmlFor="username" className="text-lg font-semibold">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <label htmlFor="password" className="text-lg font-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <p className="text-md text-center mt-4">
          Need an account?{' '}
          <Link to="/register" className="text-green-500 font-semibold">
            Sign Up
          </Link>
        </p>
        <button className="bg-green-500 text-white p-3 rounded-xl font-semibold mt-4 hover:bg-green-600 transition duration-300">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
