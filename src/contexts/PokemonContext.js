import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const PokemonContext = createContext({});

const ENDPOINT_URL =
  "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  const handlePokemons = (pokemons) => {
    setPokemons(pokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const getAllPokemons = async () => {
    try {
      const response = await axios.get(ENDPOINT_URL);
      return response.data.pokemon;
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        getAllPokemons,
        handlePokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
