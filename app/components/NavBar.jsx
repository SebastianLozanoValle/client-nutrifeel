"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { NavBarLink } from "@/app/components/NavBarLink";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <nav className="fixed w-full z-10 bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <Image
                className='relative top-[-7px]'
                src="/Logo.png"
                alt="Logo"
                width={35}
                height={0}
              />
              <h1 className="text-[#3ac968] text-3xl my-auto">NutriFeel</h1>
            </div>
            <div className="hidden md:flex items-center">
              <ul className="flex justify-around">
                <NavBarLink className="mx-8 my-auto">Inicio</NavBarLink>
                <NavBarLink className="mx-8 my-auto">Nosotros</NavBarLink>
                <NavBarLink className="mx-8 my-auto">Servicios</NavBarLink>
                <NavBarLink className="mx-8 my-auto">Precios</NavBarLink>
                <NavBarLink className="mx-8 my-auto">Equipo</NavBarLink>
              </ul>
              <div className="flex justify-around">
                <a href="#"
                  className="shadow-lg border border-[#3ac968] text-[#3ac968] rounded-md mx-4 px-4 py-1 my-auto hover:text-white hover:bg-primario transition-all hover:-translate-x-1">Iniciar
                  Sesión</a>
                <a href="#"
                  className="shadow-lg border border-[#3ac968] bg-[#3ac968] text-white rounded-md mx-4 px-4 py-1 my-auto hover:text-primario hover:bg-inherit transition-all hover:-translate-x-1">Registrarse</a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              {isOpen ? <RiCloseLine className="block h-6 w-6" /> : <RiMenuLine className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#"
              className="bg-secundario text-white block px-3 py-2 rounded-md text-base font-medium">Inicio</a>
            <a href="#Nosotros"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Nosotros</a>
            <a href="#Servicios"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Servicios</a>
            <a href="#Precios"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Precios</a>
            <a href="#Equipo"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Equipo</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;