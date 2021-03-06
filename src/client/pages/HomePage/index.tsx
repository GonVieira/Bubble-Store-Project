import React from "react";
import { StyledHomeBody } from "./StyledComponents/style";

const HomePage = () => {
  return (
    <>
      <StyledHomeBody>
        <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/1LlAgvWD948?start=130&autoplay=1&mute=1&controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </StyledHomeBody>
    </>
  );
};

export default HomePage;
