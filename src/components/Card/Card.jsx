import React from "react";
import pokeball from "../Card/pokeball.png";

//receives "name" from the API
function Card({ name, image, types }) {
  //A function to map all the types of the pokemons (there are 1 or 2)
  const getTypes = () => {
    if (types[1]) {
      return "#" + types[0].type.name + " " + "#" + types[1].type.name;
    }
    return "#" + types[0].type.name;
  };
  return (
    <div class="m-4 max-w-sm rounded-xl overflow-hidden shadow-lg">
      <div class="px-8 py-4">
        <img class="h-32 m-auto" src={image} alt="Pokeball" />
        <div class="font-bold text-3xl my-2 font-v-t capitalize">{name}</div>
        <p class="text-gray-700 text-sm font-v-t">
          description: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil.
        </p>
      </div>
      <div class="text-center px-6 pb-2 font-v-t text-xl text-primary-blue">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 ">
          {getTypes()}
        </span>
      </div>
    </div>
  );
}
export default Card;
