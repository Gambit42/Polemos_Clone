import React, { useState } from "react";
import styled, { css } from "styled-components";
import Arrows from "./Arrows";
import Dots from "./Dots";

const StyledSliderContainer = styled.div`
  background-color: #18191a;
  width: 100%;
  height: 300px;
  max-width: 380px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media (min-width: 340px) {
    height: 380px;
  }
`;

const StyledSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.4s ease-in-out;
  background-image: ${(image) => `url("${image.image}")`};
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  z-index: 1;

  &::after {
    background-color: #353535;
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    opacity: 0.1;
    top: 0;
    left: 0;
    z-index: -1;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
    `}
`;

const Slider = () => {
  //Initializing Variables
  const SlideContent = [
    { id: 2, name: "Naru" },
    { id: 3, name: "Gniwers" },
    { id: 1, name: "Ashaks" },
    { id: 5, name: "Morkas" },
    { id: 4, name: "Humans" },
  ];
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handlePrevSlide = () => {
    if (activeSlideIndex !== 0) {
      setActiveSlideIndex(activeSlideIndex - 1);
    } else if (activeSlideIndex === 0) {
      setActiveSlideIndex(SlideContent.length - 1);
    }
  };

  const handleNextSlide = () => {
    if (activeSlideIndex !== SlideContent.length - 1) {
      setActiveSlideIndex(activeSlideIndex + 1);
    } else if (activeSlideIndex === SlideContent.length - 1) {
      setActiveSlideIndex(0);
    }
  };

  return (
    <div className="w-4/5 pt-16 flex flex-col justify-center items-center lg:pt-0">
      <StyledSliderContainer className="rounded">
        {SlideContent.map((slide, index) => (
          <StyledSlide
            className=""
            image={`./assets/images/${slide.name}.jpeg`}
            key={index}
            isActive={activeSlideIndex === index ? true : false}
          ></StyledSlide>
        ))}
        <Arrows direction="left" onClick={handlePrevSlide} />
        <Arrows direction="right" onClick={handleNextSlide} />
      </StyledSliderContainer>
      <Dots
        activeSlideIndex={activeSlideIndex}
        setActiveSlideIndex={setActiveSlideIndex}
      />
    </div>
  );
};

export default Slider;
