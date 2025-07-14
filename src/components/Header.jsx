"use client";
import Image from "next/image";
import Link from "next/link";
import { products } from "../mockup/data.json";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  const placeholders = [
    "Buscar...",
    "minibags",
    "totebags",
    "mochilas",
    "bags",
  ];
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
        className={`fixed top-0 left-0 w-full z-50 bg-slate-100 shadow-2xl transition-all duration-300 ${
          scrolled ? "py-2" : "pb-6"
        }`}
      >
        <div
          className={`container mx-auto flex items-center px-4 transition-all duration-300 ${
            scrolled
              ? "flex-row justify-between h-16 px-32"
              : "flex-col justify-center"
          }`}
        >
          <div className="flex">
            <div
              className={`font-bold transition-all flex gap-4 duration-300 text-red-700 ${
                scrolled ? "text-2xl pt-2" : "text-4xl pt-4"
              }`}
            >
              <Image
                className={scrolled ? "w-10" : "w-12 h-12"}
                src="/logo_white.png"
                width={100}
                height={100}
                alt="logo"
              />
              <Link className="mt-1" href="/">
                DIABLITA'S BAGS
              </Link>
            </div>
            <div
              className={
                scrolled ? "absolute top-2 ml-96" : "absolute top-14 right-4"
              }
            >
              <form
                onSubmit={handleSubmit}
                className={scrolled ? "hidden" : "relative ml-8 w-64 my-4"}
              >
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <span
                    className="icon-[pixel--search] w-5 h-5 mt-2"
                    role="img"
                    aria-hidden="true"
                  ></span>
                </span>
                <SearchInput
                  searchValue={search}
                  setSearchValue={setSearch}
                  placeholders={placeholders}
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

          <nav
            className={`md:flex space-x-8 transition-all duration-300 ${
              scrolled ? "" : "mt-4"
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
        </div>
      </div>
      {/* Espaciador para que el contenido no quede tapado por el header fijo */}
      <div className={scrolled ? "h-20" : "h-32"} />
      <div className="bg-black text-slate-200 flex justify-center items-center py-2 overflow-hidden">
        <p className="marquee text-base">
          Envios sin cargo en:&nbsp; Floresta &nbsp;- &nbsp; Monte Castro
          &nbsp;- &nbsp; Liniers &nbsp;- &nbsp; Devoto &nbsp; | &nbsp; Promo día
          del amigo 15% OFF en DESTACADOS del 10 al 20 de Julio! &nbsp;
        </p>
      </div>
    </header>
  );
};

export default Header;
