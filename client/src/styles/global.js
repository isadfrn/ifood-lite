import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BLACK_500};
    color: ${({ theme }) => theme.COLORS.WHITE_500};
    font-family: ${({ theme }) => theme.FONTS.MAIN};
    outline: none;
    -webkit-font-smoothing: antialiased;
  }

  button, a {
    transition: filter 0.2s;
  }

  a {
    text-decoration: none;
  }

  button:hover, a:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;
