import React from "react";
import pikachu from "../../assets/pikachu.png";

function Navbar({ pokemonSearch }) {
  return (
    <nav className="border-gray-200 sticky top-0 z-50 mb-4 bg-primary-blue bg-opacity-90 px-2 py-2.5 shadow-xl sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="https://github.com/cstrecht" className="flex items-center">
          <img
            src={pikachu}
            className="mr-3 h-12 sm:h-24"
            alt="Waving Pikachu"
          />
          <div>
            <span className="self-center whitespace-nowrap font-press-start text-xl font-semibold text-primary-yellow sm:text-3xl md:text-4xl">
              Pokédex
            </span>
            <div className="text-left font-v-t text-xs text-primary-yellow sm:text-right sm:text-sm">
              made with ❤ by{" "}
              <a
                className="underline hover:cursor-pointer hover:text-secundary-yellow"
                href="https://github.com/cstrecht"
              >
                carolina
              </a>
            </div>
          </div>
        </a>
        <div className="flex md:order-2">
          <div className="relative block">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-3 text-primary-yellow sm:h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              onChange={(e) =>
                pokemonSearch(e.target.value.toLowerCase().replace(/\s/g, ""))
              }
              type="text"
              placeholder="Search..."
              className="w-32 rounded-md border border-primary-yellow bg-primary-blue p-2 pl-10 font-press-start text-[8px] font-light text-primary-yellow focus:border-primary-blue focus:ring-primary-yellow sm:w-60 sm:text-xs lg:w-96"
            />
          </div>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="text-gray-500 h-5 w-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className="text-gray-900 border-gray-100 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-lg border p-2 pl-10 text-sm"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
