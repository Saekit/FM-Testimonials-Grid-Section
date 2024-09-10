import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    ${({ theme }) => css`
      font-family: ${theme.fontPrimary};
      font-size: ${theme.fontSize.body};
      font-weight: ${theme.regular};
      line-height: ${theme.lineHeight.body};
    `}
    margin: 0;
  }
`;
export default GlobalStyle;
