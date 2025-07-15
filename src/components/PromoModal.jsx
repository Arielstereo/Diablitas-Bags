"use client";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-md">
          <img
            alt="product/image"
            src="https://plus.unsplash.com/premium_photo-1683121155720-36d1a0143217?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full"
          />

          <div className="bg-slate-900 p-5 lg:p-12">
            <span className="text-2xl lg:text-3xl font-semibold text-pink-400">
              Promo día del amig@
            </span>
            <h4 className="text-lg lg:text-2xl font-bold mt-2 text-white">
              15% OFF
            </h4>
            <p className="text-lg font-normal text-white mt-2">
              En nuestros destacados
            </p>

            <div className="mt-5">
              <h5 className="py-1.5 lg:py-2 px-2.5 lg:px-3 bg-white rounded-sm text-base lg:text-2xl font-semibold">
                Desde el 10 al 20 de Julio.
              </h5>
              <div className="flex items-center justify-center mt-2">
                <span className="text-slate-300 text-center text-sm lg:text-base animate-pulse">
                  Hasta agotar stock.
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
