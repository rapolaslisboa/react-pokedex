import styled from "styled-components";
import { usePokemon } from "../../../../../../hooks/usePokemon";
import { Card } from "./components/Card";

const List = () => {
  const { pokemons } = usePokemon();

  return (
    <Section>
      {pokemons && (
        <CardList>
          {pokemons.map((pokemon) => (
            <Card pokemon={pokemon} />
          ))}
        </CardList>
      )}
      {!pokemons && <Text>Nenhum Pokémon corresponde à sua pesquisa!</Text>}
    </Section>
  );
};

const Section = styled.section`
  height: fit-content;
  padding: 48px 16px;
  text-align: center;
  overflow: hidden;
  background-color: #ffffff;
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
  display: flex;
  place-content: center;
  flex-wrap: wrap;
  max-width: 1500px;
  grid-column-gap: 45px;
  grid-row-gap: 45px;
  margin: 0 auto;
`;

export { List };
