import React from 'react';

const Account = () => {
  return (
    <div className="flex flex-col px-10 w-full">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-[32px] font-bold">Edit Profile</h1>
          <p className="text-[#a3a3a3] font-medium">
            Edit your profile information here
          </p>
        </div>
      </div>
      <main>
        <form action="" className="w-full">
          <div className="flex flex-row gap-6 w-full mb-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="firstName" className="text-lg font-semibold">
                Nama Depan
              </label>
              <input
                className="p-3 rounded-xl mt-1 border"
                type="text"
                id="firstName"
                placeholder="Farhan"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="lastName" className="text-lg font-semibold">
                Nama Belakang
              </label>
              <input
                className="p-3 rounded-xl mt-1 border"
                type="text"
                id="lastName"
                placeholder="Triputra"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-lg font-semibold">
              Email
            </label>
            <input
              className="p-3 rounded-xl mt-1 border"
              type="text"
              id="email"
              placeholder="farhan.triputra@binus.ac.id"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-lg font-semibold">
              Password
            </label>
            <input
              className="p-3 rounded-xl mt-1 border"
              type="password"
              id="password"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="alamat" className="text-lg font-semibold">
              Alamat
            </label>
            <input
              className="p-3 rounded-xl mt-1 border"
              type="text"
              id="alamat"
              placeholder="Malang"
            />
          </div>
          <div className="flex gap-6 mb-4">
            <div className="flex flex-col w-1/3">
              <label htmlFor="tanggalLahir" className="text-lg font-semibold">
                Tanggal Lahir
              </label>
              <input
                className="p-3 rounded-xl mt-1 border"
                type="date"
                id="tanggalLahir"
              />
            </div>
            <div className="flex flex-col w-1/3">
              <label htmlFor="jenisKelamin" className="text-lg font-semibold">
                Jenis Kelamin
              </label>
              <select className="p-3 rounded-xl mt-1 border" id="jenisKelamin">
                <option value="">Pilih</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            <div className="flex flex-col w-1/3">
              <label htmlFor="beratBadan" className="text-lg font-semibold">
                Berat Badan (kg)
              </label>
              <input
                className="p-3 rounded-xl mt-1 border"
                type="number"
                id="beratBadan"
                placeholder="70"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-green-500 text-white px-10 py-2 rounded-xl font-semibold">
              Save
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Account;
