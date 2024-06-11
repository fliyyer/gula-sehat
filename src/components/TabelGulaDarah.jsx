import React, { useState } from 'react';

const TabelGulaDarah = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('All');
  const itemsPerPage = 5;

  const data = [
    {
      tanggal: 'Jan 01, 2024, 01:00',
      gulaDarah1: 50,
      gulaDarah2: -5,
      status: 'Rendah',
    },
    {
      tanggal: 'Jan 02, 2024, 02:00',
      gulaDarah1: 85,
      gulaDarah2: 5,
      status: 'Normal',
    },
    {
      tanggal: 'Jan 03, 2024, 03:00',
      gulaDarah1: 100,
      gulaDarah2: 10,
      status: 'Tinggi',
    },
    {
      tanggal: 'Jan 04, 2024, 04:00',
      gulaDarah1: 120,
      gulaDarah2: 15,
      status: 'Tinggi',
    },
    {
      tanggal: 'Jan 05, 2024, 05:00',
      gulaDarah1: 70,
      gulaDarah2: -10,
      status: 'Normal',
    },
    {
      tanggal: 'Jan 06, 2024, 06:00',
      gulaDarah1: 65,
      gulaDarah2: -5,
      status: 'Normal',
    },
    {
      tanggal: 'Jan 07, 2024, 07:00',
      gulaDarah1: 40,
      gulaDarah2: -10,
      status: 'Rendah',
    },
    {
      tanggal: 'Jan 08, 2024, 08:00',
      gulaDarah1: 50,
      gulaDarah2: 0,
      status: 'Rendah',
    },
    {
      tanggal: 'Jan 09, 2024, 09:00',
      gulaDarah1: 75,
      gulaDarah2: 5,
      status: 'Normal',
    },
    {
      tanggal: 'Jan 10, 2024, 10:00',
      gulaDarah1: 110,
      gulaDarah2: 10,
      status: 'Tinggi',
    },
  ];

  const filterData = data.filter(
    (item) => filter === 'All' || item.status === filter
  );
  const totalPages = Math.ceil(filterData.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentData = filterData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStatusColor = (status) => {
    if (status === 'Rendah') return 'text-yellow-400';
    if (status === 'Normal') return 'text-[#0EAD69]';
    if (status === 'Tinggi') return 'text-[#F20808]';
    return '';
  };

  return (
    <div className="my-5">
      <p className="text-[#464255] p-4 font-medium text-lg">
        Gula Darah History
      </p>
      <div className="flex gap-4 mb-4">
        <button
          className={`bg-white px-10 text-lg font-semibold py-2 rounded-2xl ${
            filter === 'All' && 'bg-green-200'
          }`}
          onClick={() => {
            setFilter('All');
            setCurrentPage(1);
          }}>
          All
        </button>
        <button
          className={`bg-white px-10 text-lg font-semibold py-2 rounded-2xl ${
            filter === 'Tinggi' && 'bg-red-200'
          }`}
          onClick={() => {
            setFilter('Tinggi');
            setCurrentPage(1);
          }}>
          Tinggi
        </button>
        <button
          className={`bg-white px-10 text-lg font-semibold py-2 rounded-2xl ${
            filter === 'Normal' && 'bg-green-200'
          }`}
          onClick={() => {
            setFilter('Normal');
            setCurrentPage(1);
          }}>
          Normal
        </button>
        <button
          className={`bg-white px-10 text-lg font-semibold py-2 rounded-2xl ${
            filter === 'Rendah' && 'bg-yellow-400'
          }`}
          onClick={() => {
            setFilter('Rendah');
            setCurrentPage(1);
          }}>
          Rendah
        </button>
      </div>
      <div>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Tanggal</th>
              <th className="py-2 px-4 border-b">Gula Darah 1</th>
              <th className="py-2 px-4 border-b">Gula Darah 2</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index}>
                <td className="py-2 text-center px-4 border-b">
                  {item.tanggal}
                </td>
                <td className="py-2 px-4 text-center border-b">
                  {item.gulaDarah1}
                </td>
                <td className="py-2 px-4 text-center border-b">
                  {item.gulaDarah2}
                </td>
                <td
                  className={`py-2 px-4 font-medium text-center border-b ${getStatusColor(
                    item.status
                  )}`}>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className={`mx-1 px-4 py-2 rounded-lg ${
            currentPage === 1 ? 'bg-gray-200' : 'bg-green-500 text-white'
          }`}
          onClick={() => handleClick(1)}
          disabled={currentPage === 1}>
          First
        </button>
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number + 1}
            className={`mx-1 px-4 py-2 rounded-lg ${
              currentPage === number + 1
                ? 'bg-green-500 text-white'
                : 'bg-white'
            }`}
            onClick={() => handleClick(number + 1)}>
            {number + 1}
          </button>
        ))}
        <button
          className={`mx-1 px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? 'bg-gray-200'
              : 'bg-green-500 text-white'
          }`}
          onClick={() => handleClick(totalPages)}
          disabled={currentPage === totalPages}>
          Last
        </button>
      </div>
    </div>
  );
};

export default TabelGulaDarah;
