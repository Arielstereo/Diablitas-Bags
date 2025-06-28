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
    <section className="relative">
      <div className="container">
        <div className="w-full h-[500px] md:h-[700px]">
          <div className="flex flex-col justify-center items-center relative z-10">
            <div className="text-center mt-32 md:mt-96">
              <h1 className="text-5xl md:text-7xl font-black text-slate-100 py-3 px-8">
                NEW SEASON 25
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 pb-4">
                Otoño | Invierno
              </h2>

              <button
                onClick={() => scrollToSection("products")}
                className="bg-rose-700 font-bold text-xl mt-12 py-3 px-12 hover:px-18 hover:py-4 transition-all duration-300 border cursor-pointer border-white text-white hover:bg-rose-600"
              >
                DESTACADOS
              </button>
            </div>
          </div>
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1629104097922-f818ccd0ac8d?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="hero image"
              width={400}
              height={400}
              className="w-full h-full object-cover shadow-xl opacity-85 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
