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
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-secundary-yellow border-t-[12px] border-l-[12px] border-r-[12px] border-primary-yellow pt-2 pb-4 px-8 flex justify-between">
                  <div className="text-lg">
                    HP{" "}
                    <span className="text-5xl">
                      {pokemon.stats[0].base_stat}✪
                    </span>
                  </div>
                </div>
                <div className="bg-secundary-yellow border-b-[12px] border-l-[12px] border-r-[12px] border-primary-yellow px-8 pb-8 ">
                  <div className="bg-secundary-blue flex justify-center rounded-lg border-2 border-primary-yellow">
                    <div>
                      <img
                        className="h-48 mx-auto"
                        src={pokemon.sprites.front_default}
                        alt="nintendo pokemon"
                      />
                      <h3 className="text-center text-md text-white">
                        Gameboy Color(1998)
                      </h3>
                    </div>
                    <div>
                      <div>
                        <img
                          className="h-48 mx-auto"
                          src={pokemon.sprites.other.dream_world.front_default}
                          alt="dream world pokemon"
                        />
                        <h3 className="text-center text-md text-white">
                          Dream World (2010)
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center bg-secundary-blue rounded-lg mt-7 pb-3 border-2 border-primary-yellow">
                    <h3 className="font-press-start text-white  text-3xl font-medium leading-6 text-gray-900 mt-8 capitalize">
                      {pokemon.name}
                    </h3>
                    <div className="mt-2">
                      <p className="font-v-t text-gray-500"></p>
                    </div>
                    <div className="mt-2">
                      <p className="font-v-t text-2xl text-gray-500">
                        Height: {pokemon.height} inches
                      </p>
                    </div>
                    <div className="mt-2">
                      <p className="font-v-t text-2xl text-gray-500">
                        Weight: {pokemon.weight} pounds
                      </p>
                    </div>
                    <div className="mt-2">
                      <p className="font-v-t text-2xl text-gray-500">
                        Experience: {pokemon.base_experience} points
                      </p>
                    </div>
                    <div>
                      <img
                        className="h-12 mt-8"
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
