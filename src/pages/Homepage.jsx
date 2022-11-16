import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import Modal from "../components/Modal/Modal";
import axios from "axios";

const Homepage = () => {
  //Create a state to show the pokemons:
  const [pokemons, setPokemons] = useState([]);

  // --- API REQUEST: ---
  useEffect(() => {
    getPokemons(); //it does the request when it is CREATED and/or UPDATED. that's why i used useEffect (for secundary effects on the component).
  }, []);
  const getPokemons = () => {
    //This request only gives me the name of the pokemon and the URL. Inside the URL there are a lot of info that I need. I need to do a GET inside that URL to get more infos
    var endpoints = [];
    for (var i = 1; i <= 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    console.log(endpoints);
    //New way: lets use axios.all to create a list of EACH pokemon (limit=20), with ALL details, this will solve the url issue!
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));

    //Promise:
    //Old way:
    // axios
    //   .get("https://pokeapi.co/api/v2/pokemon?limit=20")
    //   .then((res) => setPokemons(res.data.results)) //for a response
    //   .catch((err) => console.log(err)); //for an error
  };

  //--- SEARCH FEATURE: ---
  const pokemonSearch = (name) => {
    var searchedPokemons = [];
    //go back to all pokemons when search bar is empty:
    if (name === "") {
      getPokemons();
    }

    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        searchedPokemons.push(pokemons[i]);
      }
    }
    setPokemons(searchedPokemons);
  };
  return (
    <div>
      <Navbar pokemonSearch={pokemonSearch} />
      <div className="grid grid-cols-4">
        {pokemons.map((pokemon, key) => (
          <Card
            key={key}
            name={pokemon.data.name}
            types={pokemon.data.types} //a pokemon can have 1 or 2 types
            image={pokemon.data.sprites.other.dream_world.front_default}
          /> //pass a prop name to show the pokemon name
        ))}
      </div>
      {pokemons.map((pokemon, key) => (
        <Modal
          key={key}
          name={pokemon.data.name}
          image={pokemon.data.sprites.other.dream_world.front_default}
          stats={pokemon.data.stats}
          height={pokemon.data.height}
          weight={pokemon.data.weight}
          experience={pokemon.data.base_experience}
        />
      ))}
    </div>
  );
};
export default Homepage;
