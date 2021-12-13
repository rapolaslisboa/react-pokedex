import React from "react";
import styled from "styled-components";
import Pokedex from "../../../../assets/images/pokédex.png";

const Navbar = () => {
  return (
    <Nav>
      <Logo src={Pokedex} alt="Logo"></Logo>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  border-bottom: 1px solid #e0e0e0;
  height: 70px;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.img`
  cursor: pointer;
  height: 50px;

  @media (max-width: 768px) {
    max-height: 40px;
    max-width: 148px;
    width: 100%;
  }
`;

export { Navbar };
