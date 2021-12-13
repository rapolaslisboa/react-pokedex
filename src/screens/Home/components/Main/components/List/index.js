import { useEffect, useState } from "react";
import styled from "styled-components";
import { Pagination } from "../../../../../../components/Pagination";
import { usePokemon } from "../../../../../../hooks/usePokemon";
import { Card } from "./components/Card";

const List = () => {
  const { pokemons, handlePokemons, getAllPokemons } = usePokemon();
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);

  const indexOfLastPost = currentPage * pokemonsPerPage;
  const indexOfFirstPost = indexOfLastPost - pokemonsPerPage;
  const currentPokemons =
    pokemons && pokemons.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    (async () => {
      const pokemons = await getAllPokemons();
      handlePokemons(pokemons);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section>
      {pokemons.length > 0 && (
        <CardList>
          {currentPokemons.map((pokemon) => (
            <Card pokemon={pokemon} key={pokemon.id} />
          ))}
        </CardList>
      )}
      {pokemons.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <Text>Nenhum Pokémon corresponde à sua pesquisa!</Text>
        </div>
      )}
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={pokemons.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </Section>
  );
};

const Section = styled.section`
  height: fit-content;
  padding: 64px 16px;
  overflow: auto;
`;

const Text = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: #e3350d;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 35px;
  justify-items: center;
  padding: 0 40px;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export { List };
