import Image from "next/image";
import Link from "next/link";
const categories = [
  {
    name: "Mini Bags",
    image:
      "https://static.wixstatic.com/media/df8397_e5bedd7b554d47f3b178883848b396ec~mv2.jpg/v1/fill/w_440,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/df8397_e5bedd7b554d47f3b178883848b396ec~mv2.jpg",
    href: "/category/minibags",
  },
  {
    name: "Carteras",
    image:
      "https://static.wixstatic.com/media/df8397_7b4bebd994b944728d3e7e38b3f4defc~mv2.jpg/v1/fill/w_550,h_625,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/df8397_7b4bebd994b944728d3e7e38b3f4defc~mv2.jpg",
    href: "/category/carteras",
  },
  {
    name: "Tote Bags",
    image:
      "https://static.wixstatic.com/media/676d30_486afb99f4444f6ebd121d6c91abc8be~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/676d30_486afb99f4444f6ebd121d6c91abc8be~mv2.jpg",
    href: "/category/totebags",
  },
];

const Category = () => {
  return (
    <section className="my-16">
      <div className="px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="flex flex-col items-center text-center"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={80}
                height={80}
                className="w-96 h-full overflow-hidden object-cover shadow-lg hover:scale-105 transition-transform"
              />
              <p className="text-xl font-semibold mt-4 relative bg-black transition-all duration-300 w-1/2 hover:w-2/3 hover:rounded-4xl py-4 text-white -top-32 left-24 md:left-32">
                {category.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
