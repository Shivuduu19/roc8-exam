import React from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

export const Home = () => {
  return (
    <HomeWrapper>
      <Container>
        <h1>Homepage</h1>
        <LoginContainer>
          <Button colors="#e451e4">login</Button>
          <Button borders="green">create Account</Button>
        </LoginContainer>
      </Container>
      <Desc>
        <DiscContainer>Discover over 2,000,000 free stock Images</DiscContainer>
        <SearchContainer>
          <StyledSearch />
          <SearchInput type="search" placeholder="Search" />
          <Button colors="#eaedee" borders="#7484bb">
            GO!
          </Button>
        </SearchContainer>
      </Desc>
    </HomeWrapper>
  );
};
const HomeWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  background-image: url("./public/mountains-190055_1280.jpg");
  /* background-attachment: fixed; */
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #161637;
  padding: 1rem 2rem;
  margin: 1rem 2rem;
  position: relative;
  border-radius: 15px;
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
const SearchContainer = styled.div`
  background-color: transparent;
  backdrop-filter: blur(5px);
  display: flex;
  padding: 10px;
  margin-top: 3rem;
  border: 2px solid whitesmoke;
  border-radius: 15px;
`;
const SearchInput = styled.input`
  background: transparent;
  border: none;
  border-left: 1px solid white;
  padding: 1rem;

  width: 90%;
  &::placeholder {
    color: red;
    font-size: 30px;
  }
`;
const StyledSearch = styled(IoSearch)`
  margin: auto;
  width: 10%;
  font-size: 50px;
`;
