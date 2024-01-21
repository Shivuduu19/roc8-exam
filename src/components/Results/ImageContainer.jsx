import React, { useState } from "react";
import styled from "styled-components";

export const ResultImageContainer = ({ src, onClick }) => {
  return (
    <ImageContainer>
      <Image src={src} onClick={onClick} />
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
