import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Search } from "../Home/Search";
import { ImagesContainer } from "./ImagesContainer";

export const ResultsPage = ({ searchValue, handleSearchValue }) => {
  const [images, setImages] = useState([]);
  console.log(images);
  useEffect(() => {
    loadImages();
  }, []);
  const loadImages = async () => {
    setImages(await fetchImages());
  };
  const fetchImages = async () => {
    const response = await fetch(
      `https://pixabay.com/api/?key=41942689-565b59fa7e0392c81c9fa2409&q=${searchValue}&image_type=photo`
    );
    const data = await response.json();
    // console.log(data.hits[0].previewURL);
    return data.hits;
  };
  return (
    <ResultsContainer>
      <Search
        placeHolder="Start new Search"
        searchValue={searchValue}
        handleSearchValue={handleSearchValue}
      />
      <ResultHighlighter>Results:{searchValue}</ResultHighlighter>
      <ImagesContainer images={images} />
    </ResultsContainer>
  );
};
const ResultsContainer = styled.div`
  width: 60%;
  margin: 2rem auto;
`;
const ResultHighlighter = styled.h1`
  font-size: large;
  font-weight: bold;
  font-size: 3rem;
  margin: 2rem auto;
  text-align: center;
`;
