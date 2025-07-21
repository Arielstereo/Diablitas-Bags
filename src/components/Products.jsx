import Image from "next/image";
import { products } from "../mockup/data.json";
import Link from "next/link";

const Products = () => {
  const featured = products.filter((p) => p.featured);

  return (
    <section id="products" className="my-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          DESTACADOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-12 mx-4 md:mx-12">
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
                    15% OFF
                  </span>
                )}
              </Link>
              <div className="space-y-1">
                <h3 className="font-medium text-lg">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
