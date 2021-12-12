import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const PokemonContext = createContext({});

const ENDPOINT_URL =
  "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState(null);

  const handlePokemons = (pokemons) => {
    setPokemons(pokemons);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const response = await axios.get(ENDPOINT_URL);
      setPokemons(response.data.pokemon);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        handlePokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
