import styled from "styled-components";
import { useState } from "react";
import { usePokemon } from "../../../../../../hooks/usePokemon";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const { handlePokemons, allPokemons } = usePokemon();

  const resetTextFilter = () => {
    setSearchText("");
    handlePokemons([...allPokemons]);
  };

  const onChangeText = (event) => setSearchText(event.target.value);

  const filterPokemons = (event) => {
    event.preventDefault();
    const updatedPokemons = allPokemons.filter(
      (pokemon) =>
        pokemon.name.indexOf(searchText) > -1 || pokemon.num === searchText
    );
    handlePokemons(updatedPokemons);
  };

  return (
    <Section>
      <span>Pesquise por Pokémons da primeira geração!</span>
      <form onSubmit={filterPokemons}>
        <SearchContainer>
          <Input
            value={searchText}
            onChange={onChangeText}
            placeholder="Digite o nome ou número do Pokémon..."
          />
          {searchText && (
            <ClearButton type="button" onClick={resetTextFilter}>
              <i className="fas fa-times" />
            </ClearButton>
          )}
          <SearchButton type="submit" onClick={filterPokemons}>
            <i className="fa fa-search" />
          </SearchButton>
        </SearchContainer>
      </form>
    </Section>
  );
};

const Section = styled.section`
  height: fit-content;
  padding: 48px 16px;
  margin-top: 70px;
  text-align: center;
  overflow: hidden;
  background-color: #4b4452;
  span {
    font-size: 1.6rem;
    font-weight: 500;
    color: #ffffff;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
`;

const SearchContainer = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  background-color: white;
  border: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  font-size: 18px;
  padding: 15px;
  height: 30px;
  width: 100%;
  max-width: 500px;
  outline: none;
`;

const ClearButton = styled.button`
  width: 50px;
  border: 1px solid #ff3a3ac9;
  background: #ff3a3ac9;
  text-align: center;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  outline: none;

  &:hover,
  &:visited,
  &:focus,
  &:active {
    background-color: #ff3a3ade;
    border-color: #ff3a3ade;
  }
`;

const SearchButton = styled.button`
  width: 50px;
  border: 1px solid #7c7777;
  background: #7c7777;
  text-align: center;
  color: #fff;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
  font-size: 20px;
  outline: none;

  &:hover,
  &:visited,
  &:focus,
  &:active {
    background-color: #3a3636;
    border-color: #3a3636;
  }
`;

export { Search };
