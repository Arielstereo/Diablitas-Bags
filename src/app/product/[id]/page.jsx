"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { products } from "../../../mockup/data.json";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const { id } = useParams();

  const product = products.find((p) => p.name === id);

  const [image, setImage] = useState(product?.image[0]);

  const bagColor = {
    negro: "bg-black",
    blanco: "bg-white",
    cherry: "bg-red-800",
    rojo: "bg-red-600",
    plateado: "bg-gray-400",
    natural: "bg-orange-200",
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="absolute right-8 md:right-32 top-32 md:top-48">
        <Link
          href="/"
          className="text-center text-lg text-black flex gap-0 hover:gap-4 items-center hover:text-gray-500 transition-all duration-300 lg:text-base"
        >
          <i
            className="icon-[weui--back-outlined] w-6 h-6 text-black font-semibold"
            role="img"
            aria-hidden="true"
          ></i>
          <span>INICIO</span>
        </Link>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 mt-16 md:mt-0">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="grid gap-4 lg:grid-cols-5">
            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
              <Image
                src={image}
                onMouseEnter={() =>
                  setImage(product?.image[1] || product.image[0])
                }
                onMouseLeave={() => setImage(product?.image[0])}
                loading="lazy"
                alt="Photo"
                width={400}
                height={400}
                className="h-full w-full object-cover object-center"
              />
              {product.sale && (
                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                  Oferta
                </span>
              )}
            </div>
          </div>

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {product.category}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {id}
              </h2>
            </div>

            <div className="mb-4 md:mb-6">
              <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
                Color {product.color} (consulta por otros colores disponibles)
              </span>

              <div className="flex flex-wrap gap-2">
                <span
                  className={`h-8 w-8 rounded-full animate-pulse ring-2 ring-gray-600 ${
                    bagColor[product.color?.toLowerCase()]
                  }`}
                ></span>
              </div>
            </div>

            <div className="py-6 w-2/3">
              <p>{product.description}</p>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${product.price}
                </span>
                {/* <span className="mb-0.5 text-red-500 line-through">$30.00</span> */}
              </div>

              <span className="text-sm text-gray-500">
                Costo de envío $3.500 (CABA)
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                />
              </svg>

              <span className="text-sm">Entregas en 24hs.</span>
            </div>

            <div className="flex justify-center">
              <a
                href={`https://api.whatsapp.com/send?phone=+5491126922128&text=Hola%20quiero%20reservar%20la%20${encodeURIComponent(
                  product.name
                )}`}
                target="_blank"
                className="rounded-lg w-full bg-black hover:bg-slate-800 px-8 py-3 text-center text-xl font-semibold text-white transition duration-300"
              >
                RESERVAR
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
