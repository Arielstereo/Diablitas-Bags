"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "../../../mockup/data.json";
import Image from "next/image";
import Brand from "@/components/Brand";

export default function CategoryPage() {
  const params = useParams();
  const { id } = params;

  const bags = products.filter((p) => p.category === id);

  return (
    <section>
      <Brand />
      <div className="relative">
        <div className="container">
          <div className="w-full h-[500px] md:h-[700px]">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
              <div className="text-center mt-32">
                <h1 className="text-4xl md:text-7xl font-black text-slate-100 py-3 px-8">
                  {id.toUpperCase()}
                </h1>
              </div>
            </div>
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1629104086258-48befa7ad1e6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="hero image"
                width={400}
                height={400}
                className="w-full h-full object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <span className="text-lg lg:text-xl">Categoria / {id}</span>
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

          <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            {bags.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <Link
                  href={`/product/${product.name}`}
                  className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
                >
                  <img
                    src={product.image}
                    loading="lazy"
                    alt="Product"
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  {product.sale && (
                    <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                      Promo dia del amigo -15%
                    </span>
                  )}
                </Link>

                <div>
                  <a
                    href="#"
                    className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                  >
                    {product.name}
                  </a>

                  <div className="flex items-end gap-2">
                    {product.sale ? (
                      <span className="font-bold text-gray-800 lg:text-lg">
                        $
                        {Math.floor(
                          (product.price - product.price * 0.15) / 100
                        ) * 100}
                      </span>
                    ) : (
                      <span className="font-bold text-gray-800 lg:text-lg">
                        $ {product.price}
                      </span>
                    )}
                    {product.sale && (
                      <span className="mb-0.5 text-red-500 line-through">
                        ${product.price}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
