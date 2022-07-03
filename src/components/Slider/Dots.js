import React from "react";
import styled from "styled-components";

const StyledDotsContianer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDot = styled.span`
  padding: 0.2rem 1.2rem;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 0.125rem;
  background: ${({ active }) => (active ? "#B91C1C" : "#18191a")};
  z-index: 2;
`;

const Dots = ({ activeSlideIndex, setActiveSlideIndex }) => {
  return (
    <StyledDotsContianer>
      {Array.from({ length: 5 }).map((slide, index) => (
        <StyledDot
          key={index}
          active={activeSlideIndex === index}
          onClick={() => {
            setActiveSlideIndex(index);
          }}
        />
      ))}
    </StyledDotsContianer>
  );
};

export default Dots;
