import { useState, useEffect, createRef } from "react";
import { usePokemon } from "../../../../../../hooks/usePokemon";
import {
  Input,
  Section,
  SearchContainer,
  ClearButton,
  SearchButton,
  Dropdown,
} from "./styles";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const { handlePokemons, getAllPokemons } = usePokemon();
  const [allPokemons, setAllPokemons] = useState([]);
  const [dropdownContent, setDropdownContent] = useState([]);
  const dropdownRef = createRef();

  const filterByNameOrNumber = (toBeCompared) => {
    return allPokemons.filter(
      (pokemon) =>
        pokemon.name.indexOf(
          toBeCompared.toLowerCase().charAt(0).toUpperCase() +
            toBeCompared.slice(1)
        ) > -1 ||
        pokemon.num.indexOf(
          toBeCompared.toLowerCase().charAt(0).toUpperCase() +
            toBeCompared.slice(1)
        ) > -1
    );
  };

  const resetTextFilter = () => {
    setSearchText("");
    setDropdownContent([]);
    handlePokemons([...allPokemons]);
  };

  const onChangeText = (event) => {
    setSearchText(event.target.value);

    const newFilter = filterByNameOrNumber(event.target.value);

    if (
      event.target.value === "" ||
      !event.target.value.match(/^(\s+\S+\s*)*(?!\s).*$/)
    )
      setDropdownContent([]);
    else setDropdownContent(newFilter);
  };

  // Filtrar os pokémons de acordo com o que foi submetido através do campo de entrada
  const filterPokemons = (event) => {
    event.preventDefault();
    const pokemons = filterByNameOrNumber(searchText);
    handlePokemons(pokemons);
  };

  // Filtrar pokémon de acordo com o pokémon selecionado no dropdown
  const filterPokemon = (selectedPokemon) => {
    setDropdownContent([]);
    const singlePokemon = allPokemons.filter(
      (pokemon) =>
        pokemon.name.indexOf(
          selectedPokemon.name.toLowerCase().charAt(0).toUpperCase() +
            selectedPokemon.name.slice(1)
        ) > -1 ||
        pokemon.num.indexOf(
          selectedPokemon.num.toLowerCase().charAt(0).toUpperCase() +
            selectedPokemon.num.slice(1)
        ) > -1
    );
    handlePokemons(singlePokemon);
  };

  useEffect(() => {
    (async () => {
      const pokemons = await getAllPokemons();
      setAllPokemons(pokemons);
    })();
    eventOnClickOutside();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const eventOnClickOutside = () => {
    document.addEventListener("click", function (event) {
      var isClickOnElement =
        dropdownRef.current && dropdownRef.current.contains(event.target);
      if (!isClickOnElement) {
        setDropdownContent([]);
      }
    });
  };

  return (
    <Section>
      <span>Pesquise por Pokémons da primeira geração!</span>
      <form onSubmit={filterPokemons}>
        <SearchContainer>
          <div
            style={{
              display: "flex",
              position: "relative",
              maxWidth: 550,
              width: "100%",
            }}
          >
            <Input
              value={searchText}
              onChange={onChangeText}
              placeholder="Digite o nome ou número do Pokémon..."
            />
            {searchText && (
              <ClearButton
                aria-label="clear"
                type="button"
                onClick={resetTextFilter}
              >
                <i className="fas fa-times" />
              </ClearButton>
            )}
            <SearchButton
              aria-label="search"
              type="submit"
              onClick={filterPokemons}
            >
              <i className="fa fa-search" />
            </SearchButton>
            {dropdownContent.length !== 0 && (
              <Dropdown ref={dropdownRef}>
                {dropdownContent.slice(0, 15).map((pokemon, index) => (
                  <div key={index} onClick={() => filterPokemon(pokemon)}>
                    {pokemon.name} ({pokemon.num})
                  </div>
                ))}
              </Dropdown>
            )}
          </div>
        </SearchContainer>
      </form>
    </Section>
  );
};

export { Search };
