import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    /* margin: 0;
    padding: 0;
    box-sizing: border-box; */
    -webkit-tap-highlight-color: transparent;

  }

  html{
    scroll-behavior: smooth;
    overflow-x: hidden;

  }
  /* html{
    scroll-behavior: smooth;
    ${({ activeModal }) =>
      activeModal &&
      css`
        overflow-y: hidden;
      `}
  } */
`;

export default GlobalStyle;
