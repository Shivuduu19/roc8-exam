import React from "react";
import { v4 as uuidv4 } from "uuid";

import { ResultImageContainer } from "./ImageContainer";
import styled from "styled-components";

export const ImagesContainer = ({ images }) => {
  return (
    <ResultImagesContainer>
      {images.map((image) => (
        <ResultImageContainer key={uuidv4()} src={image.previewURL} />
      ))}
    </ResultImagesContainer>
  );
};
const ResultImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  /* overflow: scroll; */
`;
