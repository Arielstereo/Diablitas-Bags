"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40); // Cambia el valor según el alto de tu header
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="hidden md:block">
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${
          scrolled ? "py-2" : ""
        }`}
      >
        <div
          className={`container mx-auto flex items-center px-4 transition-all duration-300 ${
            scrolled
              ? "flex-row justify-between h-16 px-32"
              : "flex-col justify-center"
          }`}
        >
          <div
            className={`font-bold transition-all flex gap-4 duration-300 text-red-700 ${
              scrolled ? "text-2xl" : "text-4xl pt-4"
            }`}
          >
            <Image
              className="w-10"
              src="/logo_white.png"
              width={100}
              height={100}
              alt="logo"
            />
            <span> DIABLITA'S BAGS</span>
          </div>
          <nav
            className={`md:flex space-x-16 transition-all duration-300 ${
              scrolled ? "" : "mt-4"
            }`}
          >
            <Link
              href="/category/minibags"
              className=" font-medium hover:text-gray-600"
            >
              Mini Bags
            </Link>
            <Link
              href="/category/totebags"
              className=" font-medium hover:text-gray-600"
            >
              Tote Bags
            </Link>
            <Link
              href="/category/carteras"
              className=" font-medium hover:text-gray-600"
            >
              Carteras
            </Link>
          </nav>
        </div>
      </div>
      {/* Espaciador para que el contenido no quede tapado por el header fijo */}
      <div className={scrolled ? "h-20" : "h-32"} />
      <div className="bg-black text-white flex justify-center items-center text-base font-semibold py-2">
        <p className="animate-pulse">
          Envios gratis a CABA con tu compra mayor a{" "}
          <span className="text-yellow-200">$45.000</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
