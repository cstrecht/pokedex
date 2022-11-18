import React from "react";
import pokeball from "../Card/pokeball.png"; //default image
import { Link, useLocation, Outlet } from "react-router-dom";

function Card({ pokemon }) {
  const location = useLocation();
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
    <div className="m-4 font-v-t max-w-sm rounded-xl overflow-hidden shadow-lg hover:bg-light-grey hover:cursor-pointer">
      <Link to={`/${pokemon.name}`} state={{ background: location }}>
        <div className="px-8 py-4">
          <img
            className="h-32 m-auto"
            src={
              pokemon.sprites.other.dream_world.front_default
                ? pokemon.sprites.other.dream_world.front_default
                : pokeball
            }
            alt="Pokemon avatar"
          />
          <div className="font-bold text-center text-3xl my-2 capitalize">
            {pokemon.name}
          </div>
        </div>
        <div className="text-center px-6 pb-2text-xl text-primary-blue">
          <span className="inline-block text-lg bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2">
            {getTypes()}
          </span>
        </div>
      </Link>
      <Outlet />
    </div>
  );
}
export default Card;
