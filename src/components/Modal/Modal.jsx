import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate, useParams } from "react-router-dom";

function Modal() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  const getPokemon = async () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        if (!response.ok) {
          return (window.location.href = "/404");
        }
        return response.json();
      })
      .then((json) => {
        setPokemon(json);
      });
  };
  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      {pokemon && (
        <div>
          <div
            onClick={() => navigate(-1)}
            className="fixed inset-0 z-50 m-auto flex items-center overflow-y-auto overflow-x-hidden bg-primary-blue bg-opacity-50 font-v-t outline-none focus:outline-none"
          >
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex justify-center overflow-hidden px-4 pt-12 text-center sm:items-center sm:p-0">
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="relative transform overflow-hidden rounded-lg border-8 border-primary-yellow bg-secundary-yellow text-left shadow-xl transition-all sm:mt-6 sm:border-[12px]"
                >
                  <div className="flex flex-row-reverse bg-secundary-yellow py-3 px-8 sm:py-2">
                    <div className="text-lg sm:text-xl">
                      HP
                      <span className="text-4xl">
                        {pokemon.stats[0].base_stat}✪
                      </span>
                    </div>
                  </div>
                  <div className="bg-secundary-yellow px-8 pb-8">
                    <div className="flex justify-center rounded-lg border-2 border-primary-yellow bg-secundary-blue">
                      <div>
                        <img
                          className="my-5 mx-2 h-28 sm:mt-8"
                          src={pokemon.sprites.front_default}
                          alt="nintendo pokemon"
                        />
                        <h3 className="px-2 text-center text-xs text-white sm:text-lg">
                          Gameboy Color (1998)
                        </h3>
                      </div>
                      <div>
                        <img
                          className="my-5 mx-2 h-28 sm:mt-8"
                          src={pokemon.sprites.other.dream_world.front_default}
                          alt="dream world pokemon"
                        />
                        <h3 className="px-3 text-center text-xs text-white sm:text-lg">
                          Dream World (2010)
                        </h3>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col items-center justify-center rounded-lg border-2 border-primary-yellow bg-secundary-blue pb-3">
                      <h3 className="text-gray-900 mb-3 mt-4 font-press-start text-xl font-medium capitalize leading-6 text-white sm:text-2xl">
                        {pokemon.name}
                      </h3>
                      <div className="mt-2">
                        <p className="text-md text-gray-500 font-v-t sm:text-xl">
                          Height: {pokemon.height} inches
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-md text-gray-500 font-v-t sm:text-xl">
                          Weight: {pokemon.weight} pounds
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-md text-gray-500 font-v-t sm:text-xl">
                          Experience: {pokemon.base_experience} points
                        </p>
                      </div>
                      <div>
                        <img
                          className="mt-4 h-8 sm:mt-8 sm:h-12"
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
      )}
    </div>
  );
}
export default Modal;
