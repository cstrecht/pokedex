import React, { useEffect, useState } from "react";
import logo from "../Modal/logo.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Modal = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      setPokemon(response.data);
    });
  }, []);

  return (
    pokemon && (
      <div>
        <div
          onClick={() => navigate(-1)}
          className="fixed m-auto font-v-t bg-primary-blue bg-opacity-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex justify-center px-4 pt-12 overflow-hidden text-center sm:items-center sm:p-0">
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative transform border-8 sm:border-[12px] border-primary-yellow bg-secundary-yellow overflow-hidden rounded-lg text-left shadow-xl transition-all sm:mt-6"
              >
                <div className="bg-secundary-yellow py-3 sm:py-2 px-8 flex flex-row-reverse">
                  <div className="text-lg sm:text-xl">
                    HP
                    <span className="text-4xl">
                      {pokemon.stats[0].base_stat}✪
                    </span>
                  </div>
                </div>
                <div className="bg-secundary-yellow px-8 pb-8">
                  <div className="bg-secundary-blue flex justify-center rounded-lg border-2 border-primary-yellow">
                    <div>
                      <img
                        className="h-28 my-5 mx-2 sm:mt-8 mx-auto"
                        src={pokemon.sprites.front_default}
                        alt="nintendo pokemon"
                      />
                      <h3 className="text-center px-2 text-xs sm:text-lg text-white">
                        Gameboy Color (1998)
                      </h3>
                    </div>
                    <div>
                      <div>
                        <img
                          className="h-28 my-5 mx-2 sm:mt-8  mx-auto"
                          src={pokemon.sprites.other.dream_world.front_default}
                          alt="dream world pokemon"
                        />
                        <h3 className="text-center px-3 text-xs sm:text-lg text-white">
                          Dream World (2010)
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center bg-secundary-blue rounded-lg mt-6 pb-3 border-2 border-primary-yellow">
                    <h3 className="text-white font-press-start text-xl mb-3 sm:text-2xl font-medium leading-6 text-gray-900 mt-4 capitalize">
                      {pokemon.name}
                    </h3>

                    <div className="mt-2">
                      <p className="font-v-t text-md sm:text-xl text-gray-500">
                        Height: {pokemon.height} inches
                      </p>
                    </div>
                    <div className="mt-2">
                      <p className="font-v-t text-md sm:text-xl text-gray-500">
                        Weight: {pokemon.weight} pounds
                      </p>
                    </div>
                    <div className="mt-2">
                      <p className="font-v-t text-md sm:text-xl text-gray-500">
                        Experience: {pokemon.base_experience} points
                      </p>
                    </div>
                    <div>
                      <img
                        className="h-8 sm:h-12 mt-4 sm:mt-8"
                        src={logo}
                        alt="pokemon logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default Modal;
