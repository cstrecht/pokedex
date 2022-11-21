import React, { useEffect, useState } from "react";
import uniqBy from "lodash/uniqBy";
import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";

function generateUrl(page) {
  const url = new URL("https://pokeapi.co/api/v2/pokemon");
  url.searchParams.set("limit", 20);
  url.searchParams.set("offset", page * 20);
  // console.log(page);

  return url.toString();
}
export default function Homepage() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [searchPokemons, setSearchPokemons] = useState([]);

  // -*- Request API Data -*-
  const loadPokemon = async (page) => {
    const response = await fetch(generateUrl(page));
    const json = await response.json();
    setPokemons((pokemons) => uniqBy([...pokemons, ...json.results], "url"));
  };

  // -*- Infinite Scroll -*-
  const handleScroll = (e) => {
    const currentHeight =
      window.innerHeight + e.target.documentElement.scrollTop + 1;
    const triggerHeight = e.target.documentElement.scrollHeight;
    if (currentHeight >= triggerHeight) setPage((page) => page + 1);
  };

  useEffect(() => {
    loadPokemon(page);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    loadPokemon(page);
  }, [page]);

  // -*- Search Feature -*-
  const pokemonSearch = (name) => {
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.includes(name)
    );
    setSearchPokemons(filteredPokemons);
  };

  return (
    <div>
      <Navbar pokemonSearch={pokemonSearch} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {searchPokemons.length === 0
          ? pokemons.map((pokemon, index) => (
              <Card url={pokemon.url} key={pokemon.name} />
            ))
          : searchPokemons.map((pokemon, index) => (
              <Card url={pokemon.url} key={pokemon.name} />
            ))}
      </div>
    </div>
  );
}
