import React from 'react';
import { useState } from "react";



const Navegador = () => {

  const navItems = ["Home", "Services", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    // Función para manejar el clic en un elemento del menú y hacer scroll suave
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  
      // Función para manejar el clic en un elemento del menú en pantallas grandes
  const handleMenuClick = (item) => {
    scrollToSection(item.toLowerCase());
    if (window.innerWidth >= 768) {
      // Si la pantalla es lo suficientemente grande, cierra el menú
      setMenuOpen(false);
    }
  };

  return (
    <>
      <div className='flex justify-evenly items-center w-full'>
        <div>
          <span className='pt-2'>LOGO</span>
        </div>

        <div className='hidden md:block pt-2'>
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
                  onClick={() => {
                    if (menuOpen) {
                      handleMenuClick(item);
                    } else {
                      scrollToSection(item.toLowerCase());
                    }
                  }}

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
                onClick={() => handleMenuClick(item)}              >
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