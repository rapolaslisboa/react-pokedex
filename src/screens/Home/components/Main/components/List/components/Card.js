import styled from "styled-components";
import { TypeStyle } from "../../../../../../../utils/TypeStyle";

const Card = ({ pokemon }) => {
  return (
    <CardLayout>
      <Figure>
        <img src={pokemon.img} alt={pokemon.name} loading="lazy" />
      </Figure>
      <span>Nº #{pokemon.num}</span>
      <h3>{pokemon.name}</h3>
      {pokemon.type.map((type) => (
        <div style={TypeStyle[type]}>
          <span>{type}</span>
        </div>
      ))}
    </CardLayout>
  );
};

const CardLayout = styled.div`
  width: 300px;
  height: 350px;
  cursor: pointer;
  position: relative;
  top: 0;
  box-shadow: 0 8px 30px -12px rgb(0 0 0 / 30%);

  &:hover {
    top: -6px;
    filter: brightness(0.95);
    box-shadow: 0px 4px 8px rgb(38 38 38 / 20%);
    transition: all 0.2s ease-out;
  }
`;

const Figure = styled.figure`
  background: #f2f2f291;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0;

  img {
    height: 180px;
  }
`;

export { Card };
