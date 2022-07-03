import React from "react";
import styled from "styled-components";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const StyledArrow = styled.button`
  z-index: 2;
  display: flex;
  position: absolute;
  color: #94191c;
  top: 40%;
  ${({ direction }) => (direction === "right" ? "right: 5px" : "left: 5px")};
  height: 70px;
  width: 70px;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;

  @media (min-width: 600px) {
    height: 50px;
    width: 50px;
  }
`;

const Arrows = ({ direction, onClick }) => {
  return (
    <StyledArrow direction={direction} onClick={onClick}>
      {direction === "right" ? (
        <IoMdArrowDropright className="w-16 h-16" />
      ) : (
        <IoMdArrowDropleft className="w-16 h-16" />
      )}
    </StyledArrow>
  );
};

export default Arrows;
