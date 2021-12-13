import React from "react";
import styled from "styled-components";

const Pagination = ({
  currentPage,
  pokemonsPerPage,
  totalPokemons,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ marginTop: 100 }}>
      <List>
        {pageNumbers.map((number) => (
          <li key={number}>
            <Button
              currentPage={currentPage}
              number={number}
              aria-label="page-number"
              onClick={() => paginate(number)}
            >
              {number}
            </Button>
          </li>
        ))}
      </List>
    </div>
  );
};

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  border: 1px solid #4b4452;
  background-color: ${(props) =>
    props.currentPage === 1 && props.number === 1 ? "#4b4452" : "#ffffff"};
  color: ${(props) =>
    props.currentPage === 1 && props.number === 1 ? "#ffffff" : "#4b4452"};
  cursor: pointer;

  &:hover,
  &:visited,
  &:focus,
  &:active {
    background-color: #4b4452;
    color: #ffffff;
    border: 1px solid #4b4452;
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  gap: 6px;
`;

export { Pagination };
