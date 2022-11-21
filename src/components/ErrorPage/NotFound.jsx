import React from "react";
import pikachu_meme from "../../assets/pikachu_meme.png";

function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-8 font-press-start">
      <img
        className="h-64 p-6 px-2"
        src={pikachu_meme}
        alt="A meme of pikachu"
      />
      <h1 className="py-6 text-2xl sm:text-5xl">404 Error</h1>
      <p className="mb-12 text-center">Pokemon Not Found</p>
      <a
        className="border-solid-black border-4 p-2 text-sm hover:bg-dark-grey hover:text-white"
        href="/"
      >
        ← Back to Pokedex
      </a>
    </div>
  );
}
export default NotFound;
