import React from "react";
import styled from "styled-components";

export const ResultImageContainer = ({ src }) => {
  return (
    <ImageContainer>
      <Image src={src} />
    </ImageContainer>
  );
};
const ImageContainer = styled.div`
  padding: 10px;
  padding: auto auto;
`;
const Image = styled.img`
  padding: 3px;
  border-radius: 5px;
`;
