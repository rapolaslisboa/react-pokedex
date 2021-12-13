import styled from "styled-components";
import { TypeStyle } from "../../../../../../../utils/TypeStyle";

const Card = ({ pokemon }) => {
  return (
    <Layout>
      <Figure>
        <img src={pokemon.img} alt={pokemon.name} loading="lazy" />
      </Figure>
      <Content>
        <span>Nº {pokemon.num}</span>
        <span>{pokemon.name}</span>
        <TypesContainer>
          {pokemon.type.map((type) => (
            <Type style={TypeStyle[type]} key={type}>
              <font>{type}</font>
            </Type>
          ))}
        </TypesContainer>
      </Content>
    </Layout>
  );
};

const Layout = styled.div`
  width: 300px;
  height: 350px;
  cursor: pointer;
  position: relative;
  top: 0;
  border-radius: 5px;
  background-color: #ffffff;

  &:hover {
    top: -6px;
    filter: brightness(0.95);
    transition: all 0.2s ease-out;
  }
`;

const Figure = styled.figure`
  display: flex;
  justify-content: center;
  background: #f2f2f2fc;
  width: 100%;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0;
  height: 220px;

  img {
    height: 160px;
  }
`;

const Content = styled.div`
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 20px;

  span {
    display: block;
  }

  span:nth-child(1) {
    color: #919191;
    font-size: 1rem;
  }

  span:nth-child(2) {
    margin-top: 5px;
    margin-bottom: 20px;
    color: #313131;
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

const TypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const Type = styled.div`
  width: 100%;
  border-radius: 5px;
  text-align: center;
`;

export { Card };
