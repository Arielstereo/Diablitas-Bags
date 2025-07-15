"use client";

import Image from "next/image";
import { products } from "../mockup/data.json";
import { useEffect, useState } from "react";

const NewProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = products.filter((p) => p.new);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 1500);

    return () => clearInterval(autoSlide);
  }, [slides.length]);

  return (
    <section className="mb-32 mt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">NUEVOS INGRESOS</h2>
        <div className="relative flex items-center justify-center w-full">
          <div className="w-[400px]">
            {
              <div className="flex flex-col gap-4">
                <Image
                  width={100}
                  height={100}
                  src={slides[currentSlide].image[0]}
                  alt={slides[currentSlide].name}
                  className="w-full object-cover"
                />
                <span className="text-lg text-center">
                  {slides[currentSlide].name}
                </span>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
