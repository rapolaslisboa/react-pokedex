import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

const usePokemon = () => {
  const context = useContext(PokemonContext);

  return context;
};

export { usePokemon };
