import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const PokemonContext = createContext({});

const ENDPOINT_URL =
  "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonsToBeShown, setPokemonsToBeShown] = useState([]);

  const handlePokemons = (pokemons) => {
    setPokemonsToBeShown(pokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const getAllPokemons = async () => {
    try {
      const response = await axios.get(ENDPOINT_URL);
      setAllPokemons(response.data.pokemon);
      setPokemonsToBeShown(response.data.pokemon);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        pokemonsToBeShown,
        handlePokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
