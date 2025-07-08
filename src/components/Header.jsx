"use client";
import Image from "next/image";
import Link from "next/link";
import { products } from "../mockup/data.json";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Buscar productos por nombre
  useEffect(() => {
    if (search.length > 1) {
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = products.find(
      (p) => p.name.toLowerCase() === search.toLowerCase()
    );
    if (found) {
      router.push(`/product/${found.name}`);
      setSearch("");
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (name) => {
    router.push(`/product/${name}`);
    setSearch("");
    setSuggestions([]);
  };

  return (
    <header className="hidden lg:block">
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${
          scrolled ? "py-2" : ""
        }`}
      >
        <div
          className={`container mx-auto flex items-center px-4 transition-all duration-300 ${
            scrolled
              ? "flex-row justify-between h-16 px-32"
              : "flex-col justify-center"
          }`}
        >
          <div
            className={`font-bold transition-all flex gap-4 duration-300 text-red-700 ${
              scrolled ? "text-2xl" : "text-4xl pt-4"
            }`}
          >
            <Image
              className="w-10"
              src="/logo_white.png"
              width={100}
              height={100}
              alt="logo"
            />
            <Link href="/"> DIABLITA'S BAGS</Link>
          </div>

          <nav
            className={`md:flex space-x-8 transition-all duration-300 ${
              scrolled ? "" : "my-4"
            }`}
          >
            <Link
              href="/category/bags"
              className=" font-medium hover:text-gray-600"
            >
              Bags
            </Link>
            <Link
              href="/category/minibags"
              className=" font-medium hover:text-gray-600"
            >
              Mini Bags
            </Link>
            <Link
              href="/category/totebags"
              className=" font-medium hover:text-gray-600"
            >
              Tote Bags
            </Link>
            <Link
              href="/category/mochilas"
              className=" font-medium hover:text-gray-600"
            >
              Mochilas
            </Link>
            <Link
              href="/category/accesorios"
              className=" font-medium hover:text-gray-600"
            >
              Accesorios
            </Link>
          </nav>
          <form onSubmit={handleSubmit} className="relative ml-8 w-64 my-4">
            <input
              type="text"
              placeholder="Buscar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-rose-700"
            />
            {suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 z-50 shadow-lg">
                {suggestions.map((s) => (
                  <li
                    key={s.id}
                    className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSuggestionClick(s.name)}
                  >
                    {s.name}
                  </li>
                ))}
              </ul>
            )}
          </form>
        </div>
      </div>
      {/* Espaciador para que el contenido no quede tapado por el header fijo */}
      <div className={scrolled ? "h-20" : "h-32"} />
      <div className="bg-black text-white flex justify-center items-center text-base font-semibold py-2">
        <p className="animate-pulse text-lg">
          Envios gratis en Floresta - Liniers - Villa Luro - Devoto
        </p>
      </div>
    </header>
  );
};

export default Header;
