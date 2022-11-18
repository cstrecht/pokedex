import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import axios from "axios";

const Homepage = () => {
  useEffect(() => {
    getPokemons(); //it does the request when it is CREATED and/or UPDATED. that's why i used useEffect (for secundary effects on the component).
  });
  const getPokemons = () => {
    //Promise:
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => console.log(res)) //for a response
      .catch((err) => console.log(err)); //for an error
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
export default Homepage;
