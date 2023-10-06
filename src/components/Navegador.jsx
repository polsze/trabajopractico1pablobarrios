import React from 'react';
import LogoPbx from '../assets/images/logo1.png';
import { useState } from "react";



const Navegador = () => {

  const navItems = ["Home", "Services", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  

  return (
    <>
      <div className='flex justify-evenly items-center w-full pt-2'>
        <div>
          <span>LOGO</span>
        </div>

        <div className='hidden md:block'>
          <button
            className='border border-solid bg-orange-500 rounded-3xl py-2 px-4 text-white font-small uppercase'
            onClick={toggleMenu}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <div className='sm:hidden md:hidden'>
          <nav>
            <ul className='flex flex-row'>
              {navItems.map((item, index) => (
                <li
                  className='pr-12 cursor-pointer text-blue-900 font-medium transition ease-in delay-50 hover:text-orange-500'
                  key={index}
                  
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {menuOpen && (
        <div className='hidden md:block'>
          <ul className='flex flex-col justify-center items-center'>
            {navItems.map((item, index) => (
              <li
                className='p-4 cursor-pointer text-blue-900 font-medium border-t border-gray-200'
                key={index}
                onClick={toggleMenu}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navegador;