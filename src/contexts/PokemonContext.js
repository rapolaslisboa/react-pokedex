import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const PokemonContext = createContext({});

const ENDPOINT_URL =
  "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

const PokemonProvider = ({ children }) => {
  // Utilizando dois arrays para facilitar a filtragem no processo de busca e o fluxo dos estados,
  // considerando que são apenas (151 pokémons), que no "endpoint" utilizado 
  // não tem a opção de passar query para filtrar.
  // Esse tipo de approach não é recomendável quando se possui um grande número de dados
  // ou se a propriedade da imagem dos objetos do array armazena o base64 da imagem e não a URL, por exemplo.
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
