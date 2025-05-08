import React, { useState } from "react";
import sidebar from '../assets/sidebar.png'


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img onClick={() => setIsOpen(true)} className='w-[40px] h-[20px] mt-1.5' src={sidebar} alt="" />

      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b shadow-sm">
          <h2 className="text-lg font-bold">Menyu</h2>
          <button
            className="text-3xl font-bold text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>

        <ul className="p-6 text-center space-y-6 text-lg text-blue-600">
          <li>
            <a href="#" className="hover:underline">Bosh sahifa</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Profil</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Sozlamalar</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Chiqish</a>
          </li>
        </ul>
      </div>
    </>
  );
}
