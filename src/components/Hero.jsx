"use client";

import Image from "next/image";
const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full">
      <div className="bg-black text-yellow-200 flex justify-center items-center text-base py-3 mt-[65px] lg:mt-32 overflow-hidden">
        <p className="marquee text-base">
          Envios sin cargo en:&nbsp; Floresta &nbsp;- &nbsp; Monte Castro
          &nbsp;- &nbsp; Liniers &nbsp;- &nbsp; Devoto &nbsp; | &nbsp; Promo día
          del amigo 15% OFF en DESTACADOS del 10 al 20 de Julio! &nbsp;
        </p>
      </div>
      <div className="relative w-full h-[650px] md:h-[700px]">
        {/* Imagen de fondo */}
        <Image
          src="https://images.unsplash.com/photo-1629104097922-f818ccd0ac8d?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hero image"
          fill
          className="object-cover w-full h-full shadow-xl opacity-85"
          priority
        />
        {/* Capa oscura para mejor contraste */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Contenido centrado */}
        <div className="absolute inset-0 flex flex-col items-center justify-start mt-32 z-10 px-4">
          <h1 className="text-4xl xs:text-5xl md:text-7xl font-black text-slate-100 py-3 px-2 md:px-8 text-center drop-shadow-lg">
            NEW SEASON 25
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-100 pb-4 text-center drop-shadow">
            Otoño | Invierno
          </h2>
          <button
            onClick={() => scrollToSection("products")}
            className="py-3 px-10 hover:px-16 border-2 border-white rounded-tl-[30px] rounded-br-[30px] hover:bg-black bg-red-700 text-white text-2xl mt-12 font-bold cursor-pointer transition-all duration-200"
          >
            DESTACADOS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
