import React from "react";
import styled from "styled-components";

const MainButton = styled.button`
  &:hover .spearContianer {
    display: flex;
    padding-left: 10px;
  }

  &:hover .SpearLeft {
    padding-left: 100px;
    transform: rotate(90deg);
  }
`;
const StyledH1 = styled.h1`
  text-shadow: 0em 0em 0.31em #000000;
`;

const SpearLeft = styled.img`
  transform: rotate(-90deg);
  background-color: transparent;
`;

const SpearRight = styled.img`
  background-color: transparent;
`;

const SectionContainer = styled.div`
  position: relative;
  background-position: top center;
  background-image: url("./assets/images/Polemos_Army.jpeg") !important;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 400px;
  padding: 4% 0;
  max-height: 600px;
  overflow: hidden;

  &:after {
    background-color: #18191a;
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    opacity: 0.5;
    left: 0;
    z-index: 1;
  }
  @media (min-width: 500px) {
    height: 500px;
  }

  @media (min-width: 768px) {
    height: 100vh;
  }
`;

const StyledImg = styled.img`
  width: 90%;
  height: auto;
  max-width: 800px;
`;

const StyledTextContainer = styled.div`
  /* @media (min-width: 500px) {
    font-size: 3rem;
    line-height: 1;
  } */
`;

const Intro = () => {
  return (
    <SectionContainer className="flex flex-col justify-center items-center h-full font-poppins top-4">
      <div className="text-white relative z-40 px-6 w-full h-full flex flex-col justify-center items-center">
        <StyledTextContainer className="text-center text-4xl xss:text-5xl sm:text-6xl font-bold flex flex-col justify-center items-center ml:text-8xl">
          <StyledH1>THE PINNACLE</StyledH1>
          <StyledH1>OF GAMING</StyledH1>
        </StyledTextContainer>
        <StyledH1 className="py-2 text-xl md:text-2xl">
          GameFI | Guild | DAO
        </StyledH1>
      </div>

      <StyledImg
        className="z-10 absolute bg-transparent mt-2 md:mt-10"
        src="./assets/images/Pinnacle.png"
      />
    </SectionContainer>
  );
};

export default Intro;
