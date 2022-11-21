import React, { useState, useEffect } from "react";
import pokeball from "../Card/pokeball.png";
import { Link, useLocation, Outlet } from "react-router-dom";
import axios from "axios";

function Card({ url, name }) {
  const location = useLocation();
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    axios.get(url).then((response) => {
      setPokemon(response.data);
    });
  }, []);

  //A function to map all the types of the pokemons (a pokemon can have, at max, 2 types)
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
      <Link to={`/pokemon/${pokemon.name}`} state={{ background: location }}>
        <div className="m-2 sm:m-4 font-v-t max-w-sm rounded-xl overflow-hidden shadow-lg hover:bg-light-grey hover:cursor-pointer">
          <div className="px-8 py-0 sm:py-4">
            <img
              className="h-32 m-auto"
              src={
                pokemon.sprites.other.dream_world.front_default
                  ? pokemon.sprites.other.dream_world.front_default
                  : pokeball
              }
              alt="Pokemon avatar"
            />
            <div className="font-bold text-center text-xl sm:text-3xl my-2 capitalize">
              {pokemon.name}
            </div>
          </div>
          <div className="text-center px-0 sm:px-6 pb-2text-xl text-primary-blue">
            <span className="inline-block text-sm sm:text-lg bg-gray-200 rounded-full px-3 py-1 font-light text-gray-700 mr-2 mb-2">
              {getTypes()}
            </span>
          </div>
          <Outlet />
        </div>
      </Link>
    )
  );
}
export default Card;
