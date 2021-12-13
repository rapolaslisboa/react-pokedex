import React from "react";
import styled from "styled-components";

const Pagination = ({ pokemonsPerPage, totalPokemons, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Nav>
      <List>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </List>
    </Nav>
  );
};

const Nav = styled.nav`
  margin-top: 100px;

  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 0;
    border: 2px solid #ac556c;
    background-color: #ffffff;
    color: #464444;
    cursor: pointer;

    &:hover,
    &:visited,
    &:focus,
    &:active {
      background-color: #ac556c;
      color: #ffffff;
      border: 2px solid #ac556c;
    }
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
