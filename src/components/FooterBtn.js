import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled, { css } from "styled-components";

const StyledAnchor = styled.a`
  display: none;
  z-index: 111;
  ${({ activeBtn }) =>
    activeBtn &&
    css`
      display: block;
    `}
`;

const FooterBtn = () => {
  const [footerBtnState, setfooterBtnState] = useState(false);

  const handleFooterBtnState = () => {
    if (window.scrollY >= (document.body.scrollHeight / 100) * 70) {
      setfooterBtnState(true);
    } else {
      setfooterBtnState(false);
    }
  };

  window.addEventListener("scroll", handleFooterBtnState);
  // window.addEventListener("scroll", handleFooterBtnState);

  return (
    <StyledAnchor
      href="#"
      onClick={handleFooterBtnState}
      activeBtn={footerBtnState}
      className="sm:mr-3 flex justify-center items-center fixed bottom-5 right-3 p-2   rounded-t hover:--tw-scale-y: 1; transition-all	 duration-200 ease-in-out outline-none focus:outline-none text-white shadow-lg bg-gradient-to-r from-polemosColor to-red-600  hover:from-white border border-white hover:to-white hover:border-polemosColor hover:text-polemosColor"
    >
      <FaArrowUp className="w-3 h-5" />
    </StyledAnchor>
  );
};

export default FooterBtn;
