import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ResultImageContainer } from "./ImageContainer";
import styled from "styled-components";
// import { Preview } from "./Preview";

export const ImagesContainer = ({ images }) => {
  let [imageState, setImageState] = useState({
    open: false,
    previewId: "",
    download: { small: 0, medium: 0, large: 0 },
    information: {
      user: "",
      User_ID: 0,
      Type: "",
      Views: 0,
      Downloads: 0,
      likes: 0,
    },
  });
  //   const handleSetImageState = (image) => {
  //     setImageState({...imageState,{previewId:image.id,download:{small:`${image.previewHeight} x ${image.previewWidth}`}}});
  //   };
  return (
    <>
      <ResultImagesContainer>
        {images.map((image) => (
          <ResultImageContainer
            key={uuidv4()}
            src={image.previewURL}
            imageState={imageState}
            // onClick={() => handleSetImageState(image)}
          />
        ))}
      </ResultImagesContainer>
      {/* <Preview openStaus={imageState.open} /> */}
    </>
  );
};
const ResultImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  /* overflow: scroll; */
`;
