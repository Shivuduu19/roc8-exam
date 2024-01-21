import React from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

export const Search = ({
  placeHolder,
  searchValue,
  handleSearchValue,
  handleShowHome,
}) => {
  return (
    <>
      <SearchContainer>
        <StyledSearch />
        <SearchInput
          type="search"
          placeholder={placeHolder}
          onChange={handleSearchValue}
          value={searchValue}
        />

        <Button borders="#7484bb" onClick={handleShowHome}>
          GO!
        </Button>
      </SearchContainer>
    </>
  );
};
const SearchContainer = styled.div`
  background-color: transparent;
  backdrop-filter: blur(5px);
  display: flex;
  gap: 10px;
  padding: 10px;
  margin-top: 3rem;
  border: 2px solid whitesmoke;
  border-radius: 15px;
`;
const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 20px;
  border-left: 1px solid white;
  padding: 1rem;

  width: 90%;
  &::placeholder {
    color: #ee0606;
    font-size: 20px;
    font-weight: bold;
  }
`;
const StyledSearch = styled(IoSearch)`
  margin: auto;
  width: 10%;
  font-size: 50px;
`;
const Button = styled.button`
  font-family: inherit;
  font-size: 1rem;
  border: 3px solid ${({ borders }) => borders};
  border-radius: 15px;
  padding: 10px;
  &:active {
    transform: scale(1.1);
  }
  &:hover {
    color: #c63030;
  }
`;
