import React from 'react';
import { Link } from 'react-router-dom';
import Bg from '../assets/login.png';

const Register = () => {
  return (
    <div
      className="w-full min-h-screen flex justify-center p-10 flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}>
      <p className="text-[38px] font-bold text-white">Sign Up</p>
      <form
        action=""
        className="flex flex-col w-1/3 mt-3 gap-2 bg-[#F3F2F7] p-6 rounded-lg shadow-md">
        <label htmlFor="username" className="text-base font-semibold">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="p-[7px] rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <label htmlFor="password" className="text-base font-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="p-[7px] rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <label htmlFor="fullName" className="text-base font-semibold">
          Nama Lengkap
        </label>
        <input
          type="text"
          id="fullName"
          className="p-[7px] rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <label htmlFor="email" className="text-base font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="p-[7px] rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <label htmlFor="tanggalLahir" className="text-base font-semibold">
          Tanggal Lahir
        </label>
        <input
          type="date"
          id="tanggalLahir"
          className="p-[7px] rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <label htmlFor="alamat" className="text-base font-semibold">
          Alamat
        </label>
        <input
          type="text"
          id="alamat"
          className="p-[7px] rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <label htmlFor="jenisKelamin" className="text-base font-semibold">
          Jenis Kelamin
        </label>
        <select
          id="jenisKelamin"
          className="p-[7px] rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500">
          <option value="laki-laki">Laki-laki</option>
          <option value="perempuan">Perempuan</option>
        </select>

        <label htmlFor="beratBadan" className="text-base font-semibold">
          Berat Badan (kg)
        </label>
        <input
          type="number"
          id="beratBadan"
          className="p-[7px] rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-green-500 font-semibold">
            Log In
          </Link>
        </p>
        <button className="bg-green-500 text-white p-[7px] rounded-xl font-semibold mt-4 hover:bg-green-600 transition duration-300">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
