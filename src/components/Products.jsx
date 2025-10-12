import Image from "next/image";
import { products } from "../mockup/data.json";
import Link from "next/link";

const Products = () => {
  const featured = products.filter((p) => p.featured);

  return (
    <section id="products" className="mb-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center my-12">
          ULTIMAS UNIDADES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-12 mx-4 md:mx-12">
          {featured.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <Link
                href={`/product/${product.name}`}
                className="group relative mb-2 block h-80 shadow-xl overflow-hidden rounded-lg hover:opacity-50 transition-all duration-300 lg:mb-3"
              >
                <Image
                  src={product.image[0]}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
                {product.sale && (
                  <span className="absolute z-10 left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                    OFERTA
                  </span>
                )}
                {product.superSale && (
                  <span className="absolute z-10 right-0 top-0 rounded-bl-lg bg-black px-3 py-1.5 text-sm uppercase tracking-wider text-white animate-pulse">
                    OFERTA DE LA SEMANA
                  </span>
                )}
              </Link>
              <div className="space-y-1">
                <h3 className="font-medium text-lg">{product.name}</h3>
              </div>
              <div className="flex items-end gap-2">
                {product.sale ? (
                  <span className="font-bold text-gray-800 text-xl lg:text-2xl">
                    $
                    {Math.floor((product.price - product.price * 0.15) / 100) *
                      100}
                  </span>
                ) : (
                  <span className="font-bold text-gray-800 text-xl lg:text-2xl">
                    $ {product.price}
                  </span>
                )}
                {product.sale && (
                  <span className="mb-0.5 text-red-500 line-through text-lg">
                    ${product.price}
                  </span>
                )}
                {product.superSale && (
                  <span className="mb-0.5 text-red-500 text-lg font-semibold">
                    ¡Oferta de la semana!
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
