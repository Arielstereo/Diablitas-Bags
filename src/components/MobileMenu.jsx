"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "/category/bags", label: "Bags", key: "bags" },
    { href: "/category/minibags", label: "MiniBags", key: "minibags" },
    { href: "/category/totebags", label: "ToteBags", key: "totebags" },
    { href: "/category/accesorios", label: "Accesorios", key: "accesorios" },
  ];

  return (
    <nav>
      {!isMenuOpen && (
        <div className="block lg:hidden">
          <div className="flex justify-between">
            <div className="text-2xl text-center text-red-700 pt-5 pl-6 font-bold">
              <div className="flex gap-2">
                {" "}
                <Image
                  src="/logo_white.png"
                  alt="logo"
                  width={64}
                  height={64}
                  className="w-8"
                />
                <span> Diablita's Bags</span>
              </div>
            </div>
            <button
              onClick={toggleMenu}
              className="lg:hidden relative top-2 right-6 z-50 p-2 text-black duration-200"
              aria-label="Abrir menú"
            >
              <i
                className="icon-[line-md--close-to-menu-transition] w-10 h-10"
                role="img"
                aria-hidden="true"
              ></i>
            </button>
          </div>
          <div className="bg-black text-white flex justify-center items-center text-base font-semibold py-2">
            <p className="animate-pulse">Envios gratis zona Floresta</p>
          </div>
        </div>
      )}

      {/* Menú móvil */}
      <div
        className={`lg:hidden fixed inset-0 bg-white transition-all duration-300 ease-in-out z-50 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Botón para cerrar menú */}
        <button
          onClick={toggleMenu}
          className="absolute top-2 right-6 z-50 p-2 text-black hover:text-gray-600 duration-200"
          aria-label="Cerrar menú"
        >
          <i
            className="icon-[rivet-icons--close] w-10 h-10"
            role="img"
            aria-hidden="true"
          ></i>
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {/* Logo */}
          <Image
            src="/logo_white.png"
            alt="logo"
            width={64}
            height={64}
            className="w-16 h-16"
          />
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-black text-2xl hover:text-gray-600 duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MobileMenu;
