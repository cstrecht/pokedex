import React from "react";
import pikachu from "../Navbar/pikachu.png";

function Navbar({ pokemonSearch }) {
  return (
    <nav class="bg-primary-blue bg-opacity-95 mb-4 sticky top-0 z-50 shadow-xl border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://pokeapi.co/" class="flex items-center">
          <img src={pikachu} class="h-24 mr-3" alt="Pikachu" />
          <span class="self-center text-primary-yellow text-4xl font-press-start font-semibold whitespace-nowrap dark:text-white">
            Pokédex
          </span>
        </a>
        <div class="flex md:order-2">
          <div class="relative hidden md:block">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-primary-yellow"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              onChange={(e) => pokemonSearch(e.target.value.toLowerCase())}
              type="text"
              placeholder="Search..."
              class="w-96 p-2 pl-10 text-xs font-press-start font-light text-primary-yellow border border-primary-yellow rounded-md bg-primary-blue focus:ring-primary-yellow focus:border-primary-blue"
            />
          </div>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div class="relative mt-3 md:hidden">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-100 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
