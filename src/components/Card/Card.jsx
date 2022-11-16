import React from "react";
import pokeball from "../Card/pokeball.png";

//receives "name" from the API
function Card({ name, image }) {
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
      <div class="px-6 pb-2 font-v-t text-xl text-primary-blue">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2"></span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2">
          #power1
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2">
          #power2
        </span>
      </div>
    </div>
  );
}
export default Card;
