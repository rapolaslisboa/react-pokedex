import styled from "styled-components";

const Search = () => {
  return (
    <Section>
      <span>Infome o nome ou número do Pokémon</span>
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

export { Search };
