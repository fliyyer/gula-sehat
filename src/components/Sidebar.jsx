import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { HiMenuAlt2 } from 'react-icons/hi';
import { GoPeople } from 'react-icons/go';
import { MdOutlineFastfood } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { to: '/', icon: <IoHomeOutline />, label: 'Dashboard' },
    {
      to: '/detail-gula-darah',
      icon: <HiMenuAlt2 />,
      label: 'Detail Gula Darah',
    },
    { to: '/aktivitas', icon: <GoPeople />, label: 'Aktivitas' },
    { to: '/makanan', icon: <MdOutlineFastfood />, label: 'Makanan' },
    { to: '/akun', icon: <FaRegUser />, label: 'Akun' },
  ];

  return (
    <div className="min-h-screen px-4 py-5 w-64 bg-white text-[#000]">
      <div className="p-4">
        <h2 className="text-4xl font-bold">
          GulaSehat<span className="text-green-500">.</span>
        </h2>
        <p className="text-sm font-normal text-gray-400">
          Modern Admin <br />
          Dashboard
        </p>
      </div>
      <nav className="mt-8">
        <ul className="font-medium flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 flex text-[#464255] items-center gap-2 py-2 hover:bg-[#00B074] hover:bg-opacity-30 hover:rounded-md ${
                location.pathname === link.to
                  ? 'bg-[#00B074] bg-opacity-30 rounded-md'
                  : ''
              }`}>
              {link.icon}
              <p>{link.label}</p>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
