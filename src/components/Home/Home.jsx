import React, { useState } from "react";
import styled from "styled-components";

import { Search } from "./Search";
import { ResultsPage } from "../Results/Results";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showHome, setShowHome] = useState(true);
  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };
  const handleShowHome = () => {
    setShowHome(false);
  };

  return (
    <HomeWrapper>
      <Container>
        <h1>Homepage</h1>
        <LoginContainer>
          <Button colors="#e451e4">login</Button>
          <Button borders="green">create Account</Button>
        </LoginContainer>
      </Container>
      {showHome ? (
        <Desc>
          <DiscContainer>
            Discover over 2,000,000 free stock Images
          </DiscContainer>
          <Search
            searchValue={searchValue}
            handleSearchValue={handleSearchValue}
            placeHolder="Search"
            handleShowHome={handleShowHome}
          />
        </Desc>
      ) : (
        <ResultsPage
          searchValue={searchValue}
          handleSearchValue={handleSearchValue}
        />
      )}
    </HomeWrapper>
  );
};
const HomeWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  background-image: url("./public/mountains-190055_1280.jpg");
  background-attachment: fixed;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #161637;
  padding: 1rem 2rem;
  margin: 1rem 2rem;
  position: relative;
  border-radius: 15px;
  box-shadow: 5px red;
  z-index: 1;
  &:hover {
    outline: 3px solid #2525e0;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const Button = styled.button`
  color: ${({ colors }) => colors};
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
const Desc = styled.div`
  width: 60%;
  margin: 3rem auto;
  box-shadow: 5px;
`;
const DiscContainer = styled.div`
  font-size: 50px;
  text-align: center;
`;
