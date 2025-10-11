"use client";

import Image from "next/image";
import Brand from "./Brand";
const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full">
      <Brand />
      <div className="relative w-full h-[650px] md:h-[700px]">
        {/* Imagen de fondo */}
        <Image
          src="/diablitas.jpeg"
          alt="hero image"
          fill
          className="object-cover w-full h-full shadow-xl"
          priority
        />
        {/* Contenido centrado */}
        {/* <div className="absolute inset-0 flex flex-col items-center justify-start mt-32 z-10 px-4">
          <h1 className="text-4xl xs:text-5xl md:text-7xl font-black text-slate-100 py-3 px-2 md:px-8 text-center animate-pulse drop-shadow-lg">
            NEW SEASON
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-200 pb-4 text-center drop-shadow">
            PRIMAVERA 2025
          </h2>
          <button
            onClick={() => scrollToSection("products")}
            className="py-3 px-10 hover:px-16 border-2 border-white rounded-tl-[30px] rounded-br-[30px] hover:bg-black bg-red-700 text-white text-2xl mt-12 font-bold cursor-pointer transition-all duration-200"
          >
            DESTACADOS
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
