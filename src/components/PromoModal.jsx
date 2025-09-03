"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const PromoModal = () => {
  const [open, setOpen] = useState(true);

  // Evita scroll cuando el modal está abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-2 md:p-8">
      <div className="bg-black border-2 border-gray-200 rounded-xl shadow-2xl p-8 lg:p-12 w-full lg:w-3/4 text-center relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-0 right-0 lg:right-1 text-gray-100 hover:text-gray-300 hover:animate-pulse text-4xl font-bold cursor-pointer"
          aria-label="Cerrar"
        >
          <span
            className="icon-[tdesign--close]"
            role="img"
            aria-hidden="true"
          ></span>
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg">
          <img
            alt="product/image"
            src="/tini.jpeg"
            className="w-full h-full rounded-t-lg md:rounded-t-none md:rounded-l-lg"
          />

          <div className="bg-red-600 p-2 lg:p-12 flex flex-col items-center justify-center rounded-b-lg md:rounded-b-none md:rounded-r-lg">
            <span className="text-2xl lg:text-5xl font-black text-white">
              ¡Oferta de la semana!
            </span>
            <p className="text-lg md:text-xl font-normal text-white mt-2">
              Bag Sharpey
            </p>
            <span className="text-3xl md:text-4xl font-bold text-yellow-400 mt-2 animate-pulse">
              $35.000
            </span>

            <div className="mt-4">
              <Link
                href="/product/Bag-Sharpey"
                className="py-1.5 lg:py-2 px-3 lg:px-4 bg-black hover:bg-slate-900 text-white rounded-sm text-base lg:text-2xl"
              >
                Ver oferta
              </Link>
              <div className="flex items-center justify-center mt-4">
                <span className="text-yellow-300 text-center text-sm lg:text-base animate-pulse">
                  Ultima unidad
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoModal;
