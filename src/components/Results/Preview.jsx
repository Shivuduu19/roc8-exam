import React from "react";
import styled from "styled-components";

export const Preview = ({openStatus}) => {
  return (
    <PreviewContainer open={openStatus}></PreviewContainer>
};
const PreviewContainer = styled.div`
  width: 80%;
  height: 70%;
  display: ${({open})=>open?block:none};
  background-color: red;
`;
