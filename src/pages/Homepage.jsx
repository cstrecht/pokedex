import React, { useEffect, useState } from "react";
import axios from "axios";

//Components:
import Card from "../components/Card/Card";
import Modal from "../components/Modal/Modal";
import Navbar from "../components/Navbar/Navbar";

const Homepage = () => {
  //Create a state to show the pokemons:
  const [pokemon, setPokemon] = useState([]);

  // --- API REQUEST: ---
  // useEffect(() => {
  //   getPokemons(); //it does the request when it is CREATED and/or UPDATED. that's why i used useEffect (for secundary effects on the component).
  // }, []);
  // const getPokemons = () => {
  //   //This request only gives me the name of the pokemon and the URL. Inside the URL there are a lot of info that I need. I need to do a GET inside that URL to get more infos
  //   var endpoints = [];
  //   for (var i = 1; i <= 50; i++) {
  // endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  //   }

  //   //New way: lets use axios.all to create a list of EACH pokemon (limit=20), with ALL details, this will solve the url issue!
  //   axios
  //     .all(endpoints.map((endpoint) => axios.get(endpoint)))
  //     .then((res) => setPokemons(res));
  //   console.log(endpoints);
  //   //Promise:
  //   //Old way:
  //   // axios
  //   //   .get("https://pokeapi.co/api/v2/pokemon?limit=20")
  //   //   .then((res) => setPokemons(res.data.results)) //for a response
  //   //   .catch((err) => console.log(err)); //for an error
  // };
  //------
  useEffect(() => {
    getPokemonList();
  }, []);
  const getPokemonList = async () => {
    var pokemonArray = [];
    for (var i = 1; i <= 50; i++) {
      pokemonArray.push(await getPokemonData(i));
    }
    console.log(pokemonArray);
    setPokemon(pokemonArray);
  };
  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  };

  //--- SEARCH FEATURE: ---
  const pokemonSearch = (name) => {
    var searchedPokemons = [];
    //go back to all pokemons when search bar is empty:
    if (name === "") {
      getPokemonList();
    }

    for (var i in pokemon) {
      if (pokemon[i].data.name.includes(name)) {
        searchedPokemons.push(pokemon[i]);
      }
    }
    setPokemon(searchedPokemons);
  };

  return (
    <div>
      <Navbar pokemonSearch={pokemonSearch} />
      <div className="grid grid-cols-4">
        {pokemon.map((pokemon, key) => (
          <Card pokemon={pokemon.data} key={key} />
        ))}
      </div>
      {/* See later: I think the ERROR is here... */}
      {/* 
      {pokemon.map((pokemon, key) => (
        <Modal
          key={key}
          name={pokemon.data.name}
          image_nintendo={pokemon.data.sprites.front_default}
          image_dream_world={
            pokemon.data.sprites.other.dream_world.front_default
          }
          hp={pokemon.data.stats[0].base_stat}
          height={pokemon.data.height}
          weight={pokemon.data.weight}
          experience={pokemon.data.base_experience}
        />
      ))} */}
    </div>
  );
};
export default Homepage;
