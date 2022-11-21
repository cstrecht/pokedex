import React, { useState, useEffect } from "react";
import pokeball from "../../assets/pokeball.png";
import { Link, useLocation } from "react-router-dom";

function Card({ url }) {
  const location = useLocation();
  const [pokemon, setPokemons] = useState();

  const getPokemons = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setPokemons(json);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  //A function to map all the types of the pokemons (a pokemon can have, at is max, 2 types)
  const getTypes = () => {
    if (pokemon.types[1]) {
      return (
        "#" + pokemon.types[0].type.name + " #" + pokemon.types[1].type.name
      );
    }
    return "#" + pokemon.types[0].type.name;
  };

  return (
    pokemon && (
      <Link to={`/${pokemon.name}`} state={{ background: location }}>
        <div className="m-2 max-w-sm overflow-hidden rounded-xl font-v-t shadow-lg hover:cursor-pointer hover:bg-light-grey sm:m-4">
          <div className="px-8 py-0 sm:py-4">
            <img
              className="m-auto h-32"
              src={
                pokemon.sprites.other.dream_world.front_default
                  ? pokemon.sprites.other.dream_world.front_default
                  : pokeball
              }
              alt="Pokemon representation"
            />
            <div className="my-2 text-center text-xl font-bold capitalize sm:text-3xl">
              {pokemon.name}
            </div>
          </div>
          <div className="pb-2text-xl px-0 text-center text-primary-blue sm:px-6">
            <span className="bg-gray-200 text-gray-700 mr-2 mb-2 inline-block rounded-full px-3 py-1 text-sm font-light sm:text-lg">
              {getTypes()}
            </span>
          </div>
        </div>
      </Link>
    )
  );
}
export default Card;
