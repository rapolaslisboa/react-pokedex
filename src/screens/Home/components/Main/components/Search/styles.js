import styled from "styled-components";

export const Section = styled.section`
  height: fit-content;
  padding: 48px 16px;
  margin-top: 70px;
  text-align: center;
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

export const SearchContainer = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Input = styled.input`
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
  outline: none;
`;

export const Button = styled.button`
  width: 60px;
  height: 60px;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  outline: none;
`;

export const ClearButton = styled(Button)`
  border: 1px solid #ff3a3ac9;
  background: #ff3a3ac9;
  color: #fff;

  &:hover,
  &:visited,
  &:focus,
  &:active {
    background-color: #ff3a3ade;
    border-color: #ff3a3ade;
  }
`;

export const SearchButton = styled(Button)`
  border: 1px solid #7c7777;
  background: #7c7777;
  color: #fff;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  &:hover,
  &:visited,
  &:focus,
  &:active {
    background-color: #3a3636;
    border-color: #3a3636;
  }
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  padding: 20px 0;
  position: absolute;
  top: 60px;
  z-index: 9999;
  min-width: 300px;
  width: 100%;
  height: 110px;
  background-color: white;
  border-radius: 2px;
  border: 1px solid #cfd8dc;
  overflow: hidden;
  overflow-y: auto;

  div {
    display: flex;
    justify-content: center;
    place-items: center;
    height: 40px;
    padding: 7px;
    cursor: pointer;
    font-size: 1.1rem;
    border-bottom: 1px solid #cfd8dc;

    &:hover,
    &:visited,
    &:focus,
    &:active {
      background-color: #cfd8dc;
      border-color: #cfd8dc;
    }
  }
`;
