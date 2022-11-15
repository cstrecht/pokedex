import React from "react";
import pokeball from "../Card/pokeball.png";

function Card() {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-8 py-4">
        <img class="h-32 m-auto" src={pokeball} alt="Pokeball" />
        <div class="font-bold text-3xl my-2 font-v-t">Pokemon Name here</div>
        <p class="text-gray-700 text-sm font-v-t">
          description - Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pb-2 font-v-t text-xl text-primary-blue">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2">
          #power
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2">
          #region
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2">
          #hability
        </span>
      </div>
    </div>
  );
}
export default Card;
